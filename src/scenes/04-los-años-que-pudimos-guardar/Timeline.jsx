import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Timeline.scss";

import imgFamilia from "../../assets/Abuelo.jpg";
import imgInfancia from "../../assets/Infancia.png";
import imgHermanos from "../../assets/Hermanos.png";
import img15 from "../../assets/15.png";
import imgHoy from "../../assets/Hoy.png";

const momentos = [
  {
    año: "Familia",
    etiqueta: "Siempre unidos",
    titulo: "",
    texto:
      "Un pequeño recuerdo que con el tiempo se convertiría en una historia llena de personas, lugares, aventuras y recuerdos.",
    posicion: "izquierda",
    imagen: imgFamilia,
  },
  {
    año: "INFANCIA",
    etiqueta: "PRIMEROS RECUERDOS",
    titulo: "Pequeñas aventuras",
    texto:
      "Los años comenzaron a pasar y poco a poco fueron apareciendo fotografías de una niña curiosa, alegre y llena de energía.",
    posicion: "derecha",
    imagen: imgInfancia,
  },
  {
    año: "HERMANOS",
    etiqueta: "NOSOTROS",
    titulo: "Aprendiendo a ser hermanos",
    texto:
      "Entre juegos, peleas, paseos y conversaciones, también fuimos aprendiendo algo que nadie nos enseñó: cómo ser hermanos.",
    posicion: "izquierda",
    imagen: imgHermanos,
  },
  {
    año: "15",
    etiqueta: "UN MOMENTO ESPECIAL",
    titulo: "Quince años",
    texto:
      "Una etapa que merecía quedar guardada. Un recuerdo familiar en el que estuvimos juntos y que hoy vuelve a aparecer en este pequeño viaje.",
    posicion: "derecha",
    imagen: img15,
  },
  {
    año: "HOY",
    etiqueta: "2026",
    titulo: "Maura cumple 17",
    texto:
      "Y aquí estamos. Mirando hacia atrás, recordando todo lo que pasó y preparándonos para todo lo que todavía falta por vivir.",
    posicion: "izquierda",
    imagen: imgHoy,
  },
];

function Timeline() {
  const navigate = useNavigate();

  const volver = () => {
    navigate("/escena-03");
  };

  const continuar = () => {
    navigate("/escena-05");
  };

  return (
    <main className="timeline">
      <div
        className="timeline__fondo"
        aria-hidden="true"
      />

      <div
        className="timeline__decoracion timeline__decoracion--uno"
        aria-hidden="true"
      >
        <Sparkles size={22} strokeWidth={1.3} />
      </div>

      <div
        className="timeline__decoracion timeline__decoracion--dos"
        aria-hidden="true"
      >
        <Sparkles size={17} strokeWidth={1.3} />
      </div>

      <motion.div
        className="timeline__contenido"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <header className="timeline__encabezado">
          <motion.button
            type="button"
            className="timeline__volver"
            onClick={volver}
            initial={{
              opacity: 0,
              x: -15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <ArrowLeft size={17} />
            Volver
          </motion.button>

          <motion.div
            className="timeline__icono"
            initial={{
              scale: 0,
              rotate: -30,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 160,
            }}
          >
            <Clock3
              size={28}
              strokeWidth={1.4}
            />
          </motion.div>

          <motion.span
            className="timeline__etiqueta"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            LOS AÑOS QUE PUDIMOS GUARDAR
          </motion.span>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
          >
            Algunos años,
            <br />
            <span>muchos recuerdos.</span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.7,
            }}
          >
            No todos los momentos quedaron fotografiados.
            <br />
            Pero los que sí pudimos guardar, merecen volver a
            ser vistos.
          </motion.p>
        </header>

        <section className="timeline__lista">
          <div
            className="timeline__linea"
            aria-hidden="true"
          >
            <motion.div
              className="timeline__linea-progreso"
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
          </div>

          {momentos.map((momento, index) => (
            <motion.article
              key={`${momento.año}-${index}`}
              className={`timeline__momento timeline__momento--${momento.posicion}`}
              initial={{
                opacity: 0,
                y: 40,
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
                delay: 0.05,
              }}
            >
              <div className="timeline__punto">
                <span />
              </div>

              <div className="timeline__tarjeta">
                <div className="timeline__foto">
                  <div className="timeline__foto-contenido">
                    <img
                      src={momento.imagen}
                      alt={
                        momento.titulo ||
                        momento.año
                      }
                    />
                  </div>

                  <div
                    className="timeline__foto-cinta"
                    aria-hidden="true"
                  />
                </div>

                <div className="timeline__texto">
                  <span className="timeline__año">
                    {momento.año}
                  </span>

                  <span className="timeline__momento-etiqueta">
                    {momento.etiqueta}
                  </span>

                  {momento.titulo && (
                    <h2>{momento.titulo}</h2>
                  )}

                  <p>{momento.texto}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <motion.section
          className="timeline__mensaje-final"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Sparkles
            size={22}
            strokeWidth={1.2}
          />

          <p>
            Y aunque los años sigen pasando,
            <strong>
              {" "}
              algunas cosas nunca dejan de ser
              importantes.
            </strong>
          </p>
        </motion.section>

        <motion.div
          className="timeline__continuar"
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
          <button
            type="button"
            className="timeline__boton"
            onClick={continuar}
          >
            <span>Continuar el viaje</span>

            <ArrowRight size={19} />
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default Timeline;
