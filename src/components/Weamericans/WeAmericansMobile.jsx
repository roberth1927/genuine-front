import UsaWorldMobile from "./UsaWorldMobile";
import WeWorldMobile from "./WeWorldMobile";

function WeAmericansMobile() {
  return (
    <div className="relative top-15 rounded-xl flex flex-col items-center xl:mx-0 mx-auto">
      <UsaWorldMobile />
      <WeWorldMobile />
    </div>
  );
}

export default WeAmericansMobile;
