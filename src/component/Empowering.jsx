import { motion } from "framer-motion";
import Empoweringimg from "../assets/Empowering.jpg"
export default function Empowering() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={Empoweringimg}
            alt="Empowering"
            className="rounded-2xl shadow-xl w-full object-cover"
          />

          {/* Floating animation shapes */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-6 left-6 w-12 h-12 bg-purple-500 rounded-full opacity-30 blur-lg"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-8 right-8 w-16 h-16 bg-blue-500 rounded-full opacity-30 blur-lg"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Empowering businesses through innovative marketing and transformative digital solutions.
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            At <span className="font-semibold text-gray-800">Das and Bros Media Pvt Ltd</span>, our mission is to drive growth and success for our clients through cutting-edge strategies and technology. We envision a future where every business can harness the power of digital transformation to achieve their goals.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-gray-800 text-gray-800 font-semibold shadow-md hover:bg-black hover:text-white transition duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
