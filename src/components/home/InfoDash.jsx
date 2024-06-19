import Logo from "../../assets/Logo GE.png";

function InfoDash() {
  return (
    <div className="absolute w-[280px] h-[256px] top-5 left-3 xl:w-[661px] xl:h-[547px] opacity-1 bg-white rounded-[20px] xl:top-1/3 xl:left-6 ">
      <div className="w-[280px] h-[146px] xl:w-[661px] xl:h-[311px] bg-gradient-to-b from-[#D5E6F7] to-[#D5ADFB] rounded-t-[20px]">
        <div className="w-[266px] h-[89px] xl:w-[545px] xl:h-[191px] xl:pt-20 ml-2 pt-8 xl:mx-auto">
          <p className="leading-loose text-left text-[#133072] font-outfit font-bold text-2xl xl:text-5xl">
            Estás a punto de iniciar un viaje hacia el universo de la{" "}
            <span className="bg-[#133072] text-white">educación digital</span>
          </p>
        </div>
      </div>
      <img
        src={Logo}
        alt="Description"
        className="w-[179px] h-[49px] mt-8 ml-16 xl:w-[382px] xl:h-[104px] xl:mt-24 xl:ml-32"
      />
    </div>
  );
}

export default InfoDash;
