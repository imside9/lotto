import type { Question, SelectedAnswer } from '../types'

const textEncoder = new TextEncoder()

function shuffle<T>(items: T[]): T[] {
  const cloned = [...items]
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = cloned[i]
    cloned[i] = cloned[j]
    cloned[j] = tmp
  }
  return cloned
}

function formatDateSeed(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}${month}${day}`
}

async function digestText(source: string): Promise<Uint8Array> {
  const bytes = textEncoder.encode(source)
  const hashBuffer = await crypto.subtle.digest('SHA-256', bytes)
  return new Uint8Array(hashBuffer)
}

export function pickQuestions(pool: Question[]): Question[] {
  const concrete = pool.filter((q) => q.category === 'concrete')
  const symbolic = pool.filter((q) => q.category === 'symbolic')

  const selectedConcrete = shuffle(concrete).slice(0, 2)
  const selectedSymbolic = shuffle(symbolic).slice(0, 1)

  return shuffle([...selectedConcrete, ...selectedSymbolic])
}

export function buildSeed(selected: SelectedAnswer[], date = new Date()): string {
  const answerPart = selected.map((item) => `${item.questionId}:${item.optionId}`).join('|')
  return `${answerPart}|${formatDateSeed(date)}`
}

export async function generateNumbers(seed: string): Promise<{ numbers: number[]; bonus: number[] }> {
  const picked = new Set<number>()
  let round = 0

  while (picked.size < 8) {
    const hashBytes = await digestText(`${seed}|${round}`)

    for (const byte of hashBytes) {
      picked.add((byte % 45) + 1)
      if (picked.size === 8) {
        break
      }
    }

    round += 1
  }

  const values = Array.from(picked)
  const numbers = values.slice(0, 6).sort((a, b) => a - b)
  const bonus = values.slice(6, 8).sort((a, b) => a - b)

  return { numbers, bonus }
}

export async function generatePercent(seed: string): Promise<string> {
  const hashBytes = await digestText(`${seed}|percent`)
  const seedNumber =
    (hashBytes[0] << 24) |
    (hashBytes[1] << 16) |
    (hashBytes[2] << 8) |
    hashBytes[3]

  const normalized = Math.abs(seedNumber) % 21
  const percent = (normalized / 10 + 1).toFixed(1)

  return `${percent}%`
}

export function formatCopyText(numbers: number[], bonus: number[]): string {
  return `메인: ${numbers.join(' ')} | 보조: ${bonus.join(' ')}`
}
