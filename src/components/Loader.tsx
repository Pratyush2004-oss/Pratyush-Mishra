import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return <Html center className="font-normal text-center text-xl">{progress}% loaded</Html>;
}

export default Loader;
