import "./Result.css";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/context";
import { getScorePercentage, getTotalScore } from "../../utils/quizUtils";

export const Result = (): JSX.Element => {
  const {
    quizState: { questions, selectedAnswers, points },
    quizDispatch,
  } = useQuiz();

  const totalScore = getTotalScore(questions, selectedAnswers, points);

  const scorePercentage = getScorePercentage(
    questions.length,
    totalScore,
    points
  );

  return (
    <main className="quiz_main">
      {selectedAnswers.length !== 0 && (
        <>
          <h1 className="result_header">
            Final Score: {totalScore}/{questions.length * points}{" "}
            {scorePercentage >= 60 ? "😄" : scorePercentage > 30 ? "😔" : "😐"}
          </h1>
          {questions.map(({ question, options }, index) => (
            <div key={question} className="result">
              <div className="quiz_details">
                <strong>
                  Question {index + 1}/{questions.length}
                </strong>
                <strong>Points: {points}</strong>
              </div>
              <h2 className="quiz_header">{question}</h2>
              <ul className="quiz_options_list">
                {options.map(({ text, isRight }) => (
                  <li
                    className={`${
                      isRight
                        ? "correct_answer"
                        : selectedAnswers[index].answer === text
                        ? "incorrect_answer"
                        : "result_option_item"
                    }`}
                    key={text}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      )}
      <Link
        to="/"
        className="quiz_btn"
        onClick={() => quizDispatch({ type: "RESET" })}
      >
        Go Back Home
      </Link>
    </main>
  );
};
