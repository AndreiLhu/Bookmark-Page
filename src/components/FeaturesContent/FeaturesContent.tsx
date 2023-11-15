import './FeaturesContent.css';

interface FeaturesContentProps {
  tab?: string;
  source_image?: string;
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
    <div className="features-content-div">
      <div className="features-image">
        <img src={source_image} alt="Features_Image" />
      </div>
      <div className="features-content-container">
        <h4 className="features-content-tab">{tab}</h4>
        <h2 className="features-content-title">{title}</h2>
        <p className="features-content-description">{description}</p>
        <button className="features-content-button">More info</button>
      </div>
    </div>
  );
};
export default FeaturesContent;
