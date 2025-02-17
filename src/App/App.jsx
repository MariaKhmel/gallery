import { useState } from "react";
import { Toaster } from "react-hot-toast";

import fetchImages from "../helpers/fetchImages";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import css from "./App.module.css";
import Loader from "../Loader/Loader";

function App() {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  const onSubmit = async (inputValue) => {
    setPage(1);
    setQuery(inputValue);
    try {
      setIsLoading(true);
      const data = await fetchImages(inputValue, page);
      setTotalPages(data["total_pages"]);
      setImages(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onLoadMore = async () => {
    try {
      setIsLoading(true);
      const nextPage = page + 1;
      const data = await fetchImages(query, nextPage);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.container}>
      <Toaster position="top-right" />
      <SearchBar onSubmit={onSubmit} setQuery={setQuery} query={query} />
      {isLoading && <Loader />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} />
          <LoadMoreBtn onLoadMore={onLoadMore} disabled={page === totalPages} />
        </>
      )}
    </div>
  );
}

export default App;
