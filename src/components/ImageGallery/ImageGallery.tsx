import { ImageData } from "../App/App";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

interface PropsImageGallery {
  hitsArrey: ImageData[];
  onImageClick: (imageUrl: string) => void;
}

const ImageGallery = ({
  hitsArrey,
  onImageClick,
}: PropsImageGallery): JSX.Element => {
  return (
    <div>
      <ul className={s.imageGallery}>
        {hitsArrey.map((hit: ImageData) => (
          <li key={hit.id}>
            <ImageCard hit={hit} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
