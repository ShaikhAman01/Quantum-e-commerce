import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../../components/layout/Layout";

const AboutUs = () => {
    return (
        <Layout>
            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="mx-auto max-w-2xl lg:max-w-7xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6 text-center">
                        About Us
                    </h1>
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Who We Are</h2>
                            <p className="text-gray-700 leading-7">
                                Welcome to <b>Quantum</b>, your number one source for all things tech. We're dedicated to providing you the very best of electronics, with an emphasis on quality, customer service, and uniqueness.
                            </p>
                            <p className="text-gray-700 leading-7 mt-2">
                                Founded in 2024, Quantum has come a long way from its beginnings in Hyderabad, India. Our passion for "Pioneering Tech for a Sustainable Future" drove us to start this business.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h2>
                            <p className="text-gray-700 leading-7">
                                Our mission is to make technology accessible and affordable to everyone. We believe that quality and affordability can go hand-in-hand, and we strive to bring the latest innovations to our customers without breaking the bank.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Team</h2>
                            <p className="text-gray-700 leading-7">
                                Our team is made up of tech enthusiasts, customer service professionals, and creative thinkers who are dedicated to providing you with the best shopping experience. We are passionate about technology and are here to help you find the perfect products for your needs.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Values</h2>
                            <ul className="list-disc list-inside text-gray-700 leading-7">
                                <li>Customer Satisfaction: We prioritize our customers' needs and strive to exceed their expectations.</li>
                                <li>Integrity: We believe in honest and transparent business practices.</li>
                                <li>Innovation: We are constantly seeking new ways to improve and innovate.</li>
                                <li>Community: We are committed to giving back to the community and supporting local initiatives.</li>
                            </ul>
                        </section>

                        <section className="mt-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Us</h2>
                            <p className="text-gray-700 leading-7">
                                If you have any questions or comments, please don't hesitate to <Link to={'/contact'} className="text-primary">Contact Us</Link> at email@example.com or call us at +91 1234567890. We're always here to help!
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutUs;
