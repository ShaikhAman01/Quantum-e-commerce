import React from 'react';
import Layout from "../../components/layout/Layout";
import Button from '../../components/Shared/Button';

import headPhone from "../../assets/homePage_headphone_1.png";

const ProductInfo = () => {
  return (
    <Layout>
      <section className="flex flex-col lg:flex-row items-center py-10 lg:py-20 px-4 mx-auto max-w-screen-xl">
        {/* Product Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            className="rounded-lg shadow-lg object-contain overflow-hidden h-full w-full lg:h-[45em]"
            src={headPhone}
            alt="Product"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="mb-6">
            {/* Product Title */}
            <h2 className="text-2xl font-bold leading-loose tracking-wide text-gray-800 dark:text-gray-200">
            boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones with Mic
            </h2>
          </div>

          {/* Description Section */}
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-400 text-base leading-relaxed">
            With up to 50-hour battery life and quick charging, you ll have enough power for multi-day road trips and long festival weekends.;Great sound quality customizable to your music preference with EQ Custom on the Sony | Headphones Connect App.
            </p>
          </div>

          {/* Price and Button Section */}
          <div className="flex items-center justify-between">
            <p className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
              ₹ 5,000
            </p>
            <Button text="Add to Cart" bgColor={"bg-primary"} textColor={"text-white"} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductInfo;
