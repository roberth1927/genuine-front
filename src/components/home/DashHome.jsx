import img1 from "../../assets/img-1.png";
import InfoDash from "./InfoDash";
import EmailDash from "./EmailDash"

function DashHome() {
  return (
    <div className="relative w-[350px] h-[489px] xl:w-[1480px] xl:h-[1043px] top-15 xl:left-18 xl:top-18">
      <img
        src={img1}
        alt="Description"
        className="absolute w-full h-full xl:rounded-tl-20 xl:transform"
      />
      <InfoDash />
      <EmailDash />
    </div>
  );
}

export default DashHome;
