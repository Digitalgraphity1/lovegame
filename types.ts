
export enum GameState {
  LANDING = 'LANDING',
  NAME_INPUT = 'NAME_INPUT',
  QUESTIONS = 'QUESTIONS',
  RESULTS = 'RESULTS',
}

export interface QuestionOption {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  text: string; // Can include placeholders like {partner1} or {partner2}
  options: QuestionOption[];
}
