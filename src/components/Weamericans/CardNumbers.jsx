import PropTypes from 'prop-types';

function CardNumbers({border, color, text}) {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-[235px] h-[92px] border-2 text-center rounded-xl flex items-center justify-center ${border}`}>
        <p className={`text-center font-outfit font-bold text-4xl px-20 ${color}`}>
          {text}
        </p>
      </div>
    </div>
  );
}

CardNumbers.propTypes = {
    border: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  
export default CardNumbers;
