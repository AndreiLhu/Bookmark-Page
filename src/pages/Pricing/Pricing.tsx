import React from 'react';
import './Pricing.css';
import data from '../../data/extensionCard.json';
import ExtensionCard from '../../components/ExtensionCard/ExtensionCard';
const Pricing: React.FC = () => {
  const { extensionCard } = data;

  return (
    <>
      <div id="pricing" className="pricing-main-div">
        <div className="pricing-text-container">
          <h1>Download the extension</h1>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <ul className="card-container">
          {extensionCard.map((cardInfo, index) => (
            <div key={index} className="card-style-container">
              <ExtensionCard
                browser_image={cardInfo.browser_image}
                title={cardInfo.title}
                version={cardInfo.version}
                dots_image={cardInfo.dots_image}
              />

              <a
                href={cardInfo.link}
                target="blank"
                className="extension-card-link"
              >
                <div>
                  <button className="text-link-extension">
                    Add & Install Extension
                  </button>
                </div>
              </a>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Pricing;
