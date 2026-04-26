export type QuizOption = {
  id: string
  label: string
  weight: number
}

export type QuizQuestion = {
  id: number
  title: string
  options: QuizOption[]
}
