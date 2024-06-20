import DashHome from "../components/home/DashHome";
import { forwardRef } from "react";
import PropTypes from 'prop-types';

const Home = forwardRef(({ sectionRef }, ref) => {
  return (
    <section ref={sectionRef} className="p-4 xl:p-8">
      <DashHome />
      <div className="w-6"></div>    
    </section>
  );
});

Home.propTypes = {
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

Home.displayName = 'Home';

export default Home;
