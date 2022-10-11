import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

const Topic = ({topic}) => {
    const {logo, name, total, id} = topic;
    return (
        <div className='topic'>
            <div className='course-image'>
                <img src={logo} alt="" />
            </div>
            <div className='course-info'>
                <h3>Course Name: {name}</h3>
                <p>Total Question: {total}</p>
                <div >
                    <Link to={`/quiz/${id}`}>
                        <button className='btn-start'>Start Quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Topic;