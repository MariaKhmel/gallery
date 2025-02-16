import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSubmit, query, setQuery }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter the searchword");
      return;
    }
    onSubmit(setQuery(e.target.value));
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
