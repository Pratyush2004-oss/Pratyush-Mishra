import { OrbitingCircles } from "../components/ObjectCircles";

export function Frameworks() {
  const skills = [
    "auth0",
    "react",
    "tailwindcss",
    "javascript",
    "github",
    "html5",
    "sqlite",
    "microsoft",
    "css3",
    "vitejs",
    "git",
    "nodejs",
    "expressjs",
    "nextjs",
    "firebase",
    "expo",
    "mongoDB",
    "typescript",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.sort(() => Math.random() - 0.5).map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.sort(() => Math.random() - 0.5).reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }: { src: string }) => {
  return (
    <img
      src={src}
      className="duration-200 rounded-sm hover:scale-110"
      alt="icon"
    />
  );
};
