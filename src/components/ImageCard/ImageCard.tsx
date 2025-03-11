import { ImageData } from "../App/App";
import s from "./ImageCard.module.css";

export interface ExtendedImageData extends ImageData {
  urls: {
    regular: string;
  };
  alt_description: string;
}

interface PropsImgCard {
  hit: ExtendedImageData;
  onImageClick: (imageUrl: string) => void;
}

const ImageCard: React.FC<PropsImgCard> = ({
  hit,
  onImageClick,
}): JSX.Element => {
  return (
    <div>
      <img
        className={s.cardImg}
        src={hit.urls.regular}
        alt={hit.alt_description}
        onClick={() => onImageClick(hit.urls.regular)}
      />
    </div>
  );
};

export default ImageCard;
