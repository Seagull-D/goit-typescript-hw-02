import ImageCard, { ExtendedImageData } from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface PropsImageGallery {
  hitsArrey: ExtendedImageData[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery = ({
  hitsArrey,
  onImageClick,
}: PropsImageGallery): JSX.Element => {
  return (
    <div>
      <ul className={s.imageGallery}>
        {hitsArrey.map((hit: ExtendedImageData) => (
          <li key={hit.id}>
            <ImageCard hit={hit} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
