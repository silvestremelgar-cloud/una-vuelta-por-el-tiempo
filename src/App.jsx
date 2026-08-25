import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Inicio from "./pages/Inicio";

import ElMensaje from "./scenes/01-el-mensaje/ElMensaje";
import MaquinaDelTiempo from "./scenes/02-maquina-del-tiempo/MaquinaDelTiempo";
import Escena03 from "./scenes/03-los-primeros-años/LosPrimerosAnios";
import Escena04 from "./scenes/04-los-años-que-pudimos-guardar/Timeline";
import Escena05 from "./scenes/05-aprender-a-ser-hermanos/Escena05";
import Escena06 from "./scenes/06-los-recuerdos-secretos/Escena06";
import Escena07 from "./scenes/07-17/Escena07";
import Escena08 from "./scenes/08-lo-que-quiero-decirte/Escena08";
import Escena09 from "./scenes/09-el-trato/Escena09";
import Escena10 from "./scenes/10-lo-que-todavia-no-ha-pasado/Escena10";
import Escena11 from "./scenes/11-final/Escena11";

import ScrollToTop from "./components/ScrollToTop";

import "./styles/main.scss";

// Wrapper para escena 01
function Escena01Wrapper() {
  const navigate = useNavigate();

  return (
    <ElMensaje
      onContinuar={() => navigate("/escena-02")}
    />
  );
}

// Wrapper para escena 02
function Escena02Wrapper() {
  const navigate = useNavigate();

  return (
    <MaquinaDelTiempo
      onContinuar={() => navigate("/escena-03")}
    />
  );
}

function App() {
  return (
    <BrowserRouter>

      {/* 
        Cada vez que cambia la ruta, la nueva escena
        comienza automáticamente desde arriba.
      */}
      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/escena-01"
          element={<Escena01Wrapper />}
        />

        <Route
          path="/escena-02"
          element={<Escena02Wrapper />}
        />

        <Route
          path="/escena-03"
          element={<Escena03 />}
        />

        <Route
          path="/escena-04"
          element={<Escena04 />}
        />

        <Route
          path="/escena-05"
          element={<Escena05 />}
        />

        <Route
          path="/escena-06"
          element={<Escena06 />}
        />

        <Route
          path="/escena-07"
          element={<Escena07 />}
        />

        <Route
          path="/escena-08"
          element={<Escena08 />}
        />

        <Route
          path="/escena-09"
          element={<Escena09 />}
        />

        <Route
          path="/escena-10"
          element={<Escena10 />}
        />

        <Route
          path="/escena-11"
          element={<Escena11 />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;