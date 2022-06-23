import { Question, SelectedAnswer } from "../context/quiz-context.types";

export const getTotalScore = (
  questions: Question[],
  selectedAnswers: SelectedAnswer[],
  points: number
): number =>
  questions.reduce((score, question, index) => {
    const correctOption = question.options.filter((option) => option.isRight);

    return correctOption[0].text === selectedAnswers[index].answer
      ? score + points
      : score;
  }, 0);

export const getScorePercentage = (
  totalQuestions: number,
  totalScore: number,
  points: number
): number => (totalScore / (totalQuestions * points)) * 100;
