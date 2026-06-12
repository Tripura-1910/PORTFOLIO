import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import RoboModel from "../models/friendBot";

const messages = [
  "Hey there 👋",
  "Check out my AI projects!",
  "Need a custom website?",
  "Scroll down for surprises 🚀",
  "Want an AI-powered business solution?",
  "Let's build something amazing!",
];

export default function RobotGuide() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const spawnRobot = () => {
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      setMessage(randomMessage);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 8000);
    };

    spawnRobot();

    const interval = setInterval(() => {
      spawnRobot();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="
          fixed
          bottom-5
          left-0
          z-[99999]
          pointer-events-none
          "
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={{
            x: window.innerWidth - 350,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            y: -100,
            scale: 0.5,
          }}
          transition={{
            duration: 7,
            ease: "linear",
          }}
        >
          {/* Speech Bubble */}

          <motion.div
            className="
            absolute
            bottom-full
            left-1/2
            -translate-x-1/2
            mb-3
            px-4
            py-2
            rounded-xl
            bg-black/90
            border
            border-cyan-500/30
            text-cyan-300
            text-sm
            whitespace-nowrap
            "
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            {message}
          </motion.div>

          {/* Jump */}

          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
            }}
          >
            <div className="w-[160px] h-[160px]">
              <Canvas
                camera={{
                  position: [0, 0, 4],
                  fov: 35,
                }}
              >
                <ambientLight intensity={3} />

                <directionalLight
                  position={[5, 5, 5]}
                  intensity={3}
                />

                <Environment preset="city" />

                <RoboModel />
              </Canvas>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}