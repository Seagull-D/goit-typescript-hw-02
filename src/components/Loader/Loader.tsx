import { RotatingLines } from "react-loader-spinner";
interface PropsLoader {
  loading: boolean;
}
const Loader: React.FC<PropsLoader> = ({ loading }): JSX.Element => {
  return (
    <RotatingLines
      visible={loading}
      height="96"
      width="96" // число замість рядка
      color="grey"
      strokeWidth="96" // число замість рядка
      animationDuration="0.75" // число замість рядка
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
