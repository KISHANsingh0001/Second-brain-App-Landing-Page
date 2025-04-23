import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: string | number | boolean | React.ReactNode | undefined;
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};
export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
}: MarqueeProps) {
  return (
      <motion.div
             custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
      className="group flex overflow-hidden p-2 gap-3"
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="flex shrink-0 justify-around gap-4"
          >
            {children}
          </div>
        ))}
    </motion.div> 
  );
}
