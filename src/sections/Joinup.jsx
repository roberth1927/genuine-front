import { forwardRef } from "react";
import PropTypes from 'prop-types';
import Join from "../components/Joinup/Join";

const Joinup = forwardRef(({ sectionRef }, ref) => {
  return (
    <section className="p-4 xl:p-8">
      <div ref={sectionRef}>
        <div className="hidden sm:block">

        <Join />
        </div>
      </div>
    </section>
  );
});

Joinup.propTypes = {
    sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

Joinup.displayName = 'Joinup';

export default Joinup;
