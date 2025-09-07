import React from "react";
import { motion } from "framer-motion"; // ✅ import motion
import Businessimg from "../assets/businessimg.webp";
import Development from "../assets/Development.jpg";
import Digitalmarketing from "../assets/digitalmarketing.webp";

const blogs = [
  {
    id: 1,
    title: "The Future of Digital Marketing",
    description:
      "Explore the latest trends in SEO, social media, and AI-driven campaigns that are shaping the future of digital marketing.",
    image: Digitalmarketing,
    author: "John Doe",
    date: "Sep 5, 2025",
  },
  {
    id: 2,
    title: "Why Every Business Needs a Strong Brand Identity",
    description:
      "Learn how building a unique brand identity helps businesses stand out in a competitive marketplace.",
    image: Businessimg,
    author: "Sarah Smith",
    date: "Aug 28, 2025",
  },
  {
    id: 3,
    title: "Web Development Best Practices in 2025",
    description:
      "From performance optimization to responsive UI, discover key practices for modern web development.",
    image: Development,
    author: "Michael Lee",
    date: "Aug 15, 2025",
  },
];

const BlogPage = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12 lg:px-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Our Blog
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Insights, stories, and tips to help you grow your business in the digital era.
        </motion.p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{blog.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>✍️ {blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
