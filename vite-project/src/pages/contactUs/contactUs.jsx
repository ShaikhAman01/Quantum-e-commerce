import React from 'react';
import Layout from "../../components/layout/Layout";

const ContactUs = () => {
    return (
        <Layout>
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 text-center">
                        Contact Us
                    </h1>
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Get in Touch</h2>
                            <p className="text-gray-700 leading-7">
                                We would love to hear from you! Whether you have a question about our products, need assistance, or just want to provide feedback, we're here to help.
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Information</h2>
                            <p className="text-gray-700 leading-7">
                                Email: <a href="mailto:email@example.com" className="text-primary">email@example.com</a>
                            </p>
                            <p className="text-gray-700 leading-7">
                                Phone: <a href="tel:+1234567890" className="text-primary">+1 (234) 567-890</a>
                            </p>
                            <p className="text-gray-700 leading-7">
                                Address: 123 Tech Avenue, Innovation City, CA 90001
                            </p>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Form</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactUs;
