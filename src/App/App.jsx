import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import fetchImages from "../helpers/fetchImages";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";

import css from "./App.module.css";

function App() {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        console.log(data);
        setTotalPages(data["total_pages"]);
        page === 1
          ? setImages(data.results)
          : setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    handleSearch();
  }, [page, query]);

  const handleSearchSumbit = (inputValue) => {
    setPage(1);
    setQuery(inputValue);
  };
  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (data) => {
    setModalOpen(true);
    setModal(data);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModal(null);
  };

  return (
    <div className={css.container}>
      <Toaster position="top-right" />
      <SearchBar
        onSubmit={handleSearchSumbit}
        setQuery={setQuery}
        query={query}
      />
      {isLoading && <Loader />}
      {error && <p>Something went wrong...</p>}
      {query && images.length === 0 && <p>No images found</p>}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} openModal={openModal} />
          <LoadMoreBtn onLoadMore={onLoadMore} disabled={page === totalPages} />
        </>
      )}
      {isModalOpen && <ImageModal modal={modal} closeModal={closeModal} />}
    </div>
  );
}

export default App;
