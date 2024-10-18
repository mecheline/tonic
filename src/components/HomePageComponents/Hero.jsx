import { partners } from "../HomeData";

const Hero = () => {
  return (
    <div className="py-12 px-4 md:px-12">
      <div className="flex flex-col gap-y-16 md:flex-row items-center">
        <div className="items-start justify-center w-full mx-auto md:w-1/2">
          <div className="font-normal text-2xl md:text-3xl lg:text-5xl text-center md:text-left md:leading-[50px] lg:leading-[72px] text-black font-manrope mx-auto">
            Save time by building fast with Boldo Template
          </div>
          <div className="font-normal text-xs leading-7 text-[#777777] mt-4 mb-12 md:mb-6 lg:mb-12 font-manrope w-full text-center md:text-left mx-auto">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </div>
          <div className="flex flex-col gap-y-8 lg:flex-row ">
            <button className="btn-dark font-bold text-xl text-white font-manrope md:w-[80%] lg:w-full hover:bg-[#0A2640] hover:text-white">
              Buy template
            </button>
            <button className="btn-white py-4 px-14 lg:ml-4 font-manrope  md:w-[80%] lg:w-full hover:bg-[#0A2640] hover:text-white">
              Explore
            </button>
          </div>
        </div>
        <div className="flex items-start justify-center w-full md:w-1/2">
          <img src="/hero.svg" width="494px" height="423px" />
        </div>
      </div>
      {/* partners */}
      <div className="py-16">
        <div className="flex items-center justify-center gap-x-4">
          {partners.map((partner, i) => (
            <div key={i}>
              <img src={partner} width="146.38px" height="42px" alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
