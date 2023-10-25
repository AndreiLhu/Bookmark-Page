import React from 'react';

import './Features.css';
import data from '../../data/features.json';
import FeaturesContent from '../../components/FeaturesContent';
const Features: React.FC = () => {
  const [featuresIndex, setFeaturesIndex] = React.useState<number>(0);
  const { features } = data;

  const onChangeFeatures = React.useCallback((index: number) => {
    setFeaturesIndex(index);
  }, []);
  return (
    <>
      <div id="features">
        <div className="featuresTextContainer">
          <h1>Features</h1>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div>
          <ul className="mainFeaturesContaier">
            {features.map((featuresInfo, index) => (
              <div key={index}>
                <button
                  key={index}
                  onClick={() => onChangeFeatures(index)}
                  className="featuresButton"
                >
                  {featuresInfo.tab}
                </button>
              </div>
            ))}
          </ul>
          <FeaturesContent
            title={features[featuresIndex].title}
            description={features[featuresIndex].description}
            source_image={features[featuresIndex].source_image}
          />
        </div>
      </div>
    </>
  );
};
export default Features;
