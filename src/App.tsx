import { useMemo, useState } from 'react'
import {
  DISCLAIMER,
  HERO_HINT,
  QUESTION_HEADER,
  QUESTIONS,
  RESULT_MESSAGE,
  SUBTITLE,
  TITLE,
} from './data/questions'
import type { Question, SelectedAnswer, Step } from './types'
import { buildSeed, formatCopyText, generateNumberSets, generatePercent, pickQuestions } from './utils/lotto'

type ResultState = {
  sets: number[][]
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
      const [sets, percent] = await Promise.all([generateNumberSets(seed, 3), generatePercent(seed)])

      setResult({
        sets,
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
      await navigator.clipboard.writeText(formatCopyText(result.sets))
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

  function handleBack() {
    if (typeof step !== 'number' || step <= 1) {
      return
    }
    setSelected((prev) => prev.slice(0, -1))
    setStep((step - 1) as Step)
  }

  return (
    <main className="app-shell">
      <div className="bg-ornament bg-ornament-left" aria-hidden />
      <div className="bg-ornament bg-ornament-right" aria-hidden />

      {step === 0 ? (
        <section className="panel hero-panel">
          <p className="hero-tag">Today&apos;s Lucky Mixer</p>
          <p className="hero-icon" aria-hidden>
            🎯🍀
          </p>
          <h1>{TITLE}</h1>
          <p className="hero-subtitle">{SUBTITLE}</p>
          <p className="hero-hint">{HERO_HINT}</p>
          <button className="primary-btn" type="button" onClick={handleStart}>
            시작하기
          </button>
          <p className="disclaimer">{DISCLAIMER}</p>
        </section>
      ) : null}

      {typeof step === 'number' && step > 0 && currentQuestion ? (
        <section className="panel question-panel" key={`${currentQuestion.id}-${step}`}>
          <div className="question-nav">
            <button
              className="back-btn"
              type="button"
              onClick={handleBack}
              disabled={step <= 1 || isCalculating}
              aria-label="이전 질문으로 돌아가기"
            >
              ← 뒤로
            </button>
            <p className="mini-title">{QUESTION_HEADER}</p>
          </div>
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
          <p className="lucky-emoji" aria-hidden>
            🍀✨
          </p>
          <p className="result-title">{RESULT_MESSAGE}</p>
          <p className="result-percent">오늘 이 조합을 받은 사람 {result.percent}</p>

          {result.sets.map((set, setIndex) => (
            <div className="set-block" key={`set-${setIndex + 1}`}>
              <p className="set-label">추천 세트 {setIndex + 1}</p>
              <div className="number-row" role="list" aria-label={`추천 번호 세트 ${setIndex + 1}`}>
                {set.map((value, idx) => (
                  <span
                    className={`number-chip chip-${idx % 6}`}
                    role="listitem"
                    key={`set-${setIndex + 1}-num-${value}`}
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}

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
