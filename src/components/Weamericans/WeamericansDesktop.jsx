import UsaWorld from "./UsaWorld";
import WeWorld from "./WeWorld";

function WeAmericansDesktop() {
  return (
    <div className="w-[1480px] h-[1043px] mx-0 rounded-xl flex flex-col justify-content-between">
      <UsaWorld />
      <WeWorld />
    </div>
  );
}



export default WeAmericansDesktop;