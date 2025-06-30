import { useState } from "react";
import { motion } from "motion/react";
function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2">
          <a
            href="/"
            className="text-xl bg-gradient-to-tl from-blue-500 via-purple-500 to-lavender bg-clip-text text-transparent font-bold hover:bg-gradient-to-br duration-300 transition-all sm:text-2xl"
          >
            Pratyush Mishra
          </a>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="size-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {/*  */}
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            x: -10,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
          className="block overflow-hidden text-center sm:hidden"
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
