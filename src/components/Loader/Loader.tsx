import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div className={s.loader}>
      <ThreeDots
        visible={loading}
        height="80"
        width="80"
        color="grey"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
