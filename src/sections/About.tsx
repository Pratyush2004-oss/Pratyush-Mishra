import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

function About() {
  let grid2Container = useRef<HTMLDivElement>(document.createElement("div"));
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="coding"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] "
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Pratyush Mishra</p>
            <p className="subtext">
              Over the last 2 years, I developed my frontend and backend dev
              skills and I have worked on a wide range of projects and deliver
              dynamic and responsive software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div
          className="grid-default-color grid-2"
          id="grid-2"
          ref={grid2Container}
        >
          <div className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              text="GRASP"
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SOLID"
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Principles"
              style={{ rotate: "90deg", top: "30%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              text="Design Pattern"
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              containerRef={grid2Container}
            />
            <Card
              text="SRP"
              style={{ rotate: "20deg", top: "10%", left: "30%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/github.svg"
              style={{ rotate: "0deg", top: "70%", left: "70%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/javascript.svg"
              style={{
                rotate: "30deg",
                top: "70%",
                left: "20%",
                borderRadius: "30%",
              }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/typescript.svg"
              style={{
                rotate: "30deg",
                top: "70%",
                left: "90%",
                borderRadius: "30%",
              }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/vitejs.svg"
              style={{ rotate: "20deg", top: "20%", left: "5%" }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/tailwindcss.svg"
              style={{
                rotate: "20deg",
                top: "5%",
                left: "15%",
              }}
              containerRef={grid2Container}
            />
            <Card
              image="assets/logos/react.svg"
              style={{ rotate: "20deg", top: "5%", left: "60%" }}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-1/2">
            <p className="headText">Time Zone</p>
            <p className="subText">
              I'm a Full Stack Developer, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headText">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-1/2">
            <p className="headText">Tech Stack</p>
            <p className="subText">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-1/2 md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
