import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  return (
    <button disabled className={css.loadMoreBtn}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
