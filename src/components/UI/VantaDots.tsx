"use client";

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    THREE: any;
    VANTA: any;
  }
}

export default function VantaDots() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const initVanta = () => {
      if (!vantaEffect && window.VANTA && window.VANTA.DOTS && vantaRef.current) {
        try {
          const effect = window.VANTA.DOTS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x8b5cf6, // --primary-500
            color2: 0x10b981, // --accent-emerald
            backgroundColor: 0x0f172a, // Matches Dark Theme Background
            size: 3.00,
            spacing: 35.00,
            showLines: false
          });
          setVantaEffect(effect);
        } catch (err) {
          console.error("Vanta Dots initialization failed:", err);
        }
      }
    };

    if (window.VANTA && window.VANTA.DOTS) {
      initVanta();
    } else {
      const interval = setInterval(() => {
        if (window.VANTA && window.VANTA.DOTS) {
          initVanta();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }} 
    />
  );
}
