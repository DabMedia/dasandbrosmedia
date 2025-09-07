import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-[#0b1220] text-gray-300">
            {/* Subscribe Section */}
            <div className="border-b border-gray-700 py-10 text-center px-4">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold text-white mb-2"
                >
                    Subscribe for updates
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-400 mb-5"
                >
                    Stay informed with our latest news and insights.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="flex w-full max-w-md rounded-lg overflow-hidden border border-gray-400">
                        <input
                            type="email"
                            placeholder="Your email here"
                            className="flex-1 px-3 py-2 text-black outline-none border-r border-gray-400"
                        />
                        <button className="px-5 py-2 bg-black text-white font-medium">
                            Join
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Footer Links with animation */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
                {[
                    {
                        title: "Quick Links",
                        items: ["About Us", "Our Services", "Case Studies", "Contact Us"],
                    },
                    {
                        title: "Resources",
                        items: ["FAQs", "Support Center", "Testimonials", "Privacy Policy"],
                    },
                    {
                        title: "Follow Us",
                        items: ["Facebook", "Twitter", "LinkedIn", "Instagram"],
                    },
                    {
                        title: "Legal Links",
                        items: ["Terms of Service", "Privacy Policy", "Careers", "Events"],
                    },
                ].map((section, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-white font-semibold mb-3 tracking-wide border-gray-600 pb-2">
                            {section.title}
                        </h4>
                        <ul className="list-disc list-inside space-y-2">
                            {section.items.map((item, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <a href="#" className="hover:text-white transition duration-300">
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="border-t border-gray-700 py-4 text-center text-sm text-gray-400"
            >
                © {new Date().getFullYear()} Das and Bros Media. All rights reserved.
            </motion.div>
        </footer>
    );
};

export default Footer;
