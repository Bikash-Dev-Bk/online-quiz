import React from 'react';
import './Topic.css'

const Topic = ({topic}) => {
    const {logo, name, total} = topic;
    return (
        <div className='topic'>
            <div className='course-image'>
                <img src={logo} alt="" />
            </div>
            <div>
                <h3>Course Name: {name}</h3>
                <p>Total Question: {total}</p>
                <div >
                    <button className='btn-start'>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Topic;