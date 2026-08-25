import { useState } from "react";
import { motion } from "framer-motion";

function ElMensaje({ onContinuar }) {
  const [saliendo, setSaliendo] = useState(false);

  const manejarContinuar = () => {
    setSaliendo(true);
    // Espera a que termine la animación de salida (1 segundo) antes de cambiar de escena
    setTimeout(() => {
      onContinuar();
    }, 1000);
  };

  return (
    <motion.section 
      className="scene scene-message"
      animate={{ opacity: saliendo ? 0 : 1, scale: saliendo ? 1.05 : 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="scene-stars" aria-hidden="true">
        <span className="star star-1">✦</span>
        <span className="star star-2">·</span>
        <span className="star star-3">✧</span>
        <span className="star star-4">·</span>
        <span className="star star-5">✦</span>
      </div>

      <div className="message-content">
        <motion.p
          className="message-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Para Maura
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: "easeOut",
          }}
        >
          Hay recuerdos que
          <br />
          el tiempo no debería
          <br />
          poder borrar.
        </motion.h1>

        <motion.p
          className="message-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          Así que construí algo para volver a visitarlos.
        </motion.p>

        <motion.button
          className="time-button"
          type="button"
          onClick={manejarContinuar}
          disabled={saliendo}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.2,
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <span className="time-button-icon">⏳</span>
          <span>Comenzar viaje</span>
        </motion.button>
      </div>

      <div className="message-footer">
        <span>Una vuelta por el tiempo</span>
      </div>
    </motion.section>
  );
}

export default ElMensaje;