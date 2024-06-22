import { useRef } from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import WeAmericans from "./sections/WeAmericans";
import Joinup from "./sections/Joinup";
import Nav from "../src/components/home/Nav";
import Pagination from "../src/components/home/Pagination";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const weamericansRef = useRef(null);
  const joinupRef = useRef(null);

  const handleScrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-primary w-full h-full flex flex-col">
      <div className="flex-1 overflow-y-scroll">
        <Home sectionRef={homeRef} />
        <About sectionRef={aboutRef} />
        <WeAmericans sectionRef={weamericansRef} />
        <Joinup sectionRef={joinupRef} />
      </div>
      <div className="fixed hidden md:block top-0 right-0">
        <Nav handleScrollTo={handleScrollTo} refs={{ home: homeRef, about: aboutRef, weamericans: weamericansRef, joinup: joinupRef }} />
      </div>
      <div className="fixed hidden md:block bottom-2 right-0">
        <Pagination />
      </div>
    </div>
  );
}

export default App;
