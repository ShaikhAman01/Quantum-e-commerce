import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";
import earphone from "../../assets/category_earphone.png";
import watch from "../../assets/category_yellowWatch.png";
import laptop from "../../assets/category_laptop.png";
import gaming from "../../assets/category_gaming.png";
import vr from "../../assets/category_vr.png";
import speaker from "../../assets/category_speaker.png";

// Category data
const categories = [
  {
    name: ["Immerse", "With", "Music"],
    image: earphone,
    gradient: "bg-gradient-to-br from-black/90 to-black/70",
    textColor: "text-white",
    buttonTextColor: "text-white",
    buttonBgColor: "bg-primary",
  },
  {
    name: ["Smart", "Wearable", "Tech"],
    image: watch,
    gradient: "bg-gradient-to-br from-brandYellow to-brandYellow/90",
    textColor: "text-white",
    buttonTextColor: "text-brandYellow",
    buttonBgColor: "bg-white",
  },
  {
    name: ["Essential", "Work", "Tools"],
    image: laptop,
    gradient: "bg-gradient-to-br from-primary/90 to-primary/70",
    textColor: "text-white",
    buttonTextColor: "text-primary",
    buttonBgColor: "bg-white",
  },
  {
    name: ["Ultimate", "Gaming", "Gear"],
    image: gaming,
    gradient: "bg-gradient-to-br from-gray-400/90 to-gray-100",
    textColor: "text-black",
    buttonTextColor: "text-brandWhite",
    buttonBgColor: "bg-black",
  },
  {
    name: ["Explore", "Virtual", "Reality"],
    image: vr,
    gradient: "bg-gradient-to-br from-brandGreen/90 to-brandGreen/70",
    textColor: "text-white",
    buttonTextColor: "text-brandGreen",
    buttonBgColor: "bg-white",
  },
  {
    name: ["Premium", "Sound", "Systems"],
    image: speaker,
    gradient: "bg-gradient-to-br from-brandBlue/90 to-brandBlue/70",
    textColor: "text-white",
    buttonTextColor: "text-brandBlue",
    buttonBgColor: "bg-white",
  },
];

// Reusable Category Card component
const CategoryCard = ({ category, index, navigate }) => (
  <div
    onClick={() => navigate(`/category/${category.name.join('')}`)}
    className={`py-10 pl-5 ${category.gradient} ${category.textColor} rounded-3xl relative h-[320px] flex items-end col-span-${index === 2 || index === 3 ? '2' : '1'}`}
  >
    <div>
      <div className="mb-4">
        <p className={`mb-[2px] ${index === 0 ? "text-gray-400" : category.textColor}`}>{category.name[0]}</p>
        <p className="text-2xl font-semibold mb-[2px]">{category.name[1]}</p>
        <p className={`text-4xl xl:text-5xl font-bold ${index !== 1 ? "opacity-20" : "opacity-40"} mb-2`}>{category.name[2]}</p>
        <Button text="Browse" bgColor={category.buttonBgColor} textColor={category.buttonTextColor} />
      </div>
    </div>
    <img
      src={category.image}
      alt={`Category ${index + 1}`}
      className={`w-[${index === 2 ? '250px' : '320px'}] absolute ${index === 2 ? 'top-1/2 -translate-y-1/2 -right-0' : '-right-4 lg:top-[40px]'}`}
    />
  </div>
);

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="py-8">
      <div className="mx-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
