export type QuestionCategory = 'concrete' | 'symbolic'

export type QuestionOption = {
  id: number
  label: string
}

export type Question = {
  id: string
  category: QuestionCategory
  text: string
  options: QuestionOption[]
}

export type SelectedAnswer = {
  questionId: string
  optionId: number
}

export type Step = 0 | 1 | 2 | 3 | 'result'
