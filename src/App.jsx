import Home from "./sections/Home";
import Nav from "../src/components/home/Nav";

function App() {
  return (
    <>
      <div className="bg-primary w-full h-full flex flex-col overflow-y-auto ">
        <Home id="home"/>
        <div className="hidden md:block">
          <Nav />
        </div>

      </div>
    </>
  );
}

export default App;
