import { useEffect, useState } from "react";
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
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setTotalPages(data["total_pages"]);
        setImages(data.results);
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
