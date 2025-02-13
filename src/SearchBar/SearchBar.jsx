import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter the searchword");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          value={query}
          onChange={handleInputChange}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.searchBtn}>
          <FaSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
