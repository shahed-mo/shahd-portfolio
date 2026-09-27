import lapimg from "../../assets/images/heroimg.png";

const ImgDetails = () => {
  return (
    <div className="lg:col-span-5 flex justify-center">
      <div className="relative w-80 h-80 sm:w-96 sm:h-96">

        <div className="absolute inset-0 bg-red-600/30 rounded-[40%_60%_70%_30%/40%_50%_60%_55%] blur-2xl"></div>

        <div className="relative w-full h-full rounded-[45%_55%_65%_35%/50%_45%_55%_50%] overflow-hidden border-2 border-red-500/60 shadow-2xl bg-gradient-to-b from-red-900/40 via-red-950/60 to-black">
          <img
            src={lapimg}
            alt="Charlotte in red blazer with laptop"
            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>
    </div>
  );
};

export default ImgDetails;