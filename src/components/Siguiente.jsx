//⭐ Bonus — La siguiente canción

import {siguienteTitulo, siguienteArtista} from "../data/cancion.js";

function Siguiente(){
    return(
        <p className="siguiente">
            Sigue: {siguienteTitulo}, de {siguienteArtista}.
        </p>
    )
};
export default Siguiente;
