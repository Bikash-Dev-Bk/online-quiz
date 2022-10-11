import React from 'react';

const Quiz = ({quiz}) => {
    const {correctAnswer,question,id, options} = quiz;
    console.log(quiz);
    return (
        <div>
            <h3>Quiz: {}{question}</h3>
            <div>
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