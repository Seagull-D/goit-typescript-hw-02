import { RotatingLines } from "react-loader-spinner";

interface PropsLoader {
  loading: boolean;
}

const Loader: React.FC<PropsLoader> = ({ loading }): JSX.Element => {
  return (
    <RotatingLines
      visible={loading}
      width="96" // залишаємо рядок
      strokeWidth="96" // рядок замість числа
      animationDuration="0.75" // рядок замість числа
      ariaLabel="rotating-lines-loading"
    />
  );
};

export default Loader;
