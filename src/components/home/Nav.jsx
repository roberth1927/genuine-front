import Vector from "../../assets/Vector.png";
import Iso from "../../assets/Iso GE.png";

function Nav() {
  return (
    <div className="w-[360px] h-[297px] px-25 py-30 bg-white rounded-xl mt-8">
      <div className="flex justify-between items-center mb-8 mt-6 xl:pt-6 w-[285px] h-[45.24px] mx-auto">
        <img
          src={Vector}
          alt="Imagen 1"
          className="color-[#050831] w-[15px] h-[15px]"
        />
        <img src={Iso} alt="Imagen 2" className="w-[70px] h-[45.24px]" />
      </div>

      <div className="w-[310px] mx-auto xl:mt-20">
        <div className="w-[310px] h-[35px] gap-0">
          <a
            href="#home"
            className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]"
          >
            Inicio
          </a>
        </div>
        <div className="w-[310px] h-[35px] gap-0">
          <a
            href="#about"
            className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]"
          >
            ¿Quiénes somos?
          </a>
        </div>
        <div className="w-[310px] h-[35px] gap-0">
          <a
            href="#about"
            className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]"
          >
            Somos Estadounidenses
          </a>
        </div>
        <div className="w-[310px] h-[35px] gap-0">
          <a
            href="#about"
            className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]"
          >
            Únete a Genuine
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
