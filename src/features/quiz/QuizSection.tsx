import { quizQuestions } from '../../lib/quiz'

type QuizSectionProps = {
  answers: Record<number, string>
  onAnswerChange: (questionId: number, optionId: string) => void
}

export function QuizSection({ answers, onAnswerChange }: QuizSectionProps) {
  return (
    <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      <h2 className="text-xl font-semibold text-slate-900">10 Soruluk Base Airdrop Testi</h2>
      <p className="text-sm text-slate-600">
        Bu sorular oznel tercihlerini olcer; dogru/yanlis degil, profil bazli skor uretir.
      </p>

      <div className="space-y-4">
        {quizQuestions.map((question) => (
          <article key={question.id} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="mb-3 text-sm font-semibold text-slate-800">
              {question.id}. {question.title}
            </h3>

            <div className="grid gap-2 md:grid-cols-3">
              {question.options.map((option) => {
                const checked = answers[question.id] === option.id
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => onAnswerChange(question.id, option.id)}
                    className={[
                      'rounded-lg border px-3 py-2 text-left text-sm transition',
                      checked
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300',
                    ].join(' ')}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
