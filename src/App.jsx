import { useEffect, useState } from "react";

import { getPhotos } from "./service/unsplashApi";


import SearchBar from './components/SearchBar/SearchBar';


import './App.css'
function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await getPhotos(query, page);
        if (results.length === 0) {
          setIsEmpty(true);
          setShowLoadMore(false);
        } else {
          setIsEmpty(false);
          setImages((prevImages) => [...prevImages, ...results]);
          setShowLoadMore(true);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setError("");
    setShowLoadMore(false);
    setIsEmpty(false);
  };

  const openModal = (img) => {
    setModalImage(img);
  };

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div>
        <SearchBar onSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default App;
