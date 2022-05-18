import useLetras from "../hooks/useLetras";

const Letra = () => {
  const { letra } = useLetras();
  return <div className="letra">{letra}</div>;
};

export default Letra;
