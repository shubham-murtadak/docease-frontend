import { motion } from "framer-motion";
function SectionSubtitle({ subtitle }) {
  return (
    <motion.p
      initial={{ opacity: 0, translateY: "30px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-secondary-foreground py-4  "
    >
      {subtitle}{" "}
    </motion.p>
  );
}

export default SectionSubtitle;
