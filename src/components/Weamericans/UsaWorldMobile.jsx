import Btn from "../../assets/btn.png";
import Vector from "../../assets/VectorPlay.png";
import Foto from "../../assets/FotoMobilebilinguismo.png";


function UsaWorldMobile() {
  return (
    <div className="w-[350px] h-[641px] bg-white rounded-xl mb-24">
      <div className="w-[299px] h-[102px] pt-6 mb-20 pl-8">
        <p className="text-left text-[#133072] pb-3 font-outfit font-bold text-2xl">
          ¿Quiénes somos?
        </p>

        <p className="text-left text-[#133072] font-outfit">
          Somos un colegio virtual privado estadounidense constituido y
          registrado en el estado de La <span>Florida con el código 8822.</span>
        </p>
      </div>

      <div className="w-[299px] h-[133px] flex flex-col justify-center items-center mb-6 mx-auto">
        <p className="text-left text-[#133072] pb-3 font-outfit font-bold text-xl">
          Consulta el registro legal aquí
        </p>
        <img src={Btn} alt="" className="w-[189px] h-[55px] " />
      </div>

      <div className="w-[299px] h-[130px] flex flex-col mb-10 justify-center mx-auto items-center rounded-xl bg-[#D5ADFB]">
        <p className="text-center text-[#133072] pb-3 font-outfit font-medium text-xl px-4">
          Mira como encontrar el registro legal de{" "}
          <span className="font-bold">Genuine</span>
        </p>
        <img src={Vector} alt="" className="w-[40px] h-[40px] " />
      </div>
      <img src={Foto} alt="" className="w-[348px] h-[199px] " />

    </div>
  );
}

export default UsaWorldMobile;
