import { Timeline } from "../components/Timeline";
import { myExperiences } from "../constants";
function Experience() {
  return (
    <div className="w-full my-50">
      <Timeline data={myExperiences} />
    </div>
  );
}

export default Experience;
