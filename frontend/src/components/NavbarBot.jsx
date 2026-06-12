import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import RobotModel from "../models/RoboModel";

export default function NavbarRobot({
  visible,
  left,
  message,
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 60,
            scale: 0.5,
          }}
          transition={{
            duration: 0.35,
          }}
          style={{
            left: `${left}px`,
          }}
          className="
          absolute
          top-full
          mt-4
          z-[9999]
          pointer-events-none
          "
        >
          {/* Message */}
          <div
            className="
            mb-2
            px-3
            py-2
            rounded-xl
            bg-black/90
            border
            border-cyan-500/30
            text-cyan-300
            text-xs
            whitespace-nowrap
            -translate-x-1/2
            "
          >
            {message}
          </div>

          {/* Robot */}
          <div
            className="
            w-[220px]
            h-[220px]
            -translate-x-1/2
            "
          >
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

              <RobotModel />
            </Canvas>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}