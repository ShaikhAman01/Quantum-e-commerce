import { useNavigate } from "react-router";
import Layout from "../../components/layout/Layout";
import Button from "../../components/Shared/Button";

// productData 

const productData = [
    {
      id: 1,
      image: 'placeholder_image_url',
      title: 'BoAt Rockerz 551ANC',
      desc: 'Experience uninterrupted and immersive sound with Hybrid Active Noise Cancellation up to 35dB and 100 Hours playback.',
      price: 3500,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 2,
      image: 'placeholder_image_url',
      title: '14" MacBook Pro',
      desc: 'Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU, and machine learning performance.',
      price: 169000,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 3,
      image: 'placeholder_image_url',
      title: 'Galaxy Watch4',
      desc: 'Stay connected with your health goals with Samsung Galaxy Watch4’s fitness and health tracking features.',
      price: 14999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 4,
      image: 'placeholder_image_url',
      title: 'Apple Watch Series 9',
      desc: 'The ultimate device for a healthy life, with advanced sensors and new insights for wellness.',
      price: 34999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 5,
      image: 'placeholder_image_url',
      title: 'Sony WH-CH520',
      desc: 'Lightweight and wireless, with up to 50 hours of battery life and multipoint connection.',
      price: 4999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 6,
      image: 'placeholder_image_url',
      title: 'DualSense Controller',
      desc: 'Discover a deeper, highly immersive gaming experience with the innovative new PS5™ controller.',
      price: 4999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 7,
      image: 'placeholder_image_url',
      title: 'Nothing Phone(2)',
      desc: 'The next-gen phone with a transparent design, advanced cameras, and a refined interface.',
      price: 26999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 8,
      image: 'placeholder_image_url',
      title: 'Amazon Echo Dot',
      desc: 'Smart speaker with Alexa, voice control your music, smart home, and get weather updates.',
      price: 5499,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 9,
      image: 'placeholder_image_url',
      title: 'Samsung Galaxy Watch4 Classic',
      desc: 'Luxurious design with a rotating bezel, fitness tracking, and advanced health monitoring features.',
      price: 27999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 10,
      image: 'placeholder_image_url',
      title: 'Apple Watch Series 7',
      desc: 'The most advanced Apple Watch with powerful sensors for health and fitness tracking.',
      price: 45999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 11,
      image: 'placeholder_image_url',
      title: 'Sony WH-1000XM4',
      desc: 'Industry-leading noise canceling with Dual Noise Sensor technology and long battery life.',
      price: 29999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 12,
      image: 'placeholder_image_url',
      title: 'Bose QuietComfort 35 II',
      desc: 'Wireless Bluetooth headphones with world-class noise cancellation for clear and balanced sound.',
      price: 19999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 13,
      image: 'placeholder_image_url',
      title: 'Apple AirPods Max',
      desc: 'Over-ear headphones with high-fidelity audio and Active Noise Cancellation.',
      price: 59999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 14,
      image: 'placeholder_image_url',
      title: 'LG Watch W7',
      desc: 'Hybrid watch with mechanical hands, a stainless steel body, and fitness tracking features.',
      price: 29999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 15,
      image: 'placeholder_image_url',
      title: 'iPhone 13 Pro',
      desc: '5G capable phone with a Super Retina XDR display and advanced camera system.',
      price: 119999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 16,
      image: 'placeholder_image_url',
      title: 'Samsung Galaxy S21 Ultra',
      desc: 'Pro-grade camera, 8K video recording, and a 108MP sensor for epic photo and video quality.',
      price: 105999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 17,
      image: 'placeholder_image_url',
      title: 'Google Pixel 6 Pro',
      desc: 'Powered by Google Tensor, with a stunning display and an advanced camera system.',
      price: 99999,
      trendingProductName: 'Featured',
      quantity: 1,
    },
    {
      id: 18,
      image: 'placeholder_image_url',
      title: 'OnePlus 9 Pro',
      desc: 'Flagship performance with a Hasselblad Camera for Mobile and a 120Hz Fluid Display.',
      price: 64999,
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