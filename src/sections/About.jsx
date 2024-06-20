import img1 from "../assets/img-1.png";
import { forwardRef } from "react";
import PropTypes from 'prop-types';

const About = forwardRef(({ sectionRef }, ref) => {
  return (
    <section className="p-6">
      <div ref={sectionRef} className="relative w-[300px] h-[489px] xl:w-[1506px] xl:h-[1043px] left-4 top-15 xl:left-18 xl:top-18">
        
      </div>
    </section>
  );
});

About.propTypes = {
    sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

About.displayName = 'About';

export default About;
