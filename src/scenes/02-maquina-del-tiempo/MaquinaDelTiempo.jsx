import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function MaquinaDelTiempo() {
  const [year, setYear] = useState(2026);
  const [termino, setTermino] = useState(false);
  const [saliendo, setSaliendo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let currentYear = 2026;

    const interval = setInterval(() => {
      currentYear -= 1;
      setYear(currentYear);

      if (currentYear <= 2009) {
        clearInterval(interval);
        setTermino(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const manejarContinuar = () => {
    setSaliendo(true);
    // Espera a que termine la animación de fundido (1.2 segundos) antes de cambiar de escena
    setTimeout(() => {
      navigate("/escena-03"); // Cambia la ruta según tu configuración (ej. /escena-03 o la ruta que uses para LosPrimerosAnios)
    }, 1200);
  };

  return (
    <motion.section 
      className="scene scene-time-machine"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: saliendo ? 0 : 1, 
        scale: saliendo ? 1.08 : 1,
        filter: saliendo ? "brightness(1.5)" : "brightness(1)"
      }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="time-space" aria-hidden="true">
        <span className="time-star time-star-1">✦</span>
        <span className="time-star time-star-2">✧</span>
        <span className="time-star time-star-3">·</span>
        <span className="time-star time-star-4">✦</span>
        <span className="time-star time-star-5">·</span>
        <span className="time-star time-star-6">✧</span>
      </div>

      <motion.div
        className="time-machine"
        initial={{
          opacity: 0,
          scale: 0.5,
          rotate: -45,
        }}
        animate={{
          opacity: 1,
          scale: saliendo ? 1.2 : 1,
          rotate: saliendo ? 180 : 0,
        }}
        transition={{
          duration: saliendo ? 1.2 : 1.5,
          ease: "easeOut",
        }}
      >
        <div className="time-ring time-ring-outer">
          <div className="time-ring time-ring-middle">
            <div className="time-core">
              <span>⏳</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="time-content">
        <motion.p
          className="time-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          VIAJE TEMPORAL
        </motion.p>

        <motion.div
          className="year-display"
          key={year}
          initial={{
            opacity: 0,
            scale: 1.15,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.15,
          }}
        >
          {year}
        </motion.div>

        <motion.p
          className="time-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
        >
          {termino ? "¡Hemos llegado al 2009!" : "Retrocediendo hasta donde comenzó esta historia..."}
        </motion.p>

        {termino && (
          <motion.button
            className="time-button time-button-secondary"
            type="button"
            onClick={manejarContinuar}
            disabled={saliendo}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <span>Entrar a la infancia</span>
            <span>→</span>
          </motion.button>
        )}
      </div>

      <div className="time-footer">
        <span>2009</span>
        <span>•</span>
        <span>2026</span>
      </div>
    </motion.section>
  );
}

export default MaquinaDelTiempo;