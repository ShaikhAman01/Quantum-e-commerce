import React from 'react'

    const productData = [
        {
            id: 1,
            image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697623652/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/272322_v3hpuf.png',
            title: 'BoAt Rockerz 551ANC',
            price: 3500,
            trendingProductName: 'Featured',
        },
        {
            id: 2,
            image: 'https://ik.imagekit.io/3dqckpw4d/upload/macbook_pro_m2_cto_Space_Grey1662197696m2CTO.png',
            title: '14" Macbook pro',
            price: 169000,
            trendingProductName: 'Featured',
        },
        {
            id: 3,
            image: 'https://www.sathya.in/media/81385/catalog/in-galaxy-watch4-classic-399208-sm-r890nzkainu-481180996.png',
            title: 'Galaxy Watch4 ',
            price: 14999,
            trendingProductName: 'Featured',
        },
        {
            id: 4,
            image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT2R3ref_VW_34FR+watch-case-41-aluminum-midnight-nc-s9_VW_34FR+watch-face-41-aluminum-midnight-s9_VW_34FR_WF_CO_GEO_IN?wid=2000&hei=2000&fmt=png-alpha&.v=1694507905569',
            title: 'Apple Watch Series 9',
            price: 34999,
            trendingProductName: 'Featured',
        },
        {
            id: 5,
            image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$S7Product$&fmt=png-alpha',
            title: 'Sony WH-CH520 ',
            price: 4999,
            trendingProductName: 'Featured',
        },
        {
            id: 6,
            image: 'https://www.worldshop.eu/medias/img/8920393154590_w360_598063771/playstation5-dualsense-wireless-controller-white.webp',
            title: 'DualSense  controller',
            price: 4999,
            trendingProductName: 'Featured',
        },
        {
            id: 7,
            image: 'https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/07/nothing-phone-2-render.png',
            title: 'Nothing Phone(2)',
            price: 26999,
            trendingProductName: 'Featured',
        },
        {
            id: 8,
            image: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1712053407/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/269863_0_dwtmuf.png?tr=w-600',
            title: 'Amazon Echo Dot',
            price: 5499,
            trendingProductName: 'Featured',
        }
    ]

    export default function HomePageProductCard() {
        return (
            <div>
              <div className="container mx-auto pb-10">
                {/* Header section */}
                <div className="mb-10 max-w-[600px] mx-auto space-y-2">
                  <h1 className="text-3xl font-bold lg:text-4xl text-center">Best Seller Products</h1>
                </div>
          
                {/* Body section */}
                <div className="mb-10">
                  {/* Card section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                    {productData.map((item, index) => (
                      <div className="group bg-gradient-to-r from-gray-400 to-gray-300 rounded-3xl px-16 py-2" key={index}>
                        <div className="relative">
                          <img
                            className="h-48 w-52 object-cover rounded-md"
                            src={item.image}
                            alt={item.title}
                          />
                          {/* Hover button */}
                          <button className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-auto w-auto text-center bg-customRed text-white px-2 rounded-3xl justify-center items-center duration-200">
                            Add to cart
                          </button>
                        </div>
          
                        <div className="leading-7 text-center mt-2">
                          <h2 className="font-semibold text-left">{item.title}</h2>
                          <p className="font-bold text-left">₹ {item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
          

    }