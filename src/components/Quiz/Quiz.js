import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';
import './Quiz.css';



const Quiz = ({quiz}) => {
    const {correctAnswer,question,id, options} = quiz;

    
    const rightAnswer = () => toast.success(correctAnswer);
    const answerRight = () => toast.success('Right Answer');
    const answerWrong = () => toast.error('Wrong Answer');
    console.log(quiz);
    return (
        <div className='quiz-container'>
            <div className='quiz-question'>
                <h2>Question: {}{question}</h2>                         
                <p onClick={rightAnswer}><FontAwesomeIcon  icon={faEye}></FontAwesomeIcon></p>
                <Toaster />
            </div>
            <div className='quiz-options'>
                {
                    options.map(option => {    
                                        
                        return(
                            <>
                                <input type="radio" id="html" name={id} 
                                value="HTML"/>
                                <label for="html" >{option}</label><br/>
                                
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Quiz;