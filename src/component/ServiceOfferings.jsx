import { motion } from "framer-motion";
import { FaBullhorn, FaPenNib, FaChartLine, FaGlobe, FaMobileAlt, FaUsers } from "react-icons/fa";

const ServiceOfferings = () => {
    const services = [
        {
            icon: <FaBullhorn className="text-pink-500 text-3xl" />,
            title: "Growth Marketing",
            description: "Boost your brand presence and reach the right audience with our data-driven strategies.",
        },
        {
            icon: <FaPenNib className="text-purple-500 text-3xl" />,
            title: "Content Creator",
            description: "Craft engaging videos, graphics, and stories that captivate your audience and build your brand identity.",
        },
        {
            icon: <FaChartLine className="text-green-500 text-3xl" />,
            title: "Business Analytics",
            description: "Turn data into actionable insights to maximize efficiency and drive growth.",
        },
        {
            icon: <FaGlobe className="text-purple-500 text-3xl" />,
            title: "Web Development",
            description: "Modern, scalable, and responsive websites tailored to your business needs.",
        },
        {
            icon: <FaMobileAlt className="text-orange-500 text-3xl" />,
            title: "App Development",
            description: "Deliver seamless mobile experiences for Android and iOS users.",
        },
        {
            icon: <FaUsers className="text-teal-500 text-3xl" />,
            title: "Consulting Services",
            description: "Expert advice to streamline operations and achieve sustainable success.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-800"
                >
                    Our Comprehensive Service Offerings
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-4 text-gray-600 max-w-2xl mx-auto"
                >
                    From growth marketing to cybersecurity, we cover it all.
                </motion.p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServiceOfferings;
