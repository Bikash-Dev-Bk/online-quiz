import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            <div className='banner'>
                <h2 className='banner-title'>This is quiz!!</h2>
            </div>
            <div className='topics'>
                {
                    topics.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
        
    );
};

export default Home;