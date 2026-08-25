import { motion } from "framer-motion";
import {
  ArrowRight,
  Lock,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Escena06.scss";

// 🖼️ Importación de las 4 fotos desde assets (ajusta la ruta si es necesario)
import foto1 from "../../assets/01.png";
import foto2 from "../../assets/02.png";
import foto3 from "../../assets/03.png";
import foto4 from "../../assets/04.png";

function Escena06() {
  const navigate = useNavigate();

  const [archivoAbierto, setArchivoAbierto] = useState(false);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  // Agregamos la propiedad 'imagen' a cada recuerdo con su archivo correspondiente
  const recuerdos = [
    {
      id: 1,
      titulo: "Archivo secreto #01",
      texto: "Una fotografía que probablemente debería estar aquí.",
      imagen: foto1,
      clase: "recuerdo-uno",
    },
    {
      id: 2,
      titulo: "Archivo secreto #02",
      texto: "Evidencia de que alguna vez fuimos normales.",
      imagen: foto2,
      clase: "recuerdo-dos",
    },
    {
      id: 3,
      titulo: "Archivo secreto #03",
      texto: "Este archivo todavía está bajo investigación.",
      imagen: foto3,
      clase: "recuerdo-tres",
    },
    {
      id: 4,
      titulo: "Archivo secreto #04",
      texto: "No hacemos comentarios sobre este recuerdo.",
      imagen: foto4,
      clase: "recuerdo-cuatro",
    },
  ];

  const abrirRecuerdo = (recuerdo) => {
    setFotoSeleccionada(recuerdo);
  };

  const cerrarRecuerdo = () => {
    setFotoSeleccionada(null);
  };

  const continuar = () => {
    navigate("/escena-07");
  };

  return (
    <main className="escena06">

      {/* =========================================
          FONDO
      ========================================= */}

      <div className="escena06__background" aria-hidden="true">
        <span className="escena06__dot dot-1" />
        <span className="escena06__dot dot-2" />
        <span className="escena06__dot dot-3" />
        <span className="escena06__dot dot-4" />
      </div>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="escena06__intro">

        <motion.div
          className="escena06__chapter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          RECUERDO Nº 06
        </motion.div>

        <motion.div
          className="escena06__lock"
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            type: "spring",
          }}
        >
          <Lock size={42} strokeWidth={1.4} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Los recuerdos
          <br />
          <em>secretos.</em>
        </motion.h1>

        <motion.p
          className="escena06__intro-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Porque no todos los recuerdos son profundos,
          <br />
          algunos simplemente son demasiado graciosos.
        </motion.p>

        <motion.button
          type="button"
          className="escena06__unlock"
          onClick={() => setArchivoAbierto(true)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <Lock size={18} />

          <span>
            Abrir archivo clasificado
          </span>
        </motion.button>

      </section>

      {/* =========================================
          ARCHIVO
      ========================================= */}

      {archivoAbierto && (
        <motion.section
          className="escena06__archive"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >

          <div className="escena06__archive-header">

            <div>
              <span>ARCHIVO</span>

              <h2>
                Cosas que probablemente
                <br />
                no deberías haber encontrado.
              </h2>
            </div>

            <button
              type="button"
              className="escena06__close"
              onClick={() => setArchivoAbierto(false)}
              aria-label="Cerrar archivo"
            >
              <X size={20} />
            </button>

          </div>

          {/* =========================================
              MENSAJE SNOOPY
          ========================================= */}

          <motion.div
            className="escena06__guide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >

            <div className="escena06__snoopy">
              🐶
            </div>

            <div className="escena06__speech">
              <span>
                Encontré esto por accidente...
              </span>

              <strong>
                Creo.
              </strong>
            </div>

          </motion.div>

          {/* =========================================
              RECUERDOS
          ========================================= */}

          <div className="escena06__grid">

            {recuerdos.map((recuerdo, index) => (
              <motion.article
                key={recuerdo.id}
                className={`escena06__memory ${recuerdo.clase}`}
                initial={{
                  opacity: 0,
                  y: 40,
                  rotate: index % 2 === 0 ? -4 : 4,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  rotate: 0,
                }}
                onClick={() => abrirRecuerdo(recuerdo)}
              >

                <div className="escena06__memory-photo">

                  {/* Sustituido el icono por la imagen real */}
                  <div className="escena06__photo-container" style={{ width: '100%', height: '180px', overflow: 'hidden', borderRadius: '6px', backgroundColor: '#eee' }}>
                    <img 
                      src={recuerdo.imagen} 
                      alt={recuerdo.titulo} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
                    />
                  </div>

                  <div className="escena06__photo-stamp">
                    CLASIFICADO
                  </div>

                </div>

                <div className="escena06__memory-info">

                  <span>
                    {recuerdo.titulo}
                  </span>

                  <p>
                    {recuerdo.texto}
                  </p>

                </div>

                <div className="escena06__memory-search">
                  <Search size={16} />
                  Ver recuerdo
                </div>

              </motion.article>
            ))}

          </div>

          {/* =========================================
              MENSAJE FINAL DEL ARCHIVO
          ========================================= */}

          <motion.div
            className="escena06__archive-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <Sparkles size={24} />

            <p>
              Algunas fotografías todavía esperan
              <br />
              ser colocadas aquí.
            </p>

            <span>
              Este archivo crecerá con nuestros recuerdos.
            </span>

          </motion.div>

        </motion.section>
      )}

      {/* =========================================
          CIERRE
      ========================================= */}

      <section className="escena06__ending">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="escena06__small-title">
            ARCHIVO CERRADO
          </span>

          <h2>
            Bueno...
            <br />
            ya viste demasiado.
          </h2>

          <p>
            Será mejor continuar antes de que encontremos
            algo todavía más comprometedor.
          </p>

        </motion.div>

        <motion.button
          type="button"
          className="escena06__next"
          onClick={continuar}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          <span>
            Continuar el viaje
          </span>

          <ArrowRight size={20} />
        </motion.button>

      </section>

      {/* =========================================
          MODAL FOTOGRAFÍA
      ========================================= */}

      {fotoSeleccionada && (
        <motion.div
          className="escena06__modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={cerrarRecuerdo}
        >

          <motion.div
            className="escena06__modal-content"
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              className="escena06__modal-close"
              onClick={cerrarRecuerdo}
              aria-label="Cerrar recuerdo"
            >
              <X size={22} />
            </button>

            <div className="escena06__modal-photo">
              {/* Imagen ampliada dentro del modal */}
              <div style={{ width: '100%', maxHeight: '350px', overflow: 'hidden', borderRadius: '8px', display: 'flex', justifyContent: 'center' }}>
                <img 
                  src={fotoSeleccionada.imagen} 
                  alt={fotoSeleccionada.titulo} 
                  style={{ width: '100%', height: 'auto', maxHeight: '350px', objectFit: 'contain', display: 'block' }} 
                />
              </div>
            </div>

            <div className="escena06__modal-text">

              <span>
                {fotoSeleccionada.titulo}
              </span>

              <p>
                {fotoSeleccionada.texto}
              </p>

            </div>

          </motion.div>

        </motion.div>
      )}

    </main>
  );
}

export default Escena06;