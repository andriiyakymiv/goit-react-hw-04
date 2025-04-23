import { useEffect, useState } from "react";





import { getPhotos } from "./services/unsplashApi";
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  //add a check on invalid query
  const [isEmpty, setIsEmpty] = useState(false);
  //modal
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const { results, totalPages } = await getPhotos(query, page);
        setPictures((prev) => {
          return [...prev, ...results];
        });
        if (!totalPages) {
          setIsEmpty(true);
          return;
        }
        setTotalPages(totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSubmit = (query) => {
    setIsEmpty(false);
    setQuery(query);
    setPictures([]);
    setPage(1);
    setError("");
    setTotalPages(1);
  };
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  //modal
  const openModal = (image) => {
    setModalImage(image);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />

      {/* {pictures.length > 0 && (
        <ImageGallery openModal={openModal} pictures={pictures} />
      )} */}

      {/* {error && <ErrorMessage message={error} />} */}

      {/* {isLoading && <Loader />} */}

      {/* {isEmpty && "Please enter a valid search query"} */}

      {/* {pictures.length > 0 && page < totalPages && (
        <LoadMoreButton onClick={handleLoadMore} />
      )} */}

      {/* <ModalImage
        picture={modalImage}
        modalIsOpen={Boolean(modalImage)}
        closeModal={() => {
          openModal(null);
        }}
      /> */}

    </>
  );
}

export default App;