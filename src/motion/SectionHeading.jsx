import { motion } from "framer-motion";
function SectionHeading({ title, highlight }) {
  return (
    <motion.h2
      initial={{ opacity: 0, translateY: "30px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-semibold text-4xl text-primary text-center"
    >
      {title} {highlight && <span className="text-blue-600">{highlight}</span>}
    </motion.h2>
  );
}

export default SectionHeading;
