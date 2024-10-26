
let score = 0
let currentQuestion = 0;

const quizData =[
    {
        Question:"What is the largest organ in the human body?",
        Options:["Heart","Liver","Skin","Brain"],
        Answer:2
    },
    {
        Question:"How many body are in the adult human body?",
        Options:["156","206","256","306"],
        Answer:1,
    },
    {
        Question:"Which part of the brain controls balance and coordination?",
        Options:["Cerebrum","Cerebellum","Brainstem","Medulla"],
        Answer:1,
    },
    {
        Question:"What is the main function of red blood cells?",
        Options:["Carrying oxygen","Clotting blood","Fighting infections","Digesting food"],
        Answer:0,
    },
    {
        Question:"What is the name of the tube that connects the mouth to the stomach?",
        Options:["Trachea","Small intestine","Pharynx","Esophagus"],
        Answer:3
    }

]


function loadQuestion(currentQuestion){
    
    if (currentQuestion < 0 || currentQuestion >= quizData.length) {
        throw new Error("Invalid question index.");
    }

    const currentData = quizData[currentQuestion];
    
    if (!currentData || !currentData.Question || !Array.isArray(currentData.Options)) {
        throw new Error("Question or options data is missing.");
    }

    return {
            question: currentData.Question,
            options: currentData.Options
        };
}

function checkAnswer(selectedOptionIndex) {
    const currentData = quizData[currentQuestion];

    // Convert the selected option to a number (index)
    const selectedIndex = parseInt(selectedOptionIndex);

    if (!selectedIndex) {
        throw new Error("Please select an option.");
    } 

    // Check if the selected index matches the answer index and increment score if correct
    if (selectedIndex === currentData.Answer) {
    score++;
    }
    // Increment the current question and update the score display
    currentQuestion++;
    return score; 
}


function displayScore(){

    return score;
}


export {score,quizData,loadQuestion,currentQuestion,checkAnswer,displayScore}




