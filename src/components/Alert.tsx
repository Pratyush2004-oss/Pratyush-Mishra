import { AnimatePresence, motion } from "motion/react";
function Alert({ type, text }: { type: string; text: string }) {
  const alertVarients = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };
  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 items-center lg:rounded-full justify-center top-5 right-0 left-0 max-w-64  mx-auto "
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVarients}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`px-2 py-1 mx-auto ${
            type === "danger" ? "bg-red-700" : "bg-royal"
          } text-indigo-100 items-center text-sm rounded-full loading-none lg:rounded-full flex lg:inline-flex p-5 `}
        >
          <p
            className={`flex items-center mx-auto p-2 text-center font-mono ${
              type === "danger" ? "bg-red-700" : "bg-royal"
            }`}
          >
            {text}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Alert;
