import "./Quiz.css";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/context";

export const Quiz = (): JSX.Element => {
  const {
    quizState: { questions, activeQuestion, points, selectedAnswers },
    quizDispatch,
  } = useQuiz();

  const currentQuestion = questions[activeQuestion];
  const currentAnswer = selectedAnswers[activeQuestion]?.answer;

  return (
    <main className="quiz_main">
      <div className="quiz_details">
        <strong>
          Question {activeQuestion + 1}/{questions.length}
        </strong>
        <strong>Points: {points}</strong>
      </div>
      <h2 className="quiz_header">{currentQuestion.question}</h2>
      <ul className="quiz_options_list">
        {currentQuestion.options.map(({ text }) => (
          <li
            className={`quiz_option_item ${currentAnswer === text && "quiz_option_active"
              }`}
            key={text}
            onClick={() =>
              quizDispatch({
                type: "SET_ANSWERS",
                payload: {
                  question: currentQuestion.question,
                  answer: text,
                },
              })
            }
          >
            {text}
          </li>
        ))}
      </ul>
      {activeQuestion === questions.length-1 ? (
        <Link
          to="/result"
          className={`${currentAnswer ? "active_btn" : "inactive_btn"
            } quiz_btn`}
        >
          Submit
        </Link>
      ) : (
        <button
          className={`${currentAnswer ? "active_btn" : "inactive_btn"
            } quiz_btn`}
          onClick={() => {
            quizDispatch({ type: "SET_NEXT_QUE" });
          }}
        >
          Next Question
        </button>
      )}
    </main>
  );
};
