import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Soundwave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-1 bg-gradient-to-t from-primary to-transparent"
            style={{ left: `${(i / 50) * 100}%` }}
            animate={{
              height: ["20px", `${Math.random() * 100 + 20}px`, "20px"],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};
