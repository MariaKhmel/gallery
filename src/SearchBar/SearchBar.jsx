import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSumbit = (e) => {
    e.preventDefault();
    if (e.target.elements.input.value === "") {
      toast.error("Please enter the searchword");
    }
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSumbit}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
