import './QuestionCard.css';
interface IQuestionCardProps {
  title?: string;
  content: string;
}

const QuestionCard = ({ title, content }: IQuestionCardProps) => {
  return (
    <div className="questionCardDiv">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default QuestionCard;
