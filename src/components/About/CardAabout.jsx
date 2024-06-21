import PropTypes from 'prop-types';

function CardAbout({ image, title, text }) {
  return (
    <div className="w-[300px] h-[318px] xl:w-[646px] xl:h-[329px] border-2 border-[#133072] rounded-xl pl-4 xl:pl-10 pt-8 mb-6 xl:mb-0">
      <img src={image} alt="Mision" className="xl:w-[90px] xl:h-[85px] mb-4" />
      <div className="xl:w-[566px] xl:h-[179px]">
        <p className="text-left text-[#133072] font-outfit font-bold text-2xl xl:text-5xl">
          {title}
        </p>

        <p className="text-left text-[#133072] font-outfit xl:text-xl">
          {text}
        </p>
      </div>
    </div>
  );
}
CardAbout.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  


export default CardAbout;
