import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import CustomButton from "./CustomButton";
import Empoweringimg from "../assets/Empowering.jpg";  // ✅ fixed
import { Link } from "react-router-dom"; 
const GrowthBusiness = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-12">

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Empower Your Business
            to Reach New Heights
          </h2>

          <p className="text-gray-700 text-lg">
            At Das and Bros Media, we specialize in driving growth through
            innovative marketing strategies. From cybersecurity to AI-powered
            marketing, we ensure your business thrives in the digital landscape.
          </p>

          <div className="space-y-4">
            {[
              "Growth Marketing that Scales Your Business Effectively",
              "Robust Cybersecurity to Protect Your Digital Assets",
              "AI-Powered Marketing for Targeted Customer Engagement",
            ].map((item, index) => (
              <motion.p
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-gray-800 text-lg"
              >
                <FaCheckCircle className="text-blue-600 text-xl" />
                {item}
              </motion.p>
            ))}
          </div>

          <Link to="/about">
            <CustomButton
              text="Learn More"
              className="text-black shadow-lg border border-black bg-transparent 
                         hover:bg-white hover:text-black text-lg"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={Empoweringimg}
            alt="Business Growth"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthBusiness;
