import img from "../../assets/join.png";
import Face from "../../assets/Face.png";
import Insta from "../../assets/Insta.png";
import Tik from "../../assets/Tik.png";
import Lind from "../../assets/Lind.png";
import You from "../../assets/You.png";
import Logo from "../../assets/LogoGEJoin.png";

function DashHome() {
  return (
    <div className="relative w-[350px] h-[489px] flex justify-end xl:w-[1480px] xl:h-[1043px] top-15 xl:left-18 xl:top-18 xl:mx-0 mx-auto">
      <img
        src={img}
        alt="Description"
        className="absolute w-full h-full xl:rounded-tl-20 xl:transform"
      />

      <div className="absolute mt-20 mr-10 rounded-full w-[308px] h-[106px]  bg-white flex  justify-center items-center">
        <img src={Logo} alt="" />
      </div>

      <div className="absolute flex flex-col justify-center items-center w-full h-full xl:mt-56">
        <div className="w-[310px] h-[256px] xl:w-[1204px] xl:h-[380px] bg-white rounded-[20px] mb-12 mt-20">
          <div className="w-[310px] h-[146px] xl:w-[1204px] xl:h-[142px] bg-gradient-to-b from-[#D5E6F7] to-[#D5ADFB] rounded-t-[20px] flex justify-center items-center">
            <p className="leading-tight text-[#133072] font-outfit font-bold text-2xl xl:text-5xl text-center">
              ¡Únete a Genuine Digital School hoy!
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center xl:w-[1204px] xl:h-[250px] p-4">
            <p className="text-[#133072] font-outfit font-bold text-4xl mb-4">
              Explora el increíble universo de la educación virtual junto a tu
              hijo
            </p>

            <p className="text-[#133072] font-outfit font-bold text-2xl">
              Síguenos en Redes Sociales y conoce nuestra gran comunidad digital
            </p>

            <div className="flex justify-between w-full max-w-[306px] pt-8">
              <img
                src={Face}
                alt="Facebook"
                className="text-[#133072] xl:w-[30px] xl:h-[30px]"
              />
              <img
                src={Insta}
                alt="Insta"
                className="text-[#133072] xl:w-[30px] xl:h-[30px]"
              />
              <img
                src={Tik}
                alt="Tik"
                className="text-[#133072] xl:w-[30px] xl:h-[30px]"
              />
              <img
                src={You}
                alt="You"
                className="text-[#133072] xl:w-[30px] xl:h-[30px]"
              />
              <img
                src={Lind}
                alt="Lind"
                className="text-[#133072] xl:w-[30px] xl:h-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-outfit opacity-1 xl:text-[35px] font-semibold  text-white ">
            studyatgenuine.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashHome;
