import './ExtensionCard.css';
interface IExtensionCardProps {
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
}: IExtensionCardProps) => {
  return (
    <div className="extensionCardContainer">
      <img src={browser_image} alt="browser_image" />
      <h4 className="extensionCardTitle">{title}</h4>
      <p className="extensionCardVersion">{version}</p>
      <img
        src={dots_image}
        alt="dots_image"
        className="extensionCardDotsImage"
      />

      <a href={link} />
    </div>
  );
};
export default ExtensionCard;
