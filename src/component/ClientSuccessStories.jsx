import { motion } from "framer-motion";

const ClientSuccessStories = () => {
  const stories = [
    {
      logo: "https://via.placeholder.com/80", // replace with client logo
      name: "TechNova Solutions",
      feedback:
        "With their marketing expertise, we saw a 150% increase in qualified leads within 3 months. Truly game-changing!",
      person: "Amit Sharma, CEO",
    },
    {
      logo: "https://via.placeholder.com/80",
      name: "SecureNet Pvt Ltd",
      feedback:
        "Their cybersecurity strategies gave us peace of mind and full compliance. Highly professional team.",
      person: "Neha Patel, CTO",
    },
    {
      logo: "https://via.placeholder.com/80",
      name: "GlobalReach Media",
      feedback:
        "The website and app they built for us skyrocketed our user engagement. Our clients love the new experience.",
      person: "Rahul Verma, Founder",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Client Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-300 max-w-2xl mx-auto"
        >
          See how we've transformed businesses like yours.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={story.logo}
                alt={story.name}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {story.name}
              </h3>
            </div>
            <p className="text-gray-600 italic mb-4">"{story.feedback}"</p>
            <p className="text-sm font-medium text-gray-500">{story.person}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientSuccessStories;
