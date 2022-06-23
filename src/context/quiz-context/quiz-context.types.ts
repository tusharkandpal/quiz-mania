export type QuizContextType = {
  quizState: QuizType;
  quizDispatch: (arg0: QuizActionType) => void;
};

export type QuizType = {
  quizName: string;
  questions: Question[];
  activeQuestion: number;
  selectedAnswers: SelectedAnswer[];
  points: number;
  score: number;
};

export type SelectedAnswer = {
  question: string;
  answer: string;
};

export type Question = {
  question: string;
  options: Option[];
};

export type Option = {
  text: string;
  isRight: boolean;
};

export type QuizActionType =
  | {
    type: "SET_QUIZNAME";
    payload: {
      quizName: string;
    };
  }
  | {
    type: "SET_QUESTIONS";
    payload: {
      questions: Question[];
    };
  }
  | {
    type: "SET_POINTS";
    payload: {
      points: number;
    };
  }
  | {
    type: "SET_NEXT_QUE";
  }
  | {
    type: "SET_ANSWERS";
    payload: {
      question: string;
      answer: string;
    };
  }
  | { type: "RESET" };
