import { useMemo, useState } from 'react'
import { DISCLAIMER, QUESTIONS, RESULT_MESSAGE, SUBTITLE, TITLE } from './data/questions'
import type { Question, SelectedAnswer, Step } from './types'
import { buildSeed, formatCopyText, generateNumbers, generatePercent, pickQuestions } from './utils/lotto'

type ResultState = {
  numbers: number[]
  bonus: number[]
  percent: string
}

function App() {
  const [step, setStep] = useState<Step>(0)
  const [questions, setQuestions] = useState<Question[]>([])
  const [selected, setSelected] = useState<SelectedAnswer[]>([])
  const [result, setResult] = useState<ResultState | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [copyStatus, setCopyStatus] = useState<'idle' | 'done' | 'fail'>('idle')

  const currentQuestion = useMemo(() => {
    if (typeof step !== 'number' || step < 1 || step > 3) {
      return null
    }
    return questions[step - 1] ?? null
  }, [questions, step])

  function prepareRound() {
    setQuestions(pickQuestions(QUESTIONS))
    setSelected([])
    setResult(null)
    setCopyStatus('idle')
    setIsCalculating(false)
  }

  function handleStart() {
    prepareRound()
    setStep(1)
  }

  async function handleSelect(optionId: number) {
    if (!currentQuestion || typeof step !== 'number') {
      return
    }

    const nextSelected = [...selected, { questionId: currentQuestion.id, optionId }]
    setSelected(nextSelected)

    if (step < 3) {
      setStep((step + 1) as Step)
      return
    }

    setIsCalculating(true)
    try {
      const seed = buildSeed(nextSelected)
      const [numbersResult, percent] = await Promise.all([
        generateNumbers(seed),
        generatePercent(seed),
      ])

      setResult({
        numbers: numbersResult.numbers,
        bonus: numbersResult.bonus,
        percent,
      })
      setStep('result')
    } finally {
      setIsCalculating(false)
    }
  }

  async function handleCopy() {
    if (!result) {
      return
    }

    try {
      await navigator.clipboard.writeText(formatCopyText(result.numbers, result.bonus))
      setCopyStatus('done')
    } catch {
      setCopyStatus('fail')
    }

    window.setTimeout(() => setCopyStatus('idle'), 1800)
  }

  function handleRetry() {
    prepareRound()
    setStep(1)
  }

  return (
    <main className="app-shell">
      <div className="bg-ornament bg-ornament-left" aria-hidden />
      <div className="bg-ornament bg-ornament-right" aria-hidden />

      {step === 0 ? (
        <section className="panel hero-panel">
          <p className="hero-tag">Today&apos;s Lucky Mixer</p>
          <h1>{TITLE}</h1>
          <p className="hero-subtitle">{SUBTITLE}</p>
          <button className="primary-btn" type="button" onClick={handleStart}>
            시작하기
          </button>
          <p className="disclaimer">{DISCLAIMER}</p>
        </section>
      ) : null}

      {typeof step === 'number' && step > 0 && currentQuestion ? (
        <section className="panel question-panel" key={currentQuestion.id}>
          <p className="progress">{step}/3</p>
          <h2>{currentQuestion.text}</h2>
          <div className="option-grid">
            {currentQuestion.options.map((option) => (
              <button
                className="option-btn"
                key={`${currentQuestion.id}-${option.id}`}
                type="button"
                onClick={() => void handleSelect(option.id)}
                disabled={isCalculating}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {step === 'result' && result ? (
        <section className="panel result-panel">
          <p className="result-title">{RESULT_MESSAGE}</p>
          <p className="result-percent">오늘 이 조합을 받은 사람 {result.percent}</p>

          <div className="number-row" role="list" aria-label="추천 번호">
            {result.numbers.map((value, idx) => (
              <span className={`number-chip chip-${idx % 6}`} role="listitem" key={`main-${value}`}>
                {value}
              </span>
            ))}
          </div>

          <p className="bonus-label">보조 번호</p>
          <div className="number-row bonus-row" role="list" aria-label="보조 번호">
            {result.bonus.map((value, idx) => (
              <span className={`number-chip bonus-chip chip-${(idx + 2) % 6}`} role="listitem" key={`bonus-${value}`}>
                {value}
              </span>
            ))}
          </div>

          <div className="action-row">
            <button className="primary-btn" type="button" onClick={() => void handleCopy()}>
              번호 복사
            </button>
            <button className="secondary-btn" type="button" onClick={handleRetry}>
              다시하기
            </button>
          </div>

          {copyStatus === 'done' ? <p className="copy-status">복사 완료</p> : null}
          {copyStatus === 'fail' ? <p className="copy-status fail">복사 실패</p> : null}

          <p className="disclaimer">{DISCLAIMER}</p>
        </section>
      ) : null}
    </main>
  )
}

export default App
