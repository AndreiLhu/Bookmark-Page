interface IQuestionCardProps {
  title?: string;
  content: string;
}

const QuestionCard = ({ title, content }: IQuestionCardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default QuestionCard;
