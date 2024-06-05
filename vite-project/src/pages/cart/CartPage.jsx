import Button from "../../components/Shared/Button";
import Layout from "../../components/layout/Layout";
import { Trash } from 'lucide-react'

const products = [
    {
        id: 1,
        name: 'Nike Air Force 1 07 LV8',
        href: '#',
        price: '₹47,199',
        originalPrice: '₹48,900',
        discount: '5% Off',
        color: 'Orange',
        size: '8 UK',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
    },
    {
        id: 2,
        name: 'Nike Blazer Low 77 SE',
        href: '#',
        price: '₹1,549',
        originalPrice: '₹2,499',
        discount: '38% off',
        color: 'White',
        leadTime: '3-4 weeks',
        size: '8 UK',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
    },
    {
        id: 3,
        name: 'Nike Air Max 90',
        href: '#',
        price: '₹999 ',
        originalPrice: '₹2219',
        discount: '78% off',
        color: 'Black',
        imageSrc:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
    },
]

const CartPage = () => {
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
                                                            {product.originalPrice}
                                                        </p>
                                                        <p className="text-sm font-medium text-gray-900 ml-2">
                                                            {product.price}
                                                        </p>
                                                        <p className="text-sm font-medium text-green-500 ml-2">
                                                            {product.discount}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex items-center">
                                                <div className="flex items-center border border-gray-200 rounded-md">
                                                    <button type="button" className="h-7 w-7 text-gray-700">-</button>
                                                    <input
                                                        type="text"
                                                        className="mx-1 h-7 w-9 text-center border-0"
                                                        defaultValue={1}
                                                    />
                                                    <button type="button" className="h-7 w-7 text-gray-700">+</button>
                                                </div>
                                                <button type="button" className="flex items-center ml-6 text-red-500">
                                                    <Trash size={16} />
                                                    <span className="ml-1 text-xs font-medium"></span>
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
                                        <dt className="text-sm text-gray-800">Price (3 item)</dt>
                                        <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Discount</dt>
                                        <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Delivery Charges</dt>
                                        <dd className="text-sm font-medium text-green-700">Free</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-dashed pt-4">
                                        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                        <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
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
