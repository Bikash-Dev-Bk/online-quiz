import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizzess.css';

const Quizzes = () => {
    const quizzes = useLoaderData().data;
    const questions = quizzes.questions;
    
    return (
        <div className='quizzes'>
            <h1 className='quiz-header'>Quiz for {quizzes.name}</h1>
            <div>
              {
                questions.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
              }  
            </div>
            
        </div>
    );
};

export default Quizzes;