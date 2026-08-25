import { motion } from "framer-motion";
import { ArrowRight, Heart, Mail, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./Escena08.scss";

function Escena08() {
  const navigate = useNavigate();

  const continuar = () => {
    navigate("/escena-09");
  };

  return (
    <main className="escena08">
      {/* Fondo */}
      <div className="escena08__background">
        <div className="escena08__glow escena08__glow--one" />
        <div className="escena08__glow escena08__glow--two" />

        <motion.div
          className="escena08__spark escena08__spark--one"
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={18} />
        </motion.div>

        <motion.div
          className="escena08__spark escena08__spark--two"
          animate={{
            opacity: [0.15, 0.7, 0.15],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles size={13} />
        </motion.div>
      </div>

      <section className="escena08__content">
        {/* Encabezado */}
        <motion.div
          className="escena08__label"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Mail size={16} />
          <span>Una carta para ti</span>
        </motion.div>

        <motion.p
          className="escena08__intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Después de tantos recuerdos...
        </motion.p>

        <motion.h1
          className="escena08__title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Hay algo que quiero decirte.
        </motion.h1>

        {/* Carta */}
        <motion.article
          className="escena08__letter"
          initial={{
            opacity: 0,
            y: 45,
            rotate: 1.5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.9,
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
        >
          <div className="escena08__letter-top">
            <span>PARA MAURA</span>

            <Heart
              size={17}
              fill="currentColor"
              className="escena08__heart"
            />
          </div>

          <div className="escena08__letter-body">
            <p className="escena08__greeting">
              Cunumicita linda que tienes ojos de guapurú:
            </p>

            <p>
              Quería aprovechar este día para decirte algo que quizás
              no te digo tantas veces como debería.
            </p>

            <p>
              Estoy muy orgulloso de ti. De la persona que eres,
              de tu forma de ser, de tu inteligencia, de tu manera
              de enfrentarte a las cosas y, sobre todo, de esa
              valentía que tienes para no dejarte vencer por nadie.
            </p>

            <p>
              Hemos crecido juntos. Hemos peleado, jugado, salido,
              hablado de nuestras cosas y vivido un montón de
              momentos que probablemente en ese momento no
              imaginábamos que algún día recordaríamos con tanta
              nostalgia.
            </p>

            <p>
              Y aunque me hubiera gustado poder darte mucho más
              en este cumpleaños, quería al menos hacer algo que
              pudiera quedarse contigo.
            </p>

            <p>
              Quiero que sepas que te quiero muchísimo.
            </p>

            <p>
              Y aunque ahora estemos pasando por un momento difícil,
              quiero que recuerdes algo:
            </p>

            <p className="escena08__important">
              No estás sola.
            </p>

            <p>
              Siempre voy a apoyarte, acompañarte y, mientras pueda,
              protegerte. No importa cuánto cambien las cosas ni
              cuánto tiempo pase.
            </p>

            <p>
              Seguiremos saliendo, hablando, jugando, molestándonos
              y creando recuerdos.
            </p>

            <p>
              Porque si algo aprendí con el tiempo es que ser
              hermanos no significa solamente crecer juntos.
            </p>

            <p className="escena08__important escena08__important--soft">
              También significa decidir seguir estando ahí.
            </p>

            <p>
              Y yo quiero estar ahí.
            </p>

            <div className="escena08__signature">
              <span>Con mucho cariño,</span>
              <strong>Tu hermano mayor ❤️</strong>
            </div>
          </div>
        </motion.article>

        {/* Mensaje inferior */}
        <motion.div
          className="escena08__after"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.8,
          }}
        >
          <p>
            Y esto todavía no termina...
          </p>

          <button
            className="escena08__button"
            onClick={continuar}
          >
            <span>Continuar</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </section>
    </main>
  );
}

export default Escena08;