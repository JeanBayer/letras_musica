import { useState, createContext } from "react";
import axios from "axios";

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
  const [alerta, setAlerta] = useState("");
  const [letra, setLetra] = useState("");

  const busquedaLetra = async (busqueda) => {
    try {
      const { artista, cancion } = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const { data } = await axios(url);
      setLetra(data.lyrics);
    } catch (error) {
      console.log(error);
    }
    console.log(busqueda);
  };

  return (
    <LetrasContext.Provider
      value={{
        alerta,
        setAlerta,
        busquedaLetra,
        letra,
      }}
    >
      {" "}
      {children}{" "}
    </LetrasContext.Provider>
  );
};

export { LetrasProvider };
export default LetrasContext;
