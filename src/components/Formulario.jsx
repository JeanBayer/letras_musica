import { useState } from "react";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  return (
    <form>
      <legend>Busca por artistas y canción</legend>
      <div className="form-grid">
        <div>
          <label htmlFor="artista">Artista</label>
          <input
            type="text"
            id="artista"
            name="artista"
            value={busqueda.artista}
            onChange={(e) =>
              setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
            }
            placeholder="Nombre Artista"
          />
        </div>
        <div>
          <label htmlFor="cancion">Canción</label>
          <input
            type="text"
            id="cancion"
            name="cancion"
            value={busqueda.cancion}
            onChange={(e) =>
              setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
            }
            placeholder="Nombre canción"
          />
        </div>
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
