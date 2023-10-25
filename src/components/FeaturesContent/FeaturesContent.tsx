import './FeaturesContent.css';
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
    <div className="featuresContentDiv">
      <div className="featuresImage">
        <img src={source_image} alt="Features_Image" />
      </div>
      <div className="featuresContentContainer">
        <h4 className="featuresContentTab">{tab}</h4>
        <h2 className="featuresContentTitle">{title}</h2>
        <p className="featuresContentDescription">{description}</p>
        <button className="featuresContentButton">More info</button>
      </div>
    </div>
  );
};
export default FeaturesContent;
