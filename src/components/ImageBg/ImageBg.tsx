import './ImageBg.css';
interface IImageBgProps {
  image_source: string;
  content?: any;
  alt: string;
  className: string;
}

const ImageBg = ({ image_source, content }: IImageBgProps) => {
  return (
    <div className="imageBg-container">
      <img src={image_source} alt="Image" className="imageBg-image" />
      <div>{content}</div>
    </div>
  );
};

export default ImageBg;
