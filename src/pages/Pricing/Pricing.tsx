import React from 'react';
import './Pricing.css';
import data from '../../data/extensionCard.json';
import ExtensionCard from '../../components/ExtensionCard/ExtensionCard';
const Pricing: React.FC = () => {
  const { extensionCard } = data;

  return (
    <>
      <div id="pricing">
        <div className="pricingTextContainer">
          <h1>Download the extension</h1>
          <p>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
        <ul className="cardContainer">
          {extensionCard.map((cardInfo, index) => (
            <div key={index} className="cardStyleContainer">
              <ExtensionCard
                browser_image={cardInfo.browser_image}
                title={cardInfo.title}
                version={cardInfo.version}
                dots_image={cardInfo.dots_image}
              />

              <a
                href={cardInfo.link}
                target="blank"
                className="extensionCardLink"
              >
                <div>
                  <button className="textLinkExtension">
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
