import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast, { Toaster } from 'react-hot-toast';
import './Quiz.css';



const Quiz = ({quiz,index}) => {
    const {correctAnswer,id, options, question} = quiz;

    const rightAnswer = () => toast.success(correctAnswer);
    const answerRight = () => toast.success('Right Answer');
    const answerWrong = () => toast.error('Wrong Answer');
    console.log(quiz);

    const optionChange = (event) => {
        const option = event.target.value;
        if (option === correctAnswer) {
            answerRight()
            }
            else{
            answerWrong()
            }
        }

    return (
        <div className='quiz-container'>
            <div className='quiz-question'>
                <h2>Question-{index+1}: {question}</h2>                         
                <p onClick={rightAnswer}><FontAwesomeIcon  icon={faEye}></FontAwesomeIcon></p>
                <Toaster />
            </div>
            <div className='quiz-options'>
                {
                    options.map(option => {    
                                        
                        return(
                            <>
                                <input  type="radio" id="html" name={id} 
                                value={option}   onChange= {(e)=>optionChange(e)}/>
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