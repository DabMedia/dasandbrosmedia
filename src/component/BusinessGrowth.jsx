import { motion } from "framer-motion";
import BusinessGrowthimg from "../assets/BusinessGrowth.jpeg"
export default function BusinessGrowth() {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
                        Maximize Your Business Growth with Us
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Experience a remarkable boost in ROI with our tailored marketing strategies.
                        Our innovative solutions ensure your systems are secure and efficient.
                    </p>

                    {/* Features */}
                    <div className="mt-6 grid sm:grid-cols-2 gap-6">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-4 rounded-xl bg-white shadow-md border border-gray-200"
                        >
                            <h4 className="font-semibold text-gray-900">Enhanced ROI</h4>
                            <p className="text-gray-600 text-sm mt-1">
                                Maximize your returns with data-driven marketing and analytics.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-4 rounded-xl bg-white shadow-md border border-gray-200"
                        >
                            <h4 className="font-semibold text-gray-900">Robust Security</h4>
                            <p className="text-gray-600 text-sm mt-1">
                                Protect your assets with our advanced cybersecurity measures.
                            </p>
                        </motion.div>
                    </div>

                    {/* Buttons with spacing */}
                    <div className="mt-8 flex gap-4">
                        <button className="px-6 py-2 bg-white text-black 
                                hover:bg-gray-100 hover:shadow-lg 
                                rounded-md text-lg font-medium transition duration-300">
                            Get Started
                        </button>

                        <div className="group inline-block">
                            <button className="relative px-6 py-2 rounded-md text-lg font-medium 
                                  text-white border-2 border-white 
                                  overflow-hidden transition duration-300 bg-black">

                                {/* Hover Overlay (top → bottom) */}
                                <span className="absolute inset-0 rounded-md bg-white 
                                    transform -translate-y-full group-hover:translate-y-0 
                                    transition-transform duration-500 ease-out z-0"></span>

                                {/* Text color transition */}
                                <span className="relative z-10 group-hover:text-black">
                                    Learn More
                                </span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={BusinessGrowthimg}
                        alt="Business Growth"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
