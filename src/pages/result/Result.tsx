import "./Result.css";
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";

export const Result = (): JSX.Element => {
  const {
    quizState: { questions, selectedAnswers, points },
  } = useQuiz();

  const totalScore = questions.reduce((score, question, index) => {
    const correctOption = question.options.filter((option) => option.isRight);

    return correctOption[0].text === selectedAnswers[index].answer
      ? score + 5
      : score;
  }, 0);

  const scorePercentage = (totalScore / (questions.length * points)) * 100;

  return (
    <main className="quiz_main">
      {selectedAnswers.length !== 0 ? (
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
      ) : (
        <Link to="/" className="quiz_btn">
          Go Back Home
        </Link>
      )}
    </main>
  );
};
