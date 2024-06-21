import { forwardRef } from "react";
import PropTypes from "prop-types";
import WeAmericansDesktop from "../components/Weamericans/WeamericansDesktop";
import WeAmericansMobile from "../components/Weamericans/WeAmericansMobile.jsx";

const WeAmericans = forwardRef(({ sectionRef }, ref) => {
  return (
    <section className="p-4 xl:p-8">
      <div ref={sectionRef}>
        <div className="block lg:hidden">
          <WeAmericansMobile />
        </div>

        <div className="hidden lg:block">
          <WeAmericansDesktop />
        </div>
      </div>
    </section>
  );
});

WeAmericans.propTypes = {
  sectionRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

WeAmericans.displayName = "WeAmericans";

export default WeAmericans;
