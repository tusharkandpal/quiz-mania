import "./Rules.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";
import { getQuiz } from "../../services/getDataService";
import { Quiz } from "../pages";

export const Rules = (): JSX.Element => {
  const { categoryId } = useParams();
  const {
    quizState: { activeQuestion, points },
    quizDispatch,
  } = useQuiz();

  useEffect(() => {
    (async () => {
      const res = await getQuiz(categoryId || "");
      quizDispatch({
        type: "SET_QUIZNAME",
        payload: { quizName: res?.quizName },
      });
      quizDispatch({
        type: "SET_QUESTIONS",
        payload: { questions: res?.questions },
      });
      quizDispatch({
        type: "SET_POINTS",
        payload: { points: res?.points },
      });
    })();
  }, [categoryId, quizDispatch]);

  return (
    <main className="rules_main">
      {activeQuestion === -1 ? (
        <div className="rules">
          <h2 className="rules_header">Instructions:</h2>
          <ol className="rules_list">
            <li className="rules_item">
              Each question has 4 options, select the correct answer.
            </li>
            <li className="rules_item">
              Each correct answer will give you {points} points.
            </li>
            <li className="rules_item">
              You cannot go back to the previous question.
            </li>
            <li className="rules_item">
              No negative marking for incorrect answers.
            </li>
          </ol>
          <button
            className="rules_btn"
            onClick={() => quizDispatch({ type: "SET_NEXT_QUE" })}
          >
            Let's Start
          </button>
        </div>
      ) : (
        <Quiz />
      )}
    </main>
  );
};
