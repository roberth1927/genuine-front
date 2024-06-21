import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";
import Map from "../../assets/Mapa.png";

function WeWorld() {
  return (
    <div className="bg-white w-[1480px] h-[592px] rounded-xl flex mt-auto ">
      <SectionLeft />

      <div className="flex flex-col mt-16 pl-36">
        <div className="flex justify-around ">
          <SectionRight
            border="border-[#FF4E07]"
            color="text-[#FF4E07]"
            text="+ 400 Estudiantes"
            width="w-[359px]"
          />

          <SectionRight
            border="border-[#D5ADFB]"
            color="text-[#D5ADFB]"
            text="28 Staff"
            width="w-[269px]"
          />

          <SectionRight
            border="border-[#602680]"
            color="text-[#602680]"
            text="44 Profesores"
            width="w-[269px]"
          />
        </div>

        <div className="">
          <img src={Map} alt="Map" className="w-[920px] h-[458px]" />
        </div>
      </div>
    </div>
  );
}

export default WeWorld;
