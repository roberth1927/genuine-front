import Boton from "../../assets/Boton-personalizado.png";
import Foto from "../../assets/Fotobilinguismo.png";

function UsaWorld() {
  return (
    <div className="bg-white w-[1480px] h-[416px] rounded-xl flex">
      <div className="bg-white w-[621px] h-[295px] pl-20 pt-16 rounded-xl">
        <p className="w-[500px] text-left text-[#133072] font-outfit font-bold text-4xl pb-4">De Estados Unidos para 
        el mundo</p>
        <p className="text-left text-[#133072] font-outfit text-2xl pb-4">Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el <span className="font-bold ">Florida Department of Education con el código 8822.</span> </p>
        <div className="flex w-[460px] h-[55px] mt-4">
          <p className="text-left text-[#133072] font-outfit text-2xl font-bold pt-2">Conoce el nuestro aquí</p>
          <img src={Boton} alt="" className="ml-auto" />
        </div>
      </div>

      <img src={Foto} alt="" className="flex w-[754px] h-[416px] ml-auto"/>

    </div>
  );
}

export default UsaWorld;
