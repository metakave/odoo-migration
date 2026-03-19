"use client";

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    THREE: any;
    VANTA: any;
  }
}

export default function VantaClouds2() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return;
    }

    const initVanta = () => {
      if (!vantaEffect && window.VANTA && window.VANTA.CLOUDS2 && vantaRef.current) {
        try {
          const effect = window.VANTA.CLOUDS2({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            texturePath: "/noise.png"
          });
          setVantaEffect(effect);
        } catch (err) {
          console.error("Vanta Clouds2 initialization failed:", err);
        }
      }
    };

    if (window.VANTA && window.VANTA.CLOUDS2) {
      initVanta();
    } else {
      const interval = setInterval(() => {
        if (window.VANTA && window.VANTA.CLOUDS2) {
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
