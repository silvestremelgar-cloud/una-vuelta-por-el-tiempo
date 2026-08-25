import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./LosPrimerosAnios.scss";

import fotoInfancia from "../../assets/03-los-primero.png";

const recuerdos = [
  {
    numero: "01",
    titulo: "Antes de todas las aventuras",
    texto:
      "Antes de los paseos, las conversaciones, las bromas y todos esos recuerdos que hoy podemos guardar, hubo una pequeña Maura que apenas comenzaba a descubrir el mundo.",
  },
  {
    numero: "02",
    titulo: "Pequeños momentos",
    texto:
      "No tenemos una fotografía de cada día ni de cada año. Y quizás eso está bien. Porque algunos recuerdos viven en fotografías y otros simplemente viven en nosotros.",
  },
  {
    numero: "03",
    titulo: "El comienzo de una historia",
    texto:
      "Con el paso de los años llegarían nuevos lugares, nuevas aventuras, nuevas fotografías y, sobre todo, muchos momentos que terminaríamos compartiendo como hermanos.",
  },
];

function LosPrimerosAnios() {
  const navigate = useNavigate();
  const [abriendoAlbum, setAbriendoAlbum] = useState(false);

  const irAlTimeline = () => {
    if (abriendoAlbum) return;

    setAbriendoAlbum(true);

    setTimeout(() => {
      navigate("/escena-04");
    }, 1200);
  };

  return (
    <motion.main
      className="escena-tres"
      animate={{
        opacity: abriendoAlbum ? 0 : 1,
        scale: abriendoAlbum ? 1.03 : 1,
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
    >
      <div
        className="escena-tres__fondo"
        aria-hidden="true"
      />

      <div
        className="escena-tres__decoracion escena-tres__decoracion--uno"
        aria-hidden="true"
      >
        <Sparkles size={24} strokeWidth={1.4} />
      </div>

      <div
        className="escena-tres__decoracion escena-tres__decoracion--dos"
        aria-hidden="true"
      >
        <Sparkles size={18} strokeWidth={1.4} />
      </div>

      <motion.div
        className="escena-tres__contenido"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <motion.div
          className="escena-tres__encabezado"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <span className="escena-tres__etiqueta">
            LOS PRIMEROS AÑOS
          </span>

          <h1>
            Había una vez
            <br />
            una pequeña <span>Maura.</span>
          </h1>

          <p>
            Y aunque no podamos volver físicamente a aquellos
            días, algunas fotografías nos permiten hacer algo
            bastante parecido.
          </p>
        </motion.div>

        <motion.section
          className="escena-tres__recuerdo-principal"
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 35,
          }}
          animate={{
            opacity: abriendoAlbum ? 0 : 1,
            scale: abriendoAlbum ? 1.08 : 1,
            y: abriendoAlbum ? -20 : 0,
          }}
          transition={{
            duration: 1,
            delay: abriendoAlbum ? 0 : 0.5,
          }}
        >
          <div className="escena-tres__foto">
            <div className="escena-tres__foto-marco">
              <div className="escena-tres__foto-imagen-container">
                <img
                  src={fotoInfancia}
                  alt="Maura de pequeña"
                />
              </div>
            </div>

            <span
              className="escena-tres__cinta"
              aria-hidden="true"
            />
          </div>

          <div className="escena-tres__nota">
            <span className="escena-tres__nota-numero">
              Un rico cancho
            </span>

            <h2>
              Seremos hermanos de carne
            </h2>

            <div className="escena-tres__firma">
              — Una pequeña vuelta por el tiempo
            </div>
          </div>
        </motion.section>

        <section className="escena-tres__recuerdos">
          {recuerdos.map((recuerdo, index) => (
            <motion.article
              key={recuerdo.numero}
              className="escena-tres__tarjeta"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >
              <span className="escena-tres__tarjeta-numero">
                {recuerdo.numero}
              </span>

              <h3>{recuerdo.titulo}</h3>

              <p>{recuerdo.texto}</p>
            </motion.article>
          ))}
        </section>

        <motion.div
          className="escena-tres__transicion"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span>
            Y entonces comenzaron a pasar los años...
          </span>

          <div className="escena-tres__flecha">
            <ArrowRight size={20} />
          </div>
        </motion.div>

        <motion.div
          className="escena-tres__boton-contenedor"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <button
            type="button"
            className="escena-tres__boton"
            onClick={irAlTimeline}
            disabled={abriendoAlbum}
          >
            <span>
              {abriendoAlbum
                ? "Abriendo el álbum..."
                : "Ver los años que pudimos guardar"}
            </span>

            <ArrowRight size={19} />
          </button>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}

export default LosPrimerosAnios;