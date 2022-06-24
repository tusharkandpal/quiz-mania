import { createContext, useContext, useReducer } from "react";
import {
  QuizContextType,
  QuizType,
  QuizActionType,
} from "./quiz-context.types";

const QuizContext = createContext<QuizContextType>({} as QuizContextType);

export const quizInitialState: QuizType = {
  quizName: "",
  questions: [],
  activeQuestion: -1,
  selectedAnswers: [],
  points: 0,
  score: 0,
};

export const quizReducer = (
  state: QuizType,
  action: QuizActionType
): QuizType => {
  switch (action.type) {
    case "SET_QUIZNAME":
      return { ...state, quizName: action.payload.quizName };

    case "SET_QUESTIONS":
      return { ...state, questions: action.payload.questions };

    case "SET_POINTS":
      return { ...state, points: action.payload.points };

    case "SET_NEXT_QUE":
      return { ...state, activeQuestion: state.activeQuestion + 1 };

    case "SET_ANSWERS":
      const isAnswerSetAlready = state.selectedAnswers.find(
        (selectedAnswer) => selectedAnswer.question === action.payload.question
      );
      return {
        ...state,
        selectedAnswers: isAnswerSetAlready
          ? state.selectedAnswers.map((selectedAnswer) =>
            selectedAnswer.question === isAnswerSetAlready.question
              ? { ...selectedAnswer, answer: action.payload.answer }
              : selectedAnswer
          )
          : [
            ...state.selectedAnswers,
            {
              question: action.payload.question,
              answer: action.payload.answer,
            },
          ],
      };

    case "RESET":
      return quizInitialState;

    default:
      return state;
  }
};

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, quizInitialState);
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
