import CardNumbers from "./CardNumbers";
import MapaMobile from "../../assets/Mapa_Mobile.png";

function WeWorldMobile() {
  return (
    <div className="w-[350px] h-[889px] bg-white rounded-xl">
      <div className="w-[200px] h-[102px] pt-8 pl-14 mb-3">
        <p className=" text-[#133072] font-outfit font-bold text-2xl">
          Somos <br/>del mundo
        </p>
      </div>

      <div className="w-[236px] h-[314px] gap-4 flex flex-col mx-auto justify-center items-center mb-8">
        <CardNumbers
          border="border-[#FF4E07]"
          color="text-[#FF4E07]"
          text="+ 350 Estudiantes"
        />
        <CardNumbers
          border="border-[#D5ADFB]"
          color="text-[#D5ADFB]"
          text="28 Staff"
        />
        <CardNumbers
          border="border-[#133072]"
          color="text-[#133072]"
          text="44 Profesores"
        />
      </div>

      <img src={MapaMobile} alt="" className="mb-8" />

      <div className="w-[350px] flex flex-col  justify-center ">
        <div className="bg-[#F90052] px-10 ">
          <p className="text-white font-outfit text-sm font-bold  w-[250px]  py-8">
            Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile,
            Argentina, Estados Unidos, Emiratos Árabes, Brasil, República
            Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.
          </p>
        </div>
        <div className="bg-[#D5ADFB] text-white font-outfit h-[80px] px-6">
          <p className="text-sm p-4 text-[#133072] font-bold">
          Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.
          </p>
        </div>

        <div className="bg-[#133072] ">
          <p className="text-sm text-white font-outfit p-4 font-bold h-[80px] px-10">
          Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeWorldMobile;
