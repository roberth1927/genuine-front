import Home from "./sections/Home";
import About from "./sections/About";
import Nav from "../src/components/home/Nav";

function App() {
  return (
    <>
      <div className="bg-primary w-full h-full flex flex-col">
        <div className="flex-1 overflow-y-scroll">
          <Home id="home" />
          <About id="about" />
        </div>
        <div className="fixed hidden md:block top-0 right-0 ">
          <Nav />
        </div>
      </div>
    </>
  );
}

export default App;
