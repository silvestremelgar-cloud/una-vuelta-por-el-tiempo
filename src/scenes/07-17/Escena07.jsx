import { motion } from "framer-motion";
import { ArrowRight, Cake, Sparkles, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./Escena07.scss";

function Escena07() {
  const navigate = useNavigate();

  const continuar = () => {
    navigate("/escena-08");
  };

  return (
    <main className="escena07">
      {/* Fondo decorativo */}
      <div className="escena07__background">
        <div className="escena07__glow escena07__glow--one" />
        <div className="escena07__glow escena07__glow--two" />

        <motion.div
          className="escena07__star escena07__star--one"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star size={18} />
        </motion.div>

        <motion.div
          className="escena07__star escena07__star--two"
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Star size={12} />
        </motion.div>

        <motion.div
          className="escena07__star escena07__star--three"
          animate={{
            opacity: [0.2, 0.9, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles size={20} />
        </motion.div>
      </div>

      {/* Contenido principal */}
      <section className="escena07__content">
        <motion.div
          className="escena07__badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Cake size={17} />
          <span>25 de agosto de 2026</span>
        </motion.div>

        <motion.p
          className="escena07__eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Y después de todo este viaje...
        </motion.p>

        <motion.div
          className="escena07__number"
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: -8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        >
          <span>17</span>
        </motion.div>

        <motion.h1
          className="escena07__title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          años
        </motion.h1>

        <motion.p
          className="escena07__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Y aquí estamos.
        </motion.p>

        <motion.div
          className="escena07__message"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4 }}
        >
          <p>
            17 años de historias, aventuras, aprendizajes,
            <br className="escena07__desktop-break" />
            momentos buenos, momentos difíciles y recuerdos
            <br className="escena07__desktop-break" />
            que hicieron que llegaras hasta aquí.
          </p>
        </motion.div>

        <motion.div
          className="escena07__highlight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <span>✨</span>

          <p>
            Pero esto no es solamente una celebración de
            <strong> 17 años.</strong>
          </p>

          <span>✨</span>
        </motion.div>

        <motion.p
          className="escena07__closing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          Es una celebración de la persona en la que te estás
          convirtiendo.
        </motion.p>

        <motion.button
          className="escena07__button"
          onClick={continuar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <span>Hay algo que quiero decirte</span>
          <ArrowRight size={19} />
        </motion.button>
      </section>

      {/* Indicador inferior */}
      <motion.div
        className="escena07__bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <span>UNA VUELTA POR EL TIEMPO</span>
      </motion.div>
    </main>
  );
}

export default Escena07;