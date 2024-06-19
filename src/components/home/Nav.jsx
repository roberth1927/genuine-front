import Vector from "../../assets/Vector.png";
import Iso from "../../assets/Iso GE.png";

function Nav() {
  return (
    <div className="fixed top-0 left-0 w-[360px] h-[297px] px-6 py-6 bg-white rounded-xl mt-6">
      <div className="flex justify-between items-center mb-8 mt-6 w-[285px] h-[45.24px] mx-auto">
        <img
          src={Vector}
          alt="Imagen 1"
          className="w-[15px] h-[15px] text-[#050831]"
        />
        <img src={Iso} alt="Imagen 2" className="w-[70px] h-[45.24px]" />
      </div>

      <div className="w-[310px] mx-auto">
        <div className="w-[310px] h-[35px] gap-0">
          <a href="#home" className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]">
            Inicio
          </a>
        </div>
        <div className="w-[310px] h-[35px] gap-0">
          <a href="#about" className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]">
            ¿Quiénes somos?
          </a>
        </div>
        <div className="w-[310px] h-[35px] gap-0">
          <a href="#about" className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]">
            Somos Estadounidenses
          </a>
        </div>
        <div className="w-[310px] h-[35px] gap-0">
          <a href="#about" className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]">
            Únete a Genuine
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
