import './ExtensionCard.css';
interface ExtensionCardProps {
  browser_image: string;
  title: string;
  version: string;
  dots_image: string;
  link?: string;
}

const ExtensionCard = ({
  browser_image,
  title,
  version,
  dots_image,
  link,
}: ExtensionCardProps) => {
  return (
    <div className="extensionCardContainer">
      <img src={browser_image} alt="browser_image" />
      <h4>{title}</h4>
      <p>{version}</p>
      <img src={dots_image} alt="dots_image" />
      <a href={link} />
    </div>
  );
};
export default ExtensionCard;
