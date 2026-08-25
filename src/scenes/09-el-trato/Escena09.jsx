import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  Gift,
  Heart,
  Palette,
  Send,
  ShoppingBag,
  Sparkles,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

import "./Escena09.scss";

function Escena09() {
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const wishlist = [
    {
      id: "libro",
      title: "Un libro",
      description: "Porque siempre hay otra historia por descubrir.",
      icon: BookOpen,
    },
    {
      id: "arte",
      title: "Algo para crear",
      description: "Algo relacionado con arte, diseño o creatividad.",
      icon: Palette,
    },
    {
      id: "flores",
      title: "Algo bonito",
      description: "Flores o algo que tenga un poquito de naturaleza.",
      icon: Sparkles,
    },
    {
      id: "experiencia",
      title: "Una aventura",
      description: "Un paseo, una salida o una experiencia para recordar.",
      icon: MapPin,
    },
    {
      id: "sorpresa",
      title: "Una sorpresa",
      description: "Algo que prefiero no explicar todavía.",
      icon: Gift,
    },
    {
      id: "otro",
      title: "Algo que realmente quieras",
      description: "Porque esta lista también puede tener una opción secreta.",
      icon: HelpCircle,
    },
  ];

  const toggleItem = (id) => {
    setSelectedItems((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  };

  const selectedWishlist = useMemo(() => {
    return wishlist.filter((item) =>
      selectedItems.includes(item.id)
    );
  }, [selectedItems]);

  const whatsappMessage = useMemo(() => {
    if (selectedWishlist.length === 0) {
      return "Creo que tenemos un trato pendiente... 👀🎁";
    }

    const wishes = selectedWishlist
      .map((item) => `• ${item.title}`)
      .join("\n");

    return `Creo que encontré algunas cosas que me gustaría para nuestro trato pendiente... 👀🎁

Mi lista:
${wishes}

No estoy diciendo que tengas que elegir todo... pero tampoco estoy diciendo que no. 😂

Una promesa es una promesa. ❤️`;
  }, [selectedWishlist]);

  // =========================================================
  // WHATSAPP
  // =========================================================

  const sendWhatsApp = () => {
    // 🔴 REEMPLAZA ESTE NÚMERO POR TU NÚMERO DE WHATSAPP
    // Formato: código de país + número, SIN +, espacios ni guiones.
    // Bolivia: 591 + número
    const numero = "59173958015";

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/${numero}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const continuar = () => {
    navigate("/escena-10");
  };

  return (
    <main className="escena09">
      <div className="escena09__background">
        <div className="escena09__glow escena09__glow--one" />
        <div className="escena09__glow escena09__glow--two" />

        <motion.div
          className="escena09__spark escena09__spark--one"
          animate={{
            opacity: [0.2, 0.8, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles size={17} />
        </motion.div>

        <motion.div
          className="escena09__spark escena09__spark--two"
          animate={{
            opacity: [0.15, 0.7, 0.15],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={13} />
        </motion.div>
      </div>

      <section className="escena09__content">

        {/* =====================================================
            ENCABEZADO
        ===================================================== */}

        <motion.div
          className="escena09__label"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Heart size={15} fill="currentColor" />
          <span>Un trato entre hermanos</span>
        </motion.div>

        <motion.p
          className="escena09__intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Ahora sí... hablemos de algo importante.
        </motion.p>

        <motion.h1
          className="escena09__title"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Tenemos un trato.
        </motion.h1>

        {/* =====================================================
            TARJETA DEL TRATO
        ===================================================== */}

        <motion.div
          className="escena09__deal"
          initial={{
            opacity: 0,
            y: 35,
            rotate: -1,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.8,
            type: "spring",
            stiffness: 90,
            damping: 15,
          }}
        >
          <div className="escena09__deal-header">
            <div className="escena09__deal-icon">
              <Gift size={25} />
            </div>

            <div>
              <span>ACUERDO ESPECIAL</span>
              <h2>El trato pendiente</h2>
            </div>
          </div>

          <div className="escena09__deal-line" />

          <div className="escena09__deal-story">
            <p>
              Tú me hiciste un regalo por mi cumpleaños.
            </p>

            <div className="escena09__deal-arrow">
              <span>🎁</span>
              <ArrowRight size={18} />
              <span>❤️</span>
            </div>

            <p>
              Y según nuestro trato, para tu cumpleaños
              yo tenía que hacerte un regalo...
            </p>

            <div className="escena09__deal-rule">
              <span>LA REGLA</span>

              <strong>
                Tu regalo × 2
              </strong>
            </div>

            <p className="escena09__deal-final">
              Y como las promesas están para cumplirse...
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MISTERIO
        ===================================================== */}

        <motion.div
          className="escena09__mystery"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 1.3,
          }}
        >
          <div className="escena09__mystery-lock">
            🔒
          </div>

          <div>
            <strong>Hay un pequeño problema...</strong>

            <p>
              Todavía no te voy a decir qué regalo será.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            WISHLIST
        ===================================================== */}

        <motion.div
          className="escena09__wishlist-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.6,
          }}
        >
          <div className="escena09__wishlist-heading">
            <div>
              <span>ENTONCES...</span>
              <h2>Hazme una pequeña lista.</h2>
            </div>

            <ShoppingBag size={23} />
          </div>

          <p className="escena09__wishlist-description">
            No prometo elegir exactamente lo que pongas aquí...
            pero al menos quiero saber qué cosas te harían ilusión.
          </p>

          <button
            className="escena09__open-wishlist"
            onClick={() => setShowWishlist(true)}
          >
            <Gift size={18} />

            <span>
              Abrir lista de deseos
            </span>

            <ArrowRight size={17} />
          </button>
        </motion.div>

        {/* =====================================================
            SELECCIÓN DE DESEOS
        ===================================================== */}

        <AnimatePresence>
          {showWishlist && (
            <motion.div
              className="escena09__wishlist"
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
            >
              <div className="escena09__wishlist-top">
                <div>
                  <span>LISTA DE DESEOS</span>

                  <h3>
                    ¿Qué te gustaría?
                  </h3>
                </div>

                <button
                  className="escena09__close"
                  onClick={() => setShowWishlist(false)}
                  aria-label="Cerrar lista"
                >
                  ×
                </button>
              </div>

              <div className="escena09__items">
                {wishlist.map((item) => {
                  const Icon = item.icon;
                  const selected = selectedItems.includes(item.id);

                  return (
                    <motion.button
                      key={item.id}
                      className={`escena09__item ${
                        selected
                          ? "escena09__item--selected"
                          : ""
                      }`}
                      onClick={() => toggleItem(item.id)}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="escena09__item-icon">
                        <Icon size={21} />
                      </div>

                      <div className="escena09__item-content">
                        <strong>
                          {item.title}
                        </strong>

                        <span>
                          {item.description}
                        </span>
                      </div>

                      <div className="escena09__check">
                        {selected && (
                          <Check size={16} />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="escena09__wishlist-footer">
                <span>
                  {selectedItems.length === 0
                    ? "Todavía no has elegido nada."
                    : `${selectedItems.length} opción${
                        selectedItems.length === 1
                          ? ""
                          : "es"
                      } seleccionada${
                        selectedItems.length === 1
                          ? ""
                          : "s"
                      }.`}
                </span>

                <button
                  className="escena09__message-button"
                  onClick={() => setShowMessage(true)}
                  disabled={selectedItems.length === 0}
                >
                  <Send size={16} />
                  Preparar mensaje
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            MENSAJE WHATSAPP
        ===================================================== */}

        <AnimatePresence>
          {showMessage && (
            <motion.div
              className="escena09__message-preview"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
            >
              <div className="escena09__message-preview-header">
                <div>
                  <span>MENSAJE PREPARADO</span>
                  <h3>Tu lista está lista 👀</h3>
                </div>

                <button
                  className="escena09__close"
                  onClick={() => setShowMessage(false)}
                  aria-label="Cerrar mensaje"
                >
                  ×
                </button>
              </div>

              <div className="escena09__message-preview-body">
                <p>
                  {whatsappMessage}
                </p>
              </div>

              <div className="escena09__message-actions">
                <button
                  className="escena09__whatsapp"
                  onClick={sendWhatsApp}
                >
                  <Send size={17} />
                  Abrir WhatsApp
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            CONTINUAR
        ===================================================== */}

        <motion.div
          className="escena09__continue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 2,
          }}
        >
          <p>
            Pero hay una cosa más...
          </p>

          <button
            className="escena09__continue-button"
            onClick={continuar}
          >
            <span>
              Ver qué viene después
            </span>

            <ArrowRight size={18} />
          </button>
        </motion.div>

      </section>
    </main>
  );
}

export default Escena09;