interface FeaturesContentProps {
  tab?: string;
  source_image: string;
  title: string;
  description: string;
}

const FeaturesContent = ({
  tab,
  source_image,
  title,
  description,
}: FeaturesContentProps) => {
  return (
    <div className="mainContainer">
      <div>
        <h4>{tab}</h4>
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={source_image} alt="Features_Image" />
      </div>
    </div>
  );
};
export default FeaturesContent;
