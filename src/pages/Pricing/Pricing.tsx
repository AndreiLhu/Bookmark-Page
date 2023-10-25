import React from 'react';
import './Pricing.css';
import data from '../../data/extensionCard.json';
import ExtensionCard from '../../components/ExtensionCard/ExtensionCard';
import { Link } from 'react-router-dom';
const Pricing: React.FC = () => {
  const { extensionCard } = data;

  return (
    <>
      <div id="pricing">
        <h3>Download the extension</h3>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
        <ul>
          {extensionCard.map((cardInfo, index) => (
            <div key={index}>
              <ExtensionCard
                browser_image={cardInfo.browser_image}
                title={cardInfo.title}
                version={cardInfo.version}
                dots_image={cardInfo.dots_image}
              />

              <a href={cardInfo.link} target="blank">
                link{' '}
              </a>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Pricing;
