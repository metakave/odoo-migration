"use client";

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    three: any;
    VANTA: any;
  }
}

export default function VantaGlobe() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    const initVanta = () => {
      if (!vantaEffect && window.VANTA && window.VANTA.GLOBE && vantaRef.current) {
        try {
          const effect = window.VANTA.GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x0f172a
          });
          setVantaEffect(effect);
        } catch (err) {
          console.error("Vanta initialization failed:", err);
        }
      }
    };

    // Check if scripts are already loaded, otherwise wait or set a small timeout
    if (window.VANTA && window.VANTA.GLOBE) {
      initVanta();
    } else {
      const interval = setInterval(() => {
        if (window.VANTA && window.VANTA.GLOBE) {
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
        zIndex: -1,
        opacity: 1
      }} 
    />
  );
}
