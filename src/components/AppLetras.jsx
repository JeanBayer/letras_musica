import useLetras from "../hooks/useLetras";
import Formulario from "./Formulario";
import Letra from "./Letra";
import Alerta from "./Alerta";

const AppLetras = () => {
  const { alerta, letra, cargando } = useLetras();
  return (
    <>
      <header>Busqueda de letras de canciones</header>

      <Formulario></Formulario>

      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra></Letra>
        ) : cargando ? (
          <p>Cargando....</p>
        ) : (
          <p className="text-center">Busca letras de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
};

export default AppLetras;
