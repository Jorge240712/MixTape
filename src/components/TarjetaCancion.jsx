import { titulo, artista, portada, album, duracion, anio, reproducciones } from "../data/cancion.js";
import Controles from "../components/Controles.jsx";
import Siguiente from "../components/Siguiente.jsx";

// 🎫 TICKET 1 — Este componente tiene 3 errores de JSX.
// No te decimos dónde están: la pantalla de error de Vite y la consola
// del navegador (F12) te dan la pista.
//
// 🎫 TICKET 3 — Estos datos están escritos aquí adentro, pero ya existen
// en src/data/cancion.js. Bórralos de aquí e impórtalos desde ese archivo.

function TarjetaCancion() {
    return (
        <article className="tarjeta">
            <img src={portada} alt="Portada del álbum" className="tarjeta-portada" />
            <h2 className="tarjeta-titulo">{titulo}</h2>
            <p className="tarjeta-artista">{artista}</p>
            <p className="tarjeta-detalle">Álbum: {album}</p>
            <p className="tarjeta-detalle">Duración: {duracion}</p>
            <p className="tarjeta-detalle">Año: {anio}</p>
            <p className="tarjeta-detalle">Reproducciones: {reproducciones}</p>
            <p className="tarjeta-detalle">Lanzada hace {2026 - anio} años</p>
            <Controles />
            <Siguiente />
        </article>
    );
}

export default TarjetaCancion;
