import { motion } from "framer-motion";

const CustomButton = ({ text, className = "", ...props }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
            className={`px-6 py-2 rounded-md font-medium transition duration-300 ${className}`}
        >
            {text}
        </motion.button>
    );
};

export default CustomButton;
