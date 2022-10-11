import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData().data;
    const questions = quizzes.questions;
    
    return (
        <div>
            <h1>Quiz for {quizzes.name}</h1>
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