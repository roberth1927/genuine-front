import PropTypes from 'prop-types';

function SectionRight({border, color, text, width}) {
  return (
    <div className="flex flex-col items-center">
      <div className={`${width} h-[70px] border-2 rounded-xl flex items-center justify-center ${border}`}>
        <p className={`text-center font-outfit font-bold text-4xl ${color}`}>
          {text}
        </p>
      </div>
    </div>
  );
}

SectionRight.propTypes = {
    border: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
  };
  
export default SectionRight;
