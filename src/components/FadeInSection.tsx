import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
}

const FadeInSection = ({ children }: FadeInSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
