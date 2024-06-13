import React, { useState } from 'react';
import Button from "../../components/Shared/Button";
import Layout from "../../components/layout/Layout";
import { Trash } from 'lucide-react'

import boatHeadphones from "../../assets/homePage_headphone_1.png";
import nothingPhone from "../../assets/homePage_nothingPhone.png";
import appleWatch from "../../assets/homePage_watch_2.png";

const initialProducts = [
    {
        id: 1,
        name: 'boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones',
        href: '#',
        price: 8549,
        originalPrice: 8999,
        discount: '5% Off',
        color: 'white',
        imageSrc: boatHeadphones,
    },
    {
        id: 2,
        name: 'Nothing Phone(2a)',
        href: '#',
        price: 21000,
        originalPrice: 28000,
        discount: '25% off',
        color: 'black',
        imageSrc: nothingPhone,
    },
    {
        id: 3,
        name: 'Apple Watch Series 9',
        href: '#',
        price: 38165,
        originalPrice: 44900,
        discount: '15% off',
        color: 'Black',
        imageSrc: appleWatch,
    },
];

const CartPage = () => {
    const [products, setProducts] = useState(initialProducts.map(product => ({ ...product, quantity: 1 })));

    const handleQuantityChange = (id, amount) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, quantity: Math.max(1, product.quantity + amount) } : product
        ));
    };

    const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const totalOriginalPrice = products.reduce((acc, product) => acc + product.originalPrice * product.quantity, 0);
    const totalDiscount = totalOriginalPrice - totalPrice;
    const finalAmount = totalPrice;

    return (
        <Layout>
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                        Shopping Cart
                    </h1>
                    <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8 p-4 shadow-sm">
                            <ul role="list" className="divide-y divide-gray-300">
                                {products.map((product) => (
                                    <li key={product.id} className="flex py-6 sm:py-6">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={product.imageSrc}
                                                alt={product.name}
                                                className="h-24 w-24 sm:h-38 sm:w-38 rounded-md object-contain object-center"
                                            />
                                        </div>
                                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm">
                                                            <a href={product.href} className="font-semibold text-black">
                                                                {product.name}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <div className="mt-1 flex text-sm text-gray-500">
                                                        <p>{product.color}</p>
                                                    </div>
                                                    <div className="mt-1 flex items-end">
                                                        <p className="text-xs font-medium text-gray-500 line-through">
                                                            ₹{product.originalPrice.toLocaleString()}
                                                        </p>
                                                        <p className="text-sm font-medium text-gray-900 ml-2">
                                                            ₹{product.price.toLocaleString()}
                                                        </p>
                                                        <p className="text-sm font-medium text-green-500 ml-2">
                                                            {product.discount}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex items-center">
                                                <div className="flex items-center border border-gray-200 rounded-md">
                                                    <button type="button" className="h-7 w-7 text-gray-700" onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                                                    <input
                                                        type="text"
                                                        className="mx-1 h-7 w-9 text-center border-0"
                                                        value={product.quantity}
                                                        readOnly
                                                    />
                                                    <button type="button" className="h-7 w-7 text-gray-700" onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                                                </div>
                                                <button type="button" className="flex items-center ml-6 text-red-500" onClick={() => setProducts(products.filter(p => p.id !== product.id))}>
                                                    <Trash size={16} />
                                                    <span className="ml-1 text-xs font-medium">Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 p-4 shadow-sm"
                        >
                            <h2
                                id="summary-heading"
                                className="border-b border-gray-300 pb-3 text-lg font-medium text-gray-900"
                            >
                                Price Details
                            </h2>
                            <div className="py-4">
                                <dl className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Price ({products.reduce((acc, product) => acc + product.quantity, 0)} item{products.length > 1 ? 's' : ''})</dt>
                                        <dd className="text-sm font-medium text-gray-900">₹ {totalPrice.toLocaleString()}</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Discount</dt>
                                        <dd className="text-sm font-medium text-green-700">- ₹ {totalDiscount.toLocaleString()}</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Delivery Charges</dt>
                                        <dd className="text-sm font-medium text-green-700">Free</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-dashed pt-4">
                                        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                        <dd className="text-base font-medium text-gray-900">₹ {finalAmount.toLocaleString()}</dd>
                                    </div>
                                </dl>
                                <div className="mt-6">
                                    <Button text="Checkout" bgColor={"bg-primary"} textColor={"text-white"} />
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default CartPage;
