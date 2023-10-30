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
    <div className="extension-card-container">
      <img src={browser_image} alt="browser_image" />
      <h4 className="extension-card-title">{title}</h4>
      <p className="extension-card-version">{version}</p>
      <img
        src={dots_image}
        alt="dots_image"
        className="extension-card-dots-image"
      />

      <a href={link} />
    </div>
  );
};
export default ExtensionCard;
