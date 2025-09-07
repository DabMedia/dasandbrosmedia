import { motion } from "framer-motion";
import AboutImg from "../assets/aboutimg.png";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl  font-semibold text-gray-900 leading-snug mb-4">
            About Us
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            At <span className="font-semibold text-gray-900">Das and Bros Media Pvt Ltd</span>, 
            we are passionate about helping businesses thrive in the digital age. 
            With innovative marketing strategies, advanced technology, and a 
            client-first approach, we empower brands to reach their full potential.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Our team of experts specializes in growth marketing, cybersecurity, 
            branding, and AI-driven solutions — enabling businesses to stay ahead 
            in an ever-changing landscape. We don’t just deliver services; we build 
            long-term partnerships that drive measurable success.
          </p>

          {/* Key Highlights */}
          <ul className="space-y-3 text-gray-800 font-medium">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
              Trusted by businesses across industries
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
              Expertise in growth marketing & digital transformation
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
              Dedicated team focused on innovation and excellence
            </li>
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={AboutImg}
            alt="About Das and Bros Media"
            className="rounded-2xl shadow-lg w-full md:w-[90%] lg:w-[80%] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
