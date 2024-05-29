const HeroSection = () => {
    return (
      <div className="mx-6 bg-gradient-to-r from-gray-400 to-gray-300 max-h-screen flex flex-col md:flex-row justify-center items-center rounded-3xl">
        {/* Text content */}
        <div className="md:w-1/2 md:text-left mx-4">
          <h3 className=" mx-48 text-xl font-bold text-black md:text-2xl">Beats Solo</h3>
          <h1 className=" mx-48 mt-2 text-3xl decoration-black font-extrabold md:text-7xl decoration-sky-500 ">Wireless</h1>
          <div className="mx-48 mt-2 text-9xl font-black text-gray-200 tracking-wide w-full text-center">HEADPHONES</div>
          {/* <p className="mt-4 text-base text-gray-300 md:text-lg text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap to electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
          </p> */}
          <div className="mx-48 flex justify-end md:justify-start mt-8">
            <button className="hover:bg-red-600 bg-customRed  text-gray-200 font-bold py-2 px-4 rounded-3xl border border-transparent hover:border-white inline-flex items-center md:px-8 hover:shadow-lg hover:transform hover:-translate-y-1">
              Shop by category
            </button>
          </div>
        </div>
        {/* Image */}
        <div className="flex md:w-1/2 mx-10">
  <img
    className="w-auto h-40 md:h-3/4 "
    src="https://images-cdn.ubuy.co.in/64edb77970d39e7b140d1095-beats-studio-pro-wireless-headphones.jpg"
    alt="Hero"
  />
</div>


      </div>
    )

    // ""


  //   return (
  //       <div className="bg-gradient-to-r from-gray-400 to-gray-200 h-screen flex flex-col md:flex-row justify-center items-center">
  //         <div className=" top-1/2 transform -translate-y-1/2 text-left">
  //           <h1 className="text-4xl font-bold text-black">Beats Solo</h1>
  //           <h2 className="text-6xl font-extrabold text-black mt-2">Wireless</h2>
  //           <div className="mt-2 text-9xl font-extrabold text-gray-200 tracking-wide w-full text-center">HEADPHONES</div>
  //           <button className="mt-6 px-6 py-2 bg-customRed text-white font-semibold rounded-3xl">Shop by Category</button>

  //         </div>
  //         <div className="md:w-1/2 lg:w-1/3 xl:w-2/4 flex justify-center items-center relative">
  //   <img src="https://images-cdn.ubuy.co.in/64edb77970d39e7b140d1095-beats-studio-pro-wireless-headphones.jpg" alt="Headphones" className="w-60 md:w-full h-auto object-contain rounded-xl relative top-[-10px]" />
  // </div>
  //       </div>
  //     );
  }

  export default HeroSection;


 