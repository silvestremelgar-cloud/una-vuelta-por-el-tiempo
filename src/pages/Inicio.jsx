import { useState } from "react";
import ElMensaje from "../scenes/01-el-mensaje/ElMensaje";
import MaquinaDelTiempo from "../scenes/02-maquina-del-tiempo/MaquinaDelTiempo";

function Inicio() {
  const [escena, setEscena] = useState(1);

  const siguienteEscena = () => {
    setEscena((actual) => actual + 1);
  };

  return (
    <main className="experiencia">
      {escena === 1 && (
        <ElMensaje onContinuar={siguienteEscena} />
      )}

      {escena === 2 && (
        <MaquinaDelTiempo onContinuar={siguienteEscena} />
      )}
    </main>
  );
}

export default Inicio;