import { getScorePercentage, getTotalScore } from "./quizUtils";

describe("testing quizUtils", () => {
  // arrange
  const points = 10;

  // 1
  test("testing getTotalScore util", () => {
    // arrange
    const questions = [
      {
        question: "How many members are there in Korean boy band – BTS?",
        options: [
          { text: "5", isRight: false },
          { text: "6", isRight: false },
          { isRight: true, text: "7" },
          { text: "8", isRight: false },
        ],
      },
      {
        options: [
          { isRight: false, text: "Sam Smith" },
          { isRight: false, text: "Taylor Swift" },
          { text: "Selena Gomez", isRight: false },
          { text: "Billie Eilish", isRight: true },
        ],
        question: "Which singer can’t stop staring at those ocean eyes?",
      },
    ];

    const answers = [
      {
        question: "How many members are there in Korean boy band – BTS?",
        answer: "7",
      },
      {
        question: "Which singer can’t stop staring at those ocean eyes?",
        answer: "Taylor Swift",
      },
    ];

    // act
    const resultedQuizScore = getTotalScore(questions, answers, points);

    // assert
    expect(resultedQuizScore).toEqual(10);
  });

  // 2
  test("testing getScorePercentage util", () => {
    // arrange
    const totalQuestions = 5;
    const totalScore = 20;

    // act
    const resultedScorePercentage = getScorePercentage(
      totalQuestions,
      totalScore,
      points
    );

    // assert
    expect(resultedScorePercentage).toEqual(40);
  });
});
