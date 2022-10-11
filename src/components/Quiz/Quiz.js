import React from 'react';
import './Quiz.css';

const Quiz = ({quiz}) => {
    const {correctAnswer,question,id, options} = quiz;
    console.log(quiz);
    return (
        <div className='quiz-container'>
            <h3>Quiz: {}{question}</h3>
            
            <div className='quiz-options'>
                {
                    options.map(option => {
                        return(
                            <>
                                <input type="radio" id="html" name={id} value="HTML"/>
                                <label for="html">{option}</label><br/>
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Quiz;