import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Sparkles,
  LockKeyhole,
  ScanLine,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./Escena10.scss";

const años = [
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
  "2031",
  "2032",
  "∞",
];

const recuerdosFuturos = [
  "Otro paseo",
  "Otra aventura",
  "Otra fotografía",
  "Otro cumpleaños",
  "Otro recuerdo",
];

function Escena10() {
  const navigate = useNavigate();

  const [indiceAño, setIndiceAño] = useState(0);
  const [fase, setFase] = useState("viaje");
  const [indiceRecuerdo, setIndiceRecuerdo] = useState(0);
  const [salida, setSalida] = useState(false);

  useEffect(() => {
    if (fase !== "viaje") return;

    if (indiceAño < años.length - 1) {
      const velocidad =
        indiceAño < 3
          ? 850
          : indiceAño < 6
            ? 600
            : 900;

      const timer = setTimeout(() => {
        setIndiceAño((actual) => actual + 1);
      }, velocidad);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setFase("buscando");
    }, 1200);

    return () => clearTimeout(timer);
  }, [indiceAño, fase]);

  useEffect(() => {
    if (fase !== "buscando") return;

    const timer = setTimeout(() => {
      setFase("fallo");
    }, 2200);

    return () => clearTimeout(timer);
  }, [fase]);

  useEffect(() => {
    if (fase !== "fallo") return;

    const timer = setTimeout(() => {
      setFase("descubrimiento");
    }, 2300);

    return () => clearTimeout(timer);
  }, [fase]);

  useEffect(() => {
    if (fase !== "descubrimiento") return;

    const intervalo = setInterval(() => {
      setIndiceRecuerdo((actual) => {
        if (actual >= recuerdosFuturos.length - 1) {
          clearInterval(intervalo);
          return actual;
        }

        return actual + 1;
      });
    }, 850);

    return () => clearInterval(intervalo);
  }, [fase]);

  const continuar = () => {
    setSalida(true);

    setTimeout(() => {
      navigate("/escena-11");
    }, 1100);
  };

  const esViaje = fase === "viaje";
  const esBuscando = fase === "buscando";
  const esFallo = fase === "fallo";
  const esDescubrimiento = fase === "descubrimiento";

  return (
    <main className={`escena10 escena10--${fase}`}>
      {/* =====================================================
          FONDO
      ====================================================== */}

      <div className="escena10__fondo">
        <div className="escena10__aurora escena10__aurora--uno" />
        <div className="escena10__aurora escena10__aurora--dos" />

        <div className="escena10__estrellas escena10__estrellas--uno" />
        <div className="escena10__estrellas escena10__estrellas--dos" />

        <div className="escena10__ruido" />
      </div>

      {/* =====================================================
          PARTÍCULAS
      ====================================================== */}

      <div className="escena10__particulas">
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="escena10__particula"
            style={{
              "--i": index,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          CABECERA
      ====================================================== */}

      <motion.header
        className="escena10__cabecera"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="escena10__capitulo">
          UNA VUELTA POR EL TIEMPO
        </span>

        <span className="escena10__contador">
          10 / 11
        </span>
      </motion.header>

      {/* =====================================================
          CONTENIDO PRINCIPAL
      ====================================================== */}

      <section className="escena10__contenido">

        {/* ===================================================
            PORTAL TEMPORAL
        ==================================================== */}

        <div className="escena10__portal">

          <motion.div
            className="escena10__portal-anillo escena10__portal-anillo--externo"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="escena10__portal-anillo escena10__portal-anillo--medio"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="escena10__portal-anillo escena10__portal-anillo--interno"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="escena10__portal-centro"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="escena10__portal-luz" />

            <Clock3
              size={34}
              strokeWidth={1.4}
            />
          </motion.div>

          <div className="escena10__portal-linea escena10__portal-linea--uno" />
          <div className="escena10__portal-linea escena10__portal-linea--dos" />
          <div className="escena10__portal-linea escena10__portal-linea--tres" />

        </div>

        {/* ===================================================
            ETIQUETA
        ==================================================== */}

        <motion.div
          className="escena10__etiqueta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="escena10__etiqueta-punto" />

          <span>
            DESTINO TEMPORAL
          </span>
        </motion.div>

        {/* ===================================================
            AÑOS
        ==================================================== */}

        <div className="escena10__año-contenedor">

          <AnimatePresence mode="wait">
            {esViaje && (
              <motion.div
                key={años[indiceAño]}
                className="escena10__año"
                initial={{
                  opacity: 0,
                  scale: 0.65,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 1.3,
                  filter: "blur(12px)",
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                {años[indiceAño]}
              </motion.div>
            )}

            {esBuscando && (
              <motion.div
                key="buscando"
                className="escena10__estado"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <ScanLine size={22} />

                <span>
                  BUSCANDO REGISTROS...
                </span>
              </motion.div>
            )}

            {esFallo && (
              <motion.div
                key="fallo"
                className="escena10__estado escena10__estado--fallo"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0.5, 1],
                }}
                transition={{
                  duration: 1.5,
                }}
              >
                <LockKeyhole size={24} />

                <span>
                  ACCESO AL FUTURO NO DISPONIBLE
                </span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* ===================================================
            DESCUBRIMIENTO
        ==================================================== */}

        <AnimatePresence>
          {esDescubrimiento && (
            <motion.div
              className="escena10__descubrimiento"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
            >

              <motion.div
                className="escena10__snoopy"
                initial={{
                  opacity: 0,
                  x: -40,
                  rotate: -8,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.8,
                }}
              >
                🐶
              </motion.div>

              <span className="escena10__pequeno-titulo">
                REGISTRO ENCONTRADO
              </span>

              <h1>
                Lo que todavía
                <br />
                <em>no ha pasado.</em>
              </h1>

              <div className="escena10__separador">
                <span />
                <Sparkles size={15} />
                <span />
              </div>

              <p className="escena10__intro">
                Hay algo que la máquina no puede
                mostrarnos.
              </p>

              <p className="escena10__principal">
                El futuro.
              </p>

              <p className="escena10__texto">
                Podemos volver a todos estos momentos.
                Podemos mirar las fotografías,
                recordar las aventuras y reírnos
                de todo lo que hemos vivido.
              </p>

              <p className="escena10__destacado">
                Pero todavía no podemos recordar
                aquello que aún no hemos vivido.
              </p>

              {/* =============================================
                  RECUERDOS FUTUROS
              ============================================== */}

              <div className="escena10__futuro">

                <div className="escena10__futuro-cabecera">
                  <span>
                    ARCHIVO DEL FUTURO
                  </span>

                  <span>
                    ????
                  </span>
                </div>

                <div className="escena10__futuro-items">

                  {recuerdosFuturos.map((recuerdo, index) => (
                    <motion.div
                      key={recuerdo}
                      className={`escena10__futuro-item ${
                        index <= indiceRecuerdo
                          ? "escena10__futuro-item--visible"
                          : ""
                      }`}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity:
                          index <= indiceRecuerdo
                            ? 1
                            : 0.12,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                      }}
                    >
                      <span className="escena10__futuro-icono">
                        ✦
                      </span>

                      <span>
                        {recuerdo}
                      </span>
                    </motion.div>
                  ))}

                </div>

                <div className="escena10__futuro-pie">
                  <span>
                    FECHA: POR DESCUBRIR
                  </span>

                  <span>
                    ESTADO: PENDIENTE
                  </span>
                </div>

              </div>

              {/* =============================================
                  FRASE FINAL
              ============================================== */}

              <motion.div
                className="escena10__frase-final"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 3.8,
                  duration: 1,
                }}
              >
                <p>
                  Quizás esa sea la mejor parte.
                </p>

                <strong>
                  Todavía nos toca vivirlo.
                </strong>
              </motion.div>

              {/* =============================================
                  BOTÓN
              ============================================== */}

              <motion.button
                className="escena10__boton"
                onClick={continuar}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 4.8,
                  duration: 0.8,
                }}
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <span>
                  VER LO QUE SIGUE
                </span>

                <ArrowRight size={18} />
              </motion.button>

            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* =====================================================
          INDICADOR INFERIOR
      ====================================================== */}

      <motion.div
        className="escena10__pie"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span>
          EL FUTURO NO PUEDE SER RECORDADO
        </span>

        <span className="escena10__pie-linea" />

        <span>
          TODAVÍA
        </span>
      </motion.div>

      {/* =====================================================
          TRANSICIÓN
      ====================================================== */}

      <AnimatePresence>
        {salida && (
          <motion.div
            className="escena10__salida"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1.2,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <div className="escena10__salida-centro" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Escena10;