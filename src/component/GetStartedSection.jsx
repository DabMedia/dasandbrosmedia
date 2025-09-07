import { motion } from "framer-motion";
import CustomButton from "./CustomButton";

const GetStartedSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 via-purple-50 to-blue-50 py-16 px-6 md:px-12 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_50%)]"></div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Get Started Today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Join us and elevate your business to new heights.
        </motion.p>

        <CustomButton 
          text="Get Started"
          className="px-8 py-3 bg-white text-black rounded-md shadow-lg border border-black 
                     hover:bg-gradient-to-b hover:from-black hover:to-gray-800 hover:text-white transition duration-300"
        />
      </div>
    </section>
  );
};

export default GetStartedSection;
