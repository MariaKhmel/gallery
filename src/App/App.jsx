import { useState } from "react";
import { Toaster } from "react-hot-toast";

import fetchImages from "../helpers/fetchImages";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import css from "./App.module.css";

function App() {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const onSubmit = async (query) => {
    const data = await fetchImages(query, page);
    setTotalPages(data["total_pages"]);
    setImages(data.results);
  };

  return (
    <>
      <Toaster position="top-right" />
      <SearchBar onSubmit={onSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {page < totalPages && <LoadMoreBtn />}
    </>
  );
}

export default App;
