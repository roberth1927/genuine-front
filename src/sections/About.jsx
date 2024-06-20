import img1 from "../assets/img-1.png";

function About() {
  return (
    <section className="p-6">
      <div className="relative w-[300px] h-[489px] xl:w-[1506px] xl:h-[1043px] left-4 top-15 xl:left-18 xl:top-18">
      <img
        src={img1}
        alt="Description"
        className="absolute w-full h-full xl:rounded-tl-20 xl:transform cover"
      />
    
    </div>
      
    </section>
  );
}

export default About;
