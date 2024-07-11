import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import Button from "../../components/Shared/Button";
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
    desc: 'Experience uninterrupted and immersive sound with Hybrid Active Noise Cancellation up to 35dB and 100 Hours playback.',
    price: 3500,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 2,
    image: homePage_mac,
    title: '14" MacBook Pro',
    desc: 'Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance.',
    price: 169000,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 3,
    image: homePage_watch_1,
    title: 'Galaxy Watch4',
    desc: 'Stay connected with your health goals with Samsung Galaxy Watch4s fitness and health tracking features.',
    price: 14999,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 4,
    image: homePage_watch_2,
    title: 'Apple Watch Series 9',
    desc: 'The ultimate device for a healthy life, with advanced sensors and new insights for wellness.',
    price: 34999,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 5,
    image: homePage_headphones_3,
    title: 'Sony WH-CH520',
    desc: 'Lightweight and wireless, with up to 50 hours of battery life and multipoint connection.',
    price: 4999,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 6,
    image: homePage_ps5,
    title: 'DualSense Controller',
    desc: 'Discover a deeper, highly immersive gaming experience with the innovative new PS5™ controller.',
    price: 4999,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 7,
    image: homePage_nothingPhone,
    title: 'Nothing Phone(2)',
    desc: 'The next-gen phone with a transparent design, advanced cameras, and a refined interface.',
    price: 26999,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 8,
    image: homePage_alexa,
    title: 'Amazon Echo Dot',
    desc: 'Smart speaker with Alexa, voice control your music, smart home, and get weather updates.',
    price: 5499,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 9,
    image: homePage_headphones_1,
    title: 'BoAt Airdopes 441',
    desc: 'True wireless earbuds with immersive sound and long battery life.',
    price: 2499,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 10,
    image: homePage_mac,
    title: 'MacBook Air M2',
    desc: 'Supercharged by the M2 chip, with all-day battery life and a stunning Retina display.',
    price: 119900,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 11,
    image: homePage_watch_1,
    title: 'Samsung Galaxy Watch5',
    desc: 'Advanced health monitoring and fitness tracking in a sleek design.',
    price: 27999,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 12,
    image: homePage_watch_2,
    title: 'Apple Watch SE',
    desc: 'Powerful features to help keep you connected, active, and healthy.',
    price: 29900,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 13,
    image: homePage_headphones_3,
    title: 'Sony WF-1000XM4',
    desc: 'Industry-leading noise cancellation and exceptional sound quality in truly wireless earbuds.',
    price: 19990,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 14,
    image: homePage_ps5,
    title: 'PlayStation 5 Console',
    desc: 'Next-gen gaming with lightning-fast loading, deeper immersion, and an all-new generation of incredible PlayStation games.',
    price: 49990,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 15,
    image: homePage_nothingPhone,
    title: 'Google Pixel 6',
    desc: 'The smartest and fastest Pixel yet, with the Google Tensor chip and a stunning camera system.',
    price: 44999,
    trendingProductName: 'Featured',
    quantity: 1,
  },
  {
    id: 16,
    image: homePage_alexa,
    title: 'Google Nest Mini',
    desc: 'Smart speaker with Google Assistant for hands-free help and control of your smart home.',
    price: 3499,
    trendingProductName: 'Featured',
    quantity: 1,
  },
];

const AllProduct = () => {
    const navigate = useNavigate();

    return (
      <Layout>
      <div>
        <div className="px-16 mx-auto pb-10">
          {/* Header section */}
          <div className="mb-10 max-w-[600px] mx-auto space-y-2">
            <h1 className="text-3xl font-bold lg:text-4xl text-center">All Products</h1>
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
      </Layout>
    );
}

export default AllProduct;