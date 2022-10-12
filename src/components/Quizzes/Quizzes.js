import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizzess.css';

const Quizzes = () => {
    const quizzes = useLoaderData().data;
    const questions = quizzes.questions;
    
    return (
        <div className='quizzes'>
            <h1 className='quiz-header py-5'>Quiz for {quizzes.name}</h1>
            <div>
              {
                questions.map((quiz, i) => <Quiz
                key={quiz.id}
                quiz={quiz}
                index={i}
                ></Quiz>)
              }  
            </div>
            
        </div>
    );
};

export default Quizzes;