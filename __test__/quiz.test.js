
import {score, quizData,loadQuestion,currentQuestion,checkAnswer,displayScore} from '../js/quiz.js'

describe('[Score]',()=>{
    test('Score is defined',()=>{
        expect(score).toBeDefined()
    })

    test('Score is a number',()=>{
        expect(typeof score).toBe('number')
    })
})

describe('[currentQuestion]',()=>{
   test('currentQuestion  is defined',()=>{
        expect(currentQuestion).toBeDefined()
    })

    test('currentQuestion is a number',()=>{
        expect(typeof currentQuestion).toBe('number')
    })
    
})

describe('quizData',()=>{
    test('Quiz data array is defined',()=>{
        expect(quizData).toBeDefined()
    })
    test('If the quiz data is an array',()=>{
        expect(Array.isArray(quizData)).toBe(true);
    })

    test('Quiz data array is not empty',()=>{
        const index=5;
        expect(quizData.length).toBe(index)
    })
    test('Quiz data array contains objects with required properties',()=>{
        const index=0;
        expect(quizData[index]).toHaveProperty('Question')
        expect(quizData[index]).toHaveProperty('Options')
        expect(quizData[index]).toHaveProperty('Answer')
    })


    test('Question property is a string',()=>{
        const index=0;
        expect(typeof quizData[0].Question).toBe('string')
    })

    test('Options property is an array',()=>{

        const index=0;
        expect(Array.isArray(quizData[index].Options)).toBeTruthy();
    })
    test('Answer property is a number',()=>{
        const index=0;
        expect(typeof quizData[index].Answer).toBe('number')
    })
    
})

describe('[loadQuestion]',()=>{
    test('loadQuestion is defined',()=>{
        expect(loadQuestion).toBeDefined()
    })
    test('loadQuestion is a function',()=>{
        expect(typeof loadQuestion).toBe('function')
    })
    test("Should throw an error if the current data loaded doesn't have have a question",()=>{
        const currentData =0;
        quizData[currentData].Question='';
        
        expect(() => loadQuestion(currentData)).toThrow("Question or options data is missing.");
    })

    test("should throw an error if currentQuestion index is out of bounds", () => {

        let index= -1;
        
         
        expect(() => loadQuestion(index)).toThrow("Invalid question index");
        index=5;
        expect(() => loadQuestion(index)).toThrow("Invalid question index");
    });

})

describe('[checkAnswer]',()=>{
    test('checkAnswer is defined',()=>{
        expect(checkAnswer).toBeDefined()
    })
    test('checkAnswer is a function',()=>{
        expect(typeof checkAnswer).toBe('function')
    })

    test('Throw an error if no option is selected', () => {
        const selectedAnswer = '';
     expect(() => checkAnswer(selectedAnswer)).toThrow( 'Please select an option');
    }) 
    
    test('should increment the score if the selected answer is correct',()=>{
        let validAnswer = quizData[0].Answer;
        correctAnswer =2;
       expect (validAnswer).toBe(correctAnswer);
        
    })

})


describe('[displayScore]',()=>{
   test('displayScore is defined',()=>{
        expect(displayScore).toBeDefined()
    })
    test('displayScore is a function',()=>{
        expect(typeof displayScore).toBe('function')
    })
})
