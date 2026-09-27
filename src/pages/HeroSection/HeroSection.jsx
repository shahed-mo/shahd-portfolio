import heroimg from "../../assets/images/lap.png";
import Rightinfo from "./Rightinfo";

const HeroSection = () => {

  return (
    <section
      className="min-h-[85vh] flex items-center justify-center py-12 px-6 slide-up"
      data-purpose="hero-section"
      id="home"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Visual Avatar Frame */}
        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">

            {/* Outer Rings */}
            <div className="absolute inset-0 rounded-full border border-red-600/30 animate-pulse" />

            <div className="absolute -inset-4 rounded-full border border-red-500/20" />

            <div className="absolute -inset-8 rounded-full border border-red-700/10" />

            {/* Image Container */}
            <div
              className="
                relative
                w-64 h-64
                sm:w-80 sm:h-80
                rounded-full
                overflow-hidden
                neon-circle-red
                bg-gradient-to-tr
                from-red-950/60
                via-red-900/30
                to-black/80
                border-2
                border-red-500/50
                flex
                items-center
                justify-center
              "
            >
              <img
                src={heroimg}
                alt="Frontend Developer"
                className="
                  w-full
                  h-full
                  object-contain
                  object-center
                  p-1
                  transition-transform
                  duration-500
                  hover:scale-105
                "
              />
            </div>

          </div>
        </div>
        {/* <!-- Hero Information (Right) --> */}
       <Rightinfo/>
      </div>
    </section>
  );
};

export default HeroSection;