import React, { useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../assets/data';

const Quiz = () => {
  const [index, setIndex] = useState(0); // Adjusted initial index
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  const checkAnswer = (e, answer) => {
    if (!lock) { // Fixed typo in 'lock'
      if (question.answer === answer) {
        e.target.classList.add('correct');
      } else {
        e.target.classList.add('wrong');
        option_array[question.answer - 1].current.classList.add('correct');
      }
      setLock(true);
    }
  };

  const nextQuestion = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      option_array.forEach((option) => {
        option.current.classList.remove('correct', 'wrong');
      });
    } else {
      alert('Quiz Finished!'); // Add your desired action after finishing the quiz
    }
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
      <ul>
        <li ref={Option1} onClick={(e) => { checkAnswer(e, 1); }}>{question.Option1}</li>
        <li ref={Option2} onClick={(e) => { checkAnswer(e, 2); }}>{question.Option2}</li>
        <li ref={Option3} onClick={(e) => { checkAnswer(e, 3); }}>{question.Option3}</li>
        <li ref={Option4} onClick={(e) => { checkAnswer(e, 4); }}>{question.Option4}</li>
      </ul>
      <button onClick={nextQuestion}>Next</button> {/* Added onClick handler */}
      <div className='index'>{index + 1} of {data.length} questions</div>
    </div>
  );
};

export default Quiz;
