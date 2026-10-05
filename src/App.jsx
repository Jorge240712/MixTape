import TarjetaCancion from "./components/TarjetaCancion.jsx";

// 🎫 TICKET 2 — Importa aquí el componente Encabezado
// (está en la carpeta components, igual que TarjetaCancion).
import Encabezado from "./components/Encabezado.jsx";
import PiePagina from "./components/PiePagina.jsx";
function App() {
    // 🎫 TICKET 2 — Dentro del <main>, justo arriba de <TarjetaCancion />,
    // muestra el componente <Encabezado />.
    return (
        <main className="app">
            <Encabezado />
            <TarjetaCancion />
            <PiePagina />
        </main>
        
    );
}

export default App;
