import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
function MotionButton({ title }) {
  return (
    <motion.span
      initial={{ opacity: 0, translateY: "20px" }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
    >
      <Button className="bg-muted" variant="outline">
        {title}
      </Button>
    </motion.span>
  );
}

export default MotionButton;
