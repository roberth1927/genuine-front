import PropTypes from 'prop-types';
import Vector from "../../assets/Vector.png";
import Iso from "../../assets/Iso GE.png";

function Nav({ handleScrollTo, refs }) {
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
          <button
            onClick={() => handleScrollTo(refs.home)}
            className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]"
          >
            Inicio
          </button>
        </div>
        <div className="w-[310px] h-[35px] gap-0">
          <button
            onClick={() => handleScrollTo(refs.about)}
            className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]"
          >
            ¿Quiénes somos?
          </button>
        </div>
        <div className="w-[310px] h-[35px] gap-0">
          <button
            onClick={() => handleScrollTo(refs.weamericans)}
            className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]"
          >
            Somos Estadounidenses
          </button>
        </div>
        <div className="w-[310px] h-[35px] gap-0">
          <button
            onClick={() => handleScrollTo(refs.joinup)}
            className="font-outfit text-base font-semibold leading-[14.96px] text-left text-[#133072]"
          >
            Únete a Genuine
          </button>
        </div>
      </div>
    </div>
  );
}

Nav.propTypes = {
  handleScrollTo: PropTypes.func.isRequired,
  refs: PropTypes.shape({
    home: PropTypes.object,
    about: PropTypes.object,
    weamericans: PropTypes.object,
    joinup: PropTypes.object,
  }).isRequired,
};

export default Nav;
