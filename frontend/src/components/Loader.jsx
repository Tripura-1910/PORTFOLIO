import React, { useEffect, useState } from "react";
import Loader3DScene from "./Loader3D";


const Loader = ({ onComplete }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);

      setTimeout(() => {
        onComplete();
      }, 1000);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`
      fixed inset-0 z-[9999]
      bg-black
      transition-all duration-1000
      ${hide ? "opacity-0 scale-110" : "opacity-100"}
      `}
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[1000px] h-[1000px] bg-blue-500/10 blur-[250px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* 3D Jarvis Core */}
      <div className="absolute inset-0">
        <Loader3DScene />
      </div>

      {/* HUD Text */}
    {/* Center HUD */}
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

  <div
    className="
    px-8
    py-3
    rounded-full
    border
    border-cyan-500/30
    bg-cyan-500/5
    backdrop-blur-xl
    "
  >
    <span className="text-white tracking-[6px] text-sm">
      INITIALIZING
    </span>
  </div>

  <h1
    className="
    mt-8
    text-7xl
    lg:text-9xl
    font-black
    tracking-[12px]
    text-white
    "
  >
    WELCOME
  </h1>

  <div
    className="
    mt-4
    h-[2px]
    w-64
    bg-gradient-to-r
    from-transparent
    via-cyan-500
    to-transparent
    "
  />

  <p
    className="
    mt-6
    font-bold
    text-white
    tracking-[8px]
    uppercase
    text-sm
    "
  >
    • Full Stack Developer •
  </p>

</div>
    </div>
  );
};

export default Loader;