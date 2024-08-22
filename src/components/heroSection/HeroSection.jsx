import Button from "../Shared/Button";
import  heroHeadphones  from "../../assets/hero_headphones.png";

const HeroSection = () => {
    return (

      <div className="overflow-hidden min-h-[550]px mx-16 bg-gradient-to-br from-gray-400 to-gray-200 flex flex-col md:flex-row justify-center items-center rounded-3xl">
        {/* Text content */}
        
        <div className="md:w-1/2 md:text-left mx-4">
          <h3 className=" mx-48 text-xl font-bold text-black md:text-2xl">Beats Solo</h3>
          <h1 className=" mx-48 mt-2 text-3xl decoration-black font-extrabold md:text-7xl decoration-sky-500 ">Wireless</h1>
          <div className="mx-48 mt-2 text-9xl font-black text-gray-200 tracking-wide w-full text-center">HEADPHONES</div>
          {/* <p className="mt-4 text-base text-gray-300 md:text-lg text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap to electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
          </p> */}
          <div className="mx-48 flex justify-end md:justify-start mt-8">
          <Button text="Shop by Category" bgColor={"bg-primary"} textColor={"text-white"} />
          </div>
        </div>
        <div className="flex md:w-1/2 mx-10">
  <img
    className="w-auto h-40 md:h-3/4"
    src= {heroHeadphones}
    alt="Hero"
  />
        </div>

      </div>
    )

 
  }

  export default HeroSection;


 