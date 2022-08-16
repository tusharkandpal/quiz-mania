import { quizReducer, quizInitialState } from "./quiz-context";
import { QuizActionType } from "./quiz-context.types";

describe("executing quiz context", () => {
  // 1
  test("setting quiz name", () => {
    // arrange
    const action: QuizActionType = {
      type: "SET_QUIZNAME",
      payload: {
        quizName: "Friends",
      },
    };

    const expectedQuizState = {
      quizName: "Friends",
      questions: [],
      activeQuestion: -1,
      selectedAnswers: [],
      points: 0,
      score: 0,
    };

    // act
    const resultedQuizState = quizReducer(quizInitialState, action);

    // assert
    expect(resultedQuizState).toEqual(expectedQuizState);
  });

  // 2
  test("setting quiz questions", () => {
    // arrange
    const action: QuizActionType = {
      type: "SET_QUESTIONS",
      payload: {
        questions: [
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
        ],
      },
    };

    const expectedQuizState = {
      quizName: "",
      questions: [
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
      ],
      activeQuestion: -1,
      selectedAnswers: [],
      points: 0,
      score: 0,
    };

    // act
    const resultedQuizState = quizReducer(quizInitialState, action);

    // assert
    expect(resultedQuizState).toEqual(expectedQuizState);
  });

  // 3
  test("setting quiz points", () => {
    // arrange
    const action: QuizActionType = {
      type: "SET_POINTS",
      payload: {
        points: 10,
      },
    };

    const expectedQuizState = {
      quizName: "",
      questions: [],
      activeQuestion: -1,
      selectedAnswers: [],
      points: 10,
      score: 0,
    };

    // act
    const resultedQuizState = quizReducer(quizInitialState, action);

    // assert
    expect(resultedQuizState).toEqual(expectedQuizState);
  });

  // 4
  test("setting quiz next que", () => {
    // arrange
    const action: QuizActionType = {
      type: "SET_NEXT_QUE",
    };

    const expectedQuizState = {
      quizName: "",
      questions: [],
      activeQuestion: 0,
      selectedAnswers: [],
      points: 0,
      score: 0,
    };

    // act
    const resultedQuizState = quizReducer(quizInitialState, action);

    // assert
    expect(resultedQuizState).toEqual(expectedQuizState);
  });

  // 5
  test("setting quiz answers", () => {
    // arrange
    const action: QuizActionType = {
      type: "SET_ANSWERS",
      payload: {
        answer: "Stan Lee and Jack Kirby",
        question: "Who originally created the Avengers?",
      },
    };

    const actionAgain: QuizActionType = {
      type: "SET_ANSWERS",
      payload: {
        answer: "Ant and Dec",
        question: "Who originally created the Avengers?",
      },
    };

    const expectedQuizState = {
      quizName: "",
      questions: [],
      activeQuestion: -1,
      selectedAnswers: [
        {
          answer: "Stan Lee and Jack Kirby",
          question: "Who originally created the Avengers?",
        },
      ],
      points: 0,
      score: 0,
    };

    const expectedQuizStateAgain = {
      quizName: "",
      questions: [],
      activeQuestion: -1,
      selectedAnswers: [
        {
          answer: "Ant and Dec",
          question: "Who originally created the Avengers?",
        },
      ],
      points: 0,
      score: 0,
    };

    // act
    const resultedQuizState = quizReducer(quizInitialState, action);
    const resultedQuizStateAgain = quizReducer(resultedQuizState, actionAgain);

    // assert
    expect(resultedQuizState).toEqual(expectedQuizState);
    expect(resultedQuizStateAgain).toEqual(expectedQuizStateAgain);
  });

  // 6
  test("re-setting quiz state", () => {
    // arrange
    const action: QuizActionType = {
      type: "RESET",
    };

    const expectedQuizState = {
      quizName: "",
      questions: [],
      activeQuestion: -1,
      selectedAnswers: [],
      points: 0,
      score: 0,
    };

    // act
    const resultedQuizState = quizReducer(quizInitialState, action);

    // assert
    expect(resultedQuizState).toEqual(expectedQuizState);
  });

  // 7
  test("DEFAULT quiz state", () => {
    // arrange
    const expectedQuizState = {
      quizName: "",
      questions: [],
      activeQuestion: -1,
      selectedAnswers: [],
      points: 0,
      score: 0,
    };

    // act
    const resultedQuizState = quizReducer(
      quizInitialState,
      {} as QuizActionType
    );

    // assert
    expect(resultedQuizState).toEqual(expectedQuizState);
  });
});
