import React from 'react';
import './Questions.css';
import data from '../../data/questions.json';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
const Questions: React.FC = () => {
  const [isQuestionOpen, setIsQuestionOpen] = React.useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = React.useState<number>(0);
  const { questions } = data;
  const onShowPlanetContent = React.useCallback((index: number) => {
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
        <div className="destinationInfoContainer">
          <ul className="planetsNameButtonsContainer">
            {questions.map((questionContent, index) => (
              <button type="button" onClick={() => toggleQuestion()}>
                <button
                  key={index}
                  onClick={() => onShowPlanetContent(index)}
                  className="planetsNameButton"
                >
                  {questionContent.title}

                  {isQuestionOpen ? 'close' : 'open'}
                </button>
              </button>
            ))}
            <div>
              {isQuestionOpen && (
                <QuestionCard content={questions[questionIndex].content} />
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Questions;
