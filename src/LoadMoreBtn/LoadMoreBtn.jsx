import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore, disabled }) => {
  return (
    <button
      type="click"
      className={css.loadMoreBtn}
      onClick={onLoadMore}
      disabled={disabled}
    >
      Load More
    </button>
  );
};

export default LoadMoreBtn;
