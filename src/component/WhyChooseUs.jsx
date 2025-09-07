import { motion } from "framer-motion";
import { FaLightbulb, FaShieldAlt, FaChartLine } from "react-icons/fa";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
            title: "Innovative Solutions",
            description:
                "We deliver creative strategies tailored to help your business stay ahead in a competitive digital landscape.",
        },
        {
            icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
            title: "Trusted Security",
            description:
                "Protecting your digital assets is our priority with strong cybersecurity and proactive monitoring.",
        },
        {
            icon: <FaChartLine className="text-green-400 text-3xl" />,
            title: "Proven Growth",
            description:
                "Our AI-driven marketing ensures measurable growth and better engagement with your customers.",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12 lg:px-20">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-800"
                >
                    Why Choose Our Services?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-4 text-gray-600 max-w-2xl mx-auto"
                >
                    Experience unparalleled support and expertise at every step. We help you grow, secure, and scale your business with confidence.
                </motion.p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
                    >
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
