import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SelectionCardProps {
  icon: LucideIcon;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const SelectionCard = ({ icon: Icon, label, isSelected, onClick }: SelectionCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`glass-card p-6 rounded-2xl transition-all ${
        isSelected
          ? "border-2 border-primary glow-primary bg-primary/10"
          : "border border-border hover:border-primary/50"
      }`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="flex flex-col items-center gap-3"
      >
        <Icon
          className={`w-8 h-8 ${
            isSelected ? "text-primary" : "text-muted-foreground"
          }`}
        />
        <span
          className={`text-sm font-medium ${
            isSelected ? "text-primary" : "text-foreground"
          }`}
        >
          {label}
        </span>
      </motion.div>
    </motion.button>
  );
};
