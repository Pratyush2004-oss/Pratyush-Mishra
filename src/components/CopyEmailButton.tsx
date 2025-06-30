import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
function CopyEmailButton() {
  const [copied, setcopied] = useState(false);
  const emailAddress = "mishrapratyush521@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setcopied(true);
    setTimeout(() => {
      setcopied(false);
    }, 2000);
  };

  return (
    <motion.button
      disabled={copied}
      onClick={handleCopy}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm rounded-full font-extralight bg-primary w-[12rem] overflow-hidden cursor-pointer"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            key={"copied"}
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img
              src={"assets/copy-done.svg"}
              alt="copy-done"
              className="size-5"
            />
            Email has Copied
          </motion.p>
        ) : (
          <motion.p
            key={"copy"}
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src={"assets/copy.svg"} alt="copy" className="size-5" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default CopyEmailButton;
