import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./Escena05.scss";

// 🖼️ Importación de la imagen de la polera desde assets
import imgPolera from "../../assets/Polera.png";

function Escena05() {
  const navigate = useNavigate();

  const irSiguiente = () => {
    navigate("/escena-06");
  };

  return (
    <main className="escena05">

      {/* FONDO DECORATIVO */}
      <div className="escena05__stars" aria-hidden="true">
        <span>✦</span>
        <span>·</span>
        <span>✧</span>
        <span>·</span>
        <span>✦</span>
        <span>✧</span>
      </div>

      {/* INTRODUCCIÓN */}
      <section className="escena05__intro">

        <motion.div
          className="escena05__chapter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span>RECUERDO Nº 05</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Aprender a ser
          <br />
          <em>hermanos</em>
        </motion.h1>

        <motion.p
          className="escena05__intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Porque algunos recuerdos no se pueden medir en años...
          <br />
          se miden en lo que aprendimos juntos.
        </motion.p>

        <motion.div
          className="escena05__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <span>Desliza para recordar</span>
          <div className="escena05__scroll-line" />
        </motion.div>

      </section>

      {/* HISTORIA */}
      <section className="escena05__story">

        <motion.div
          className="escena05__story-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <span className="escena05__small-title">
            HACE ALGÚN TIEMPO...
          </span>

          <h2>
            Todavía estábamos
            <br />
            aprendiendo.
          </h2>

          <p>
            Como cualquier par de hermanos, hubo momentos en los que
            discutíamos, peleábamos y no siempre sabíamos cómo llevarnos.
          </p>
        </motion.div>

      </section>

      {/* LA POLERA */}
      <section className="escena05__shirt-section">

        <motion.div
          className="escena05__shirt"
          initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="escena05__shirt-image-container">
            <img 
              src={imgPolera} 
              alt="La polera compartida" 
            />
          </div>

          <span>EL RECUERDO</span>

          <strong>
            Una polera.
          </strong>

          <small>
            Demasiado grande para dos.
          </small>
        </motion.div>

        <motion.div
          className="escena05__shirt-text"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="escena05__small-title">
            Y ENTONCES...
          </span>

          <h2>
            Papá tuvo
            <br />
            una idea.
          </h2>

          <p>
            Por estar peleando, nos hizo ponernos una misma polera grande
            y hacer las cosas juntos.
          </p>

          <p className="escena05__highlight">
            Literalmente juntos.
          </p>
        </motion.div>

      </section>

      {/* APRENDIZAJE */}
      <section className="escena05__lesson">

        <motion.div
          className="escena05__quote"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
        >
          <div className="escena05__quote-icon">
            <Heart size={30} fill="currentColor" />
          </div>

          <blockquote>
            “Quién diría que una polera demasiado grande
            terminaría enseñándonos algo que todavía
            llevamos hasta hoy.”
          </blockquote>

          <span>
            — Un recuerdo entre hermanos
          </span>
        </motion.div>

        <motion.div
          className="escena05__lesson-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Aprendimos a compartir.
          </p>

          <p>
            A tener paciencia.
          </p>

          <p>
            A escucharnos.
          </p>

          <strong>
            Y, poco a poco...
          </strong>

          <h2>
            aprendimos a ser hermanos.
          </h2>
        </motion.div>

      </section>

      {/* CIERRE */}
      <section className="escena05__ending">

        <motion.div
          className="escena05__ending-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
        >
          <span className="escena05__small-title">
            Y DESDE ENTONCES...
          </span>

          <h2>
            Hemos crecido.
          </h2>

          <p>
            Hemos cambiado.
            Hemos tenido aventuras,
            hemos salido a pasear,
            hemos reído y también hemos pasado
            por momentos difíciles.
          </p>

          <p className="escena05__final-message">
            Pero hay algo que no cambió.
          </p>

          <div className="escena05__heart">
            <Heart size={28} fill="currentColor" />
          </div>

          <p className="escena05__brothers">
            Seguimos siendo hermanos.
          </p>
        </motion.div>

        {/* SNOOPY */}
        <motion.div
          className="escena05__snoopy"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="escena05__snoopy-bubble">
            Y todavía nos quedan
            <br />
            muchos recuerdos...
          </span>

          <div className="escena05__snoopy-placeholder">
            🐶
          </div>
        </motion.div>

      </section>

      {/* BOTÓN SIGUIENTE */}
      <section className="escena05__navigation">

        <motion.button
          type="button"
          className="escena05__next"
          onClick={irSiguiente}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <span>
            Continuar el viaje
          </span>

          <ArrowRight size={20} />
        </motion.button>

      </section>

    </main>
  );
}

export default Escena05;