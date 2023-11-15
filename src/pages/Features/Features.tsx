import React from 'react';
import './Features.css';
import data from '../../data/features.json';
import FeaturesContent from '../../components/FeaturesContent/FeaturesContent';

const Features: React.FC = () => {
  const [featuresIndex, setFeaturesIndex] = React.useState<number>(0);
  const { features } = data;

  const onChangeFeatures = React.useCallback((index: number) => {
    setFeaturesIndex(index);
  }, []);
  return (
    <>
      <div id="features" className="features-container">
        <div className="features-text-container">
          <h1>Features</h1>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div className="second-features-container">
          <ul className="buttons-div">
            {features.map((featuresInfo, index) => (
              <button
                key={index}
                onClick={() => onChangeFeatures(index)}
                className="features-button"
              >
                {featuresInfo.tab}
              </button>
            ))}
          </ul>
          <div className="buttons-line"></div>

          <FeaturesContent
            title={features[featuresIndex].title}
            description={features[featuresIndex].description}
            source_image={features[featuresIndex].source_image}
          />
        </div>
        <div className="features-background"></div>
      </div>
    </>
  );
};
export default Features;
