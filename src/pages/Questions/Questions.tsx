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
    <div id="questions" className="mainQuestionsDivContainer">
      <div className="titleQuestionsDiv">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <div className="mainQuestionsDiv">
        <div className="">
          <ul className="mainQuestionsUl">
            {questions.map((questionContent, index) => (
              <button
                key={index}
                type="button"
                onClick={() => toggleQuestion()}
                className="mainQuestionNameButton"
              >
                <span
                  key={index}
                  onClick={() => onShowQuestionContent(index)}
                  className="questionNameButton"
                >
                  <div className="questionTitleButton">
                    <div className="questionArrowContainer">
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
                    <div className="questionsUnderline"></div>
                  </div>
                </span>
              </button>
            ))}
            <button className="questionLastButton" type="button">
              More Info
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Questions;
