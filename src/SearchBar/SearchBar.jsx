import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSubmit }) => {
  const handleSumbit = (e) => {
    e.preventDefault();
    if (e.target.elements.input.value === "") {
      toast.error("Please enter the searchword");
    }
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSumbit} className={css.form}>
        <input
          className={css.input}
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
