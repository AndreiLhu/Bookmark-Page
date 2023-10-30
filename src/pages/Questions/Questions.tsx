import React from 'react';
import './Questions.css';
import data from '../../data/questions.json';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Questions: React.FC = () => {
  const [isQuestionOpen, setIsQuestionOpen] = React.useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = React.useState<number>(0);
  const { questions } = data;
  const onShowQuestionContent = React.useCallback((index: number) => {
    setQuestionIndex(index);
  }, []);

  const toggleQuestion = () => setIsQuestionOpen(!isQuestionOpen);

  return (
    <div id="questions" className="main-questions-div-container">
      <div className="title-questions-div">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="main-questions-div">
        <div className="">
          <ul className="main-questions-ul">
            {questions.map((questionContent, index) => (
              <button
                key={index}
                type="button"
                onClick={() => toggleQuestion()}
                className="main-question-name-button"
              >
                <span
                  key={index}
                  onClick={() => onShowQuestionContent(index)}
                  className="question-name-button"
                >
                  <div className="question-title-button">
                    <div className="question-arrow-container">
                      {questionContent.title}

                      {isQuestionOpen && questionIndex === index ? (
                        <AiOutlineUp />
                      ) : (
                        <AiOutlineDown />
                      )}
                    </div>
                    <div>
                      {isQuestionOpen && questionIndex === index && (
                        <QuestionCard
                          content={questions[questionIndex].content}
                        />
                      )}
                    </div>
                    <div className="questions-underline"></div>
                  </div>
                </span>
              </button>
            ))}
            <button className="question-last-button" type="button">
              More Info
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Questions;
