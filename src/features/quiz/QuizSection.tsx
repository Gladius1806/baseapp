import { quizQuestions } from '../../lib/quiz'

type QuizSectionProps = {
  answers: Record<number, string>
  onAnswerChange: (questionId: number, optionId: string) => void
  currentIndex: number
  onPrev: () => void
  onNext: () => void
  onGoResult: () => void
  resultUnlocked: boolean
}

export function QuizSection({
  answers,
  onAnswerChange,
  currentIndex,
  onPrev,
  onNext,
  onGoResult,
  resultUnlocked,
}: QuizSectionProps) {
  const total = quizQuestions.length
  const question = quizQuestions[currentIndex]
  const selectedId = answers[question.id]
  const progress = Math.round((Object.keys(answers).length / total) * 100)
  const isFirst = currentIndex === 0
  const isLast = currentIndex === total - 1

  return (
    <section className="space-y-5 rounded-3xl border border-indigo-100 bg-white/90 p-5 shadow-xl shadow-indigo-100 md:p-7">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">10 Question Base Airdrop Test</h2>
        <p className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          {question.id}/{total}
        </p>
      </div>

      <div className="space-y-2">
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-500">Progress: {progress}%</p>
      </div>

      <article
        key={question.id}
        className="animate-[fadeIn_.35s_ease] rounded-2xl border border-slate-100 bg-slate-50 p-4 md:p-5"
      >
        <h3 className="mb-4 text-base font-semibold text-slate-900 md:text-lg">{question.title}</h3>

        <div className="grid gap-3">
          {question.options.map((option) => {
            const checked = selectedId === option.id
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => onAnswerChange(question.id, option.id)}
                className={[
                  'group rounded-xl border px-4 py-3 text-left text-sm transition-all duration-300 md:text-base',
                  checked
                    ? 'scale-[1.01] border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md shadow-indigo-100'
                    : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow',
                ].join(' ')}
              >
                <span className="font-medium">{option.label}</span>
              </button>
            )
          })}
        </div>
      </article>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Back
        </button>
        <div className="flex items-center gap-2">
          {resultUnlocked && (
            <button
              type="button"
              onClick={onGoResult}
              className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-100"
            >
              Open Results
            </button>
          )}
          <button
            type="button"
            onClick={onNext}
            disabled={!selectedId}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isLast ? 'Finish Quiz' : 'Next'}
          </button>
        </div>
      </div>
    </section>
  )
}
