import { Toaster, toast } from "react-hot-toast";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import fetchPictures from "../../services/api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal"; // Переносимо модалку сюди
import { number } from "prop-types";

export interface ImageData {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}
export type FetchResponse = ImageData[];
const App = () => {
  const [hits, setHits] = useState<ImageData[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  console.log(hits);

  useEffect(() => {
    if (!query) return;
    const getData = async (): Promise<void> => {
      setLoading(true);

      setIsError(false);

      try {
        const data: FetchResponse = await fetchPictures(query, page);
        if (data.length === 0) {
          toast.error("No images found for this request! 😕", {
            style: {
              background: "#b1cc29",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#d32f2f",
            },
            position: "top-left",
          });
        }
        setHits((prev) => [...prev, ...data]);
      } catch (error: unknown) {
        console.error(error);
        setIsError(true);
        toast.error(
          "There was an error loading images, please try again later😢",
          {
            style: {
              background: "red",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "10px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#d32f2f",
            },
            position: "top-left",
          }
        );
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleClick = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (newQuery: string): void => {
    setQuery(newQuery);
    setHits([]);
    setPage(1);
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <Toaster />
      <SearchBar request={handleSetQuery} />

      {!isError ? (
        <ImageGallery hitsArrey={hits} onImageClick={openModal} />
      ) : (
        <ErrorMessage />
      )}

      <Loader loading={isLoading} />

      {hits.length > 0 && !isLoading && !isError && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={selectedImage}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default App;
