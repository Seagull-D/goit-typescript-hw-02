import s from "./LoadMoreBtn.module.css";
interface PropsLoadMoreBtn {
  handleClick: () => void;
}
const LoadMoreBtn: React.FC<PropsLoadMoreBtn> = ({
  handleClick,
}): JSX.Element => {
  return (
    <div>
      <button className={s.loadBtn} onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
