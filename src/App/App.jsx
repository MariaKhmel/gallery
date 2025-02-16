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

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const data = await fetchImages(query, page);
      setTotalPages(data["total_pages"]);
      setImages(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onLoadMore = async () => {
    setPage((prevPage) => (prevPage += 1));
    try {
      setIsLoading(true);
      const data = await fetchImages(query, page);
      setTotalPages(data["total_pages"]);
      setImages(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSubmit={onSubmit} setQuery={setQuery} query={query} />
      {isLoading && <Loader />}
      {images.length > 0 && <ImageGallery images={images} />}
      {page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </>
  );
}

export default App;
