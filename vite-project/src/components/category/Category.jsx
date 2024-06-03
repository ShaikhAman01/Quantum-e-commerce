import Button from "../Shared/Button";
import earphone from "../../assets/category_earphone.png";
import watch from "../../assets/category_yellowWatch.png"; 
import laptop from "../../assets/category_laptop.png"; 
import gaming from "../../assets/category_gaming.png"; 
import vr from "../../assets/category_vr.png"; 
import speaker from "../../assets/category_speaker.png"; 


// Category data
const category = [
  {
    name: ["Enjoy", "With", "Earphones"],
    image: earphone
  },
  {
    name: ["New", "Wear", "Gadget"],
    image: watch
  },
  {
    name: ["Trend", "devices", "laptop"],
    image: laptop
  },
  {
    name: ["Best", "Gaming", "Console"],
    image: gaming
  },
  {
    name: ["Play", "Game", "Oculus"],
    image: vr
  },
  {
    name: ["New", "Amazon", "Speaker"],
    image: speaker
  },
];

const Category = () => {
  return (
    <div className="py-8">
      <div className=" mx-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First category */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">{category[0].name[0]}</p>
                <p className="text-2xl font-semibold mb-[2px]">{category[0].name[1]}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">{category[0].name[2]}</p>
                <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"} />
              </div>
            </div>
            <img src={category[0].image} alt="Category 1" className="w-[320px] absolute bottom-0" />
          </div>
          
          {/* Second category */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{category[1].name[0]}</p>
                <p className="text-2xl font-semibold mb-[2px]">{category[1].name[1]}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">{category[1].name[2]}</p>
                <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandYellow"} />
              </div>
            </div>
            <img src={category[1].image} alt="Category 2" className="w-[320px] absolute -right-16 lg:top-[8px]" />
          </div>

          {/* Third category */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{category[2].name[0]}</p>
                <p className="text-2xl font-semibold mb-[2px]">{category[2].name[1]}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">{category[2].name[2]}</p>
                <Button text="Browse" bgColor={"bg-white"} textColor={"text-primary"} />
              </div>
            </div>
            <img src={category[2].image} alt="Category 3" className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0" />
          </div>

          {/* Fourth category */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-black rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-black">{category[3].name[0]}</p>
                <p className="text-2xl font-semibold mb-[2px]">{category[3].name[1]}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">{category[3].name[2]}</p>
                <Button text="Browse" bgColor={"bg-black"} textColor={"text-brandWhite"} />
              </div>
            </div>
            <img src={category[3].image} alt="Category 4" className="w-[320px] absolute -right-4 lg:top-[40px]" />
          </div>

          {/* Fifth category */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{category[4].name[0]}</p>
                <p className="text-2xl font-semibold mb-[2px]">{category[4].name[1]}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">{category[4].name[2]}</p>
                <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandGreen"} />
              </div>
            </div>
            <img src={category[4].image} alt="Category 5" className="w-[320px] absolute -right-4 lg:top-[40px]" />
          </div>

          {/* Sixth category */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">{category[5].name[0]}</p>
                <p className="text-2xl font-semibold mb-[2px]">{category[5].name[1]}</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">{category[5].name[2]}</p>
                <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandBlue"} />
              </div>
            </div>
            <img src={category[5].image} alt="Category 6" className="w-[320px] absolute -right-4 lg:top-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
