import img1 from "../../assets/Jet-pack 1.png";
import imgyoutube from "../../assets/imagyoutube.png";
import ImgMision from "../../assets/Mision.png";
import ImgVision from "../../assets/Vision.png";
import CardAbout from "./CardAabout";

function Aboutus() {
  return (
    <div className="relative w-[350px] h-[1130px] xl:w-[1480px] xl:h-[1043px] top-15 xl:left-18 xl:top-18 bg-[linear-gradient(180deg,#D5E6F7_0%,#FFFFFF_37.5%)] rounded-xl flex flex-col items-center ">
      <img
        src={img1}
        alt="Description"
        className="xl:w-[838px] xl:h-[341px] rounded-tl-xl mb-4 hidden sm:block"
      />

      <div className="xl:w-[1000px] px-4 py-6 xl:py-0 ">
        <p className="leading-tight text-center text-[#133072] font-outfit font-bold text-2xl xl:text-5xl">
          Nuestra misión en el mundo y lo que soñamos para tus hijos
        </p>
      </div>

      <img
        src={imgyoutube}
        alt="youtube"
        className="w-[312px] xl:h-[170px] mb-4 hidden "
      />

      <div className="w-[350px] xl:w-[1311px] mt-6 flex flex-col items-center xl:flex-row xl:justify-between">
        <CardAbout
          image={ImgMision}
          title="Nuestra misión"
          text="Educar, empoderar y conectar a nuestros estudiantes mediante experiencias de aprendizaje remoto que trasciendan las fronteras geográficas e idiomáticas."
        />
        <CardAbout
          image={ImgVision}
          title="Nuestra misión"
          text="Visualizamos un mundo donde miles de jóvenes y niños usen sus habilidades para transformar sus comunidades y regiones por medio del emprendimiento, la tecnología y la innovación."
        />
      </div>

      <img
        src={img1}
        alt="Description"
        className="w-[330px] h-[134px] pb-2 hidden"
      />

     
    </div>
  );
}

export default Aboutus;
