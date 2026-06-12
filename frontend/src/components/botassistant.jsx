import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import NavDrone from "./NavDrone";

export default function NavAssistant({
  visible,
  message,
  left,
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.7,
          }}
          transition={{
            duration: 0.4,
          }}
          style={{
            left,
          }}
          className="
          absolute
          top-20
          z-[9999]
          pointer-events-none
          "
        >
          <div className="relative">
            
            {/* Bubble */}
            <div
              className="
              absolute
              left-20
              top-0
              px-4
              py-2
              rounded-xl
              bg-black/80
              border
              border-cyan-500/30
              text-cyan-300
              whitespace-nowrap
              "
            >
              {message}
            </div>

            {/* Drone */}
            <div className="w-20 h-20">
              <Canvas camera={{ position: [0, 0, 3] }}>
                <ambientLight intensity={2} />
                <NavDrone />
              </Canvas>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}