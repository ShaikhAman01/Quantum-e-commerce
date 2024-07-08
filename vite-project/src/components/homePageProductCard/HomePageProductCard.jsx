import Button from '../Shared/Button';
import { useNavigate } from 'react-router-dom';
import homePage_headphones_1 from "../../assets/homePage_headphone_1.png";
import homePage_headphones_3 from "../../assets/homePage_headphone_3.png";
import homePage_alexa from "../../assets/homePage_alexa.png";
import homePage_mac from "../../assets/homePage_mac.png";
import homePage_watch_1 from "../../assets/homePage_watch_1.png";
import homePage_watch_2 from "../../assets/homePage_watch_2.png";
import homePage_ps5 from "../../assets/homePage_ps5.png";
import homePage_nothingPhone from "../../assets/homePage_nothingPhone.png";

const productData = [
  {
    id: 1,
    image: homePage_headphones_1,
    title: 'BoAt Rockerz 551ANC',
    price: 3500,
    trendingProductName: 'Featured',
  },
  {
    id: 2,
    image: homePage_mac,
    title: '14" Macbook pro',
    price: 169000,
    trendingProductName: 'Featured',
  },
  {
    id: 3,
    image: homePage_watch_1,
    title: 'Galaxy Watch4 ',
    price: 14999,
    trendingProductName: 'Featured',
  },
  {
    id: 4,
    image: homePage_watch_2,
    title: 'Apple Watch Series 9',
    price: 34999,
    trendingProductName: 'Featured',
  },
  {
    id: 5,
    image: homePage_headphones_3,
    title: 'Sony WH-CH520 ',
    price: 4999,
    trendingProductName: 'Featured',
  },
  {
    id: 6,
    image: homePage_ps5,
    title: 'DualSense controller',
    price: 4999,
    trendingProductName: 'Featured',
  },
  {
    id: 7,
    image: homePage_nothingPhone,
    title: 'Nothing Phone(2)',
    price: 26999,
    trendingProductName: 'Featured',
  },
  {
    id: 8,
    image: homePage_alexa,
    title: 'Amazon Echo Dot',
    price: 5499,
    trendingProductName: 'Featured',
  }
];

export default function HomePageProductCard() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="px-16 mx-auto pb-10">
        {/* Header section */}
        <div className="mb-10 max-w-[600px] mx-auto space-y-2">
          <h1 className="text-3xl font-bold lg:text-4xl text-center">Best Seller Products</h1>
        </div>

        {/* Body section */}
        <div className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
            {productData.map((item) => (
              <div className="group bg-gradient-to-br from-gray-400 to-gray-200 rounded-3xl p-6 relative w-full max-w-xs" key={item.id}>
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    onClick={() => navigate(`/productinfo`)}
                    className="object-contain h-full w-full cursor-pointer"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="leading-7 text-center mt-2">
                  <h2 className="font-semibold text-left">{item.title}</h2>
                  <p className="font-bold text-left">₹ {item.price}</p>
                </div>
                <div className="text-center mt-4">
                  <Button text="Add to Cart" bgColor="bg-primary" textColor="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
