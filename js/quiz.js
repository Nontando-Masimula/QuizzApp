let score = 0;
let currentQuestionIndex = 0;

const quizData = [
    {
        Question: "What is the largest organ in the human body?",
        Options: ["Heart", "Liver", "Skin", "Brain"],
        Answer: 2
    },
    {
        Question: "How many bones are in the adult human body?",
        Options: ["156", "206", "256", "306"],
        Answer: 1,
    },
    {
        Question: "Which part of the brain controls balance and coordination?",
        Options: ["Cerebrum", "Cerebellum", "Brainstem", "Medulla"],
        Answer: 1,
    },
    {
        Question: "What is the main function of red blood cells?",
        Options: ["Carrying oxygen", "Clotting blood", "Fighting infections", "Digesting food"],
        Answer: 0,
    },
    {
        Question: "What is the name of the tube that connects the mouth to the stomach?",
        Options: ["Trachea", "Small intestine", "Pharynx", "Esophagus"],
        Answer: 3
    }
];

function loadQuestion(currentQuestionIndex) {
    if (currentQuestionIndex < 0 || currentQuestionIndex >= quizData.length) {
        throw new Error("Invalid question index.");
    }

    const currentData = quizData[currentQuestionIndex];

    if (!currentData || !currentData.Question || !Array.isArray(currentData.Options)) {
        throw new Error("Question or options data is missing.");
    }

    return {
        question: currentData.Question,
        options: currentData.Options
    };
}

function checkAnswer(selectedOptionIndex) {
    const currentData = quizData[currentQuestionIndex];


    if (selectedOptionIndex === undefined || selectedOptionIndex === null) {
        throw new Error("Please select an option.");
    }

    const selectedIndex = parseInt(selectedOptionIndex);

    if (selectedIndex === currentData.Answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= quizData.length) {
        return {
            score: score,
            finished: true 
        };
    }

    return {
        score: score,
        finished: false 
    };
}

function displayScore() {
    return score;
}
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    }
  }

export { score, quizData, loadQuestion, currentQuestionIndex, checkAnswer, displayScore,shuffleQuestions};