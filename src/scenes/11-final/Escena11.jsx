import { motion } from "framer-motion";
import { Heart, RotateCcw, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./Escena11.scss";

function Escena11() {
  const navigate = useNavigate();

  const volverAlInicio = () => {
    navigate("/");
  };

  return (
    <main className="escena-11">
      {/* Fondo atmosférico */}
      <div className="escena-11__background">
        <div className="escena-11__glow escena-11__glow--one" />
        <div className="escena-11__glow escena-11__glow--two" />
        <div className="escena-11__glow escena-11__glow--three" />

        <div className="escena-11__stars">
          <span>✦</span>
          <span>·</span>
          <span>✧</span>
          <span>·</span>
          <span>✦</span>
          <span>·</span>
          <span>✧</span>
          <span>✦</span>
          <span>·</span>
          <span>✧</span>
        </div>
      </div>

      {/* Contenido principal */}
      <section className="escena-11__content">
        {/* Pequeño encabezado */}
        <motion.div
          className="escena-11__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Sparkles size={16} />
          <span>FIN DEL VIAJE</span>
          <Sparkles size={16} />
        </motion.div>

        {/* Máquina / corazón */}
        <motion.div
          className="escena-11__symbol"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            type: "spring",
            stiffness: 80,
          }}
        >
          <div className="escena-11__symbol-ring">
            <Heart
              className="escena-11__heart"
              size={42}
              fill="currentColor"
            />
          </div>

          <motion.div
            className="escena-11__orbit escena-11__orbit--one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Star size={13} fill="currentColor" />
          </motion.div>

          <motion.div
            className="escena-11__orbit escena-11__orbit--two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles size={11} />
          </motion.div>
        </motion.div>

        {/* Título */}
        <motion.h1
          className="escena-11__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.45,
          }}
        >
          Feliz cumpleaños,
          <span>Maura.</span>
        </motion.h1>

        {/* Línea decorativa */}
        <motion.div
          className="escena-11__divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
        >
          <span />
          <Heart size={13} fill="currentColor" />
          <span />
        </motion.div>

        {/* Mensaje principal */}
        <motion.div
          className="escena-11__message"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
        >
          <p>
            La máquina puede llevarnos al pasado,
            <br />
            pero los mejores recuerdos
            <br />
            todavía están por venir.
          </p>
        </motion.div>

        {/* Mensaje personal */}
        <motion.div
          className="escena-11__personal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 1.5,
          }}
        >
          <p>
            Gracias por todos los momentos,
            <br />
            por las risas, las aventuras
            <br />
            y por ser mi hermana.
          </p>

          <p className="escena-11__personal-highlight">
            Te quiero muchísimo.
          </p>
        </motion.div>

        {/* Firma */}
        <motion.div
          className="escena-11__signature"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          <span>Con mucho cariño,</span>
          <strong>Tu hermano ❤️</strong>
        </motion.div>
      </section>

      {/* Botón volver */}
      <motion.button
        className="escena-11__restart"
        onClick={volverAlInicio}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2.4,
        }}
        whileHover={{
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <RotateCcw size={16} />
        <span>Volver a comenzar</span>
      </motion.button>

      {/* Pie */}
      <motion.div
        className="escena-11__footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2.7,
        }}
      >
        <span>UNA VUELTA POR EL TIEMPO</span>
        <span>•</span>
        <span>2026</span>
      </motion.div>
    </main>
  );
}

export default Escena11;