import { forwardRef } from "react";
import PropTypes from 'prop-types';
import Aboutus from "../components/About/Aboutus";

const About = forwardRef(({ sectionRef }, ref) => {
  return (
    <section className="p-4 xl:p-8">
      <div ref={sectionRef}>
        <Aboutus />
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
