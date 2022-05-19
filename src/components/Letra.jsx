import useLetras from "../hooks/useLetras";

const Letra = () => {
  const { letra, cargando } = useLetras();
  return cargando ? <p>Cargando...</p> : <div className="letra">{letra}</div>;
};

export default Letra;
