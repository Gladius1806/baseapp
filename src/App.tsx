import { useMemo, useState } from 'react'
import { AirdropCalculatorSection } from './features/calculator/AirdropCalculatorSection'
import { ShareSection } from './features/share/ShareSection'
import { QuizSection } from './features/quiz/QuizSection'
import { buildXShareUrl, shareResultOnFarcaster } from './lib/farcaster'
import { maxPossibleScore, quizQuestions } from './lib/quiz'

function App() {
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [fdvUsd, setFdvUsd] = useState<number>(12_000_000_000)
  const [airdropPercent, setAirdropPercent] = useState<number>(5)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'quiz' | 'result'>('quiz')
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const score = useMemo(() => {
    return quizQuestions.reduce((acc, question) => {
      const selectedId = answers[question.id]
      const selectedOption = question.options.find((option) => option.id === selectedId)
      return acc + (selectedOption?.weight ?? 0)
    }, 0)
  }, [answers])

  const completionRate = useMemo(() => {
    if (maxPossibleScore === 0) return 0
    return score / maxPossibleScore
  }, [score])

  const airdropPoolUsd = useMemo(() => {
    return fdvUsd * (airdropPercent / 100)
  }, [fdvUsd, airdropPercent])

  const estimatedUserUsd = useMemo(() => {
    const userShareFactor = 0.00002 + completionRate * 0.00008
    return airdropPoolUsd * userShareFactor
  }, [airdropPoolUsd, completionRate])

  const profileLabel = useMemo(() => {
    if (completionRate >= 0.75) return 'Core Base Maxi'
    if (completionRate >= 0.45) return 'Balanced Base Explorer'
    return 'Early Base Curious'
  }, [completionRate])

  const handleAnswerChange = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }))
  }

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNextQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex]
    const hasCurrentAnswer = Boolean(answers[currentQuestion.id])
    if (!hasCurrentAnswer) return

    const isLast = currentQuestionIndex === quizQuestions.length - 1
    if (isLast) {
      setActiveTab('result')
      return
    }
    setCurrentQuestionIndex((prev) => Math.min(quizQuestions.length - 1, prev + 1))
  }

  const shareText = useMemo(() => {
    return `My Base Airdrop Simulator result: ${profileLabel} | Estimated airdrop: $${estimatedUserUsd.toLocaleString(
      'en-US',
      { maximumFractionDigits: 2 },
    )} #Base #Farcaster`
  }, [estimatedUserUsd, profileLabel])

  const handleShareX = () => {
    window.open(buildXShareUrl(shareText), '_blank', 'noopener,noreferrer')
  }

  const handleShareFarcaster = async () => {
    const success = await shareResultOnFarcaster({ text: shareText })
    if (!success) {
      setStatusMessage(
        'Farcaster share works inside Base App / Warpcast. In a normal browser, use Share on X.',
      )
    } else {
      setStatusMessage(null)
    }
  }

  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === quizQuestions.length
  const isResultLocked = !allAnswered

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-6 md:gap-6 md:px-6 md:py-10">
        <header className="rounded-3xl border border-indigo-200/30 bg-white p-5 shadow-2xl shadow-indigo-900/20 md:p-7">
          <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">Base Airdrop Mini App Simulator</h1>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            10-question personality test + dynamic airdrop calculator + share your result
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('quiz')}
              className={[
                'rounded-xl px-4 py-2 text-sm font-semibold transition',
                activeTab === 'quiz'
                  ? 'bg-slate-900 text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
              ].join(' ')}
            >
              Quiz
            </button>
            <button
              type="button"
              onClick={() => {
                if (allAnswered) setActiveTab('result')
              }}
              disabled={isResultLocked}
              className={[
                'rounded-xl px-4 py-2 text-sm font-semibold transition',
                activeTab === 'result'
                  ? 'bg-indigo-600 text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
                isResultLocked ? 'cursor-not-allowed opacity-40' : '',
              ].join(' ')}
            >
              Results + Share
            </button>
          </div>
        </header>

        {activeTab === 'quiz' && (
          <QuizSection
            answers={answers}
            onAnswerChange={handleAnswerChange}
            currentIndex={currentQuestionIndex}
            onPrev={handlePrevQuestion}
            onNext={handleNextQuestion}
            onGoResult={() => setActiveTab('result')}
            resultUnlocked={allAnswered}
          />
        )}

        {activeTab === 'result' && (
          <>
            <AirdropCalculatorSection
              fdvUsd={fdvUsd}
              airdropPercent={airdropPercent}
              onFdvChange={setFdvUsd}
              onAirdropPercentChange={setAirdropPercent}
            />

            <section className="rounded-3xl border border-emerald-100 bg-white/95 p-5 shadow-xl shadow-emerald-100 md:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold text-slate-900">Results Screen</h2>
                <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Answered: {answeredCount}/{quizQuestions.length}
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 p-5 text-white md:p-6">
                <p className="text-xs uppercase tracking-wider text-white/80">Your Profile Result</p>
                <p className="mt-1 text-2xl font-bold md:text-3xl">{profileLabel}</p>
                <p className="mt-2 text-sm text-white/85">
                  All questions completed. Share your estimate below.
                </p>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Completion Score</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">%{Math.round(completionRate * 100)}</p>
                </article>
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Airdrop Pool (USD)</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    ${airdropPoolUsd.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                  </p>
                </article>
                <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Estimated User Share (USD)</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    ${estimatedUserUsd.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                  </p>
                </article>
              </div>
            </section>

            <ShareSection
              onShareX={handleShareX}
              onShareFarcaster={handleShareFarcaster}
              statusMessage={statusMessage}
            />
          </>
        )}
      </div>
    </main>
  )
}

export default App
