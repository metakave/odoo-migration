"use client";

import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        
        // Configuration
        const particles: Particle[] = [];
        const baseParticleCount = 80;
        const connectionDistance = 150;
        
        // Colors from brand theme (Primary/Purple)
        const primaryColor = '139, 92, 246'; // #8b5cf6
        const secondaryColor = '168, 85, 247'; // #a855f7
        
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            
            constructor(width: number, height: number) {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.radius = Math.random() * 2 + 1;
            }
            
            update(width: number, height: number) {
                this.x += this.vx;
                this.y += this.vy;
                
                // Wrap around edges for seamless flow (metaphor for data continuity)
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }
            
            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${primaryColor}, 0.5)`;
                ctx.fill();
            }
        }
        
        const resize = () => {
             const parent = canvas.parentElement;
             if (parent) {
                 canvas.width = parent.clientWidth;
                 canvas.height = parent.clientHeight;
             }
        };

        const init = () => {
            resize();
            particles.length = 0;
            // Scale dynamically to viewport area
            const count = Math.min(baseParticleCount, Math.floor((canvas.width * canvas.height) / 15000));
            for (let i = 0; i < count; i++) {
                particles.push(new Particle(canvas.width, canvas.height));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles / networking layout
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(canvas.width, canvas.height);
                particles[i].draw(ctx);
                
                // Connect proximity data nodes
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < connectionDistance) {
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        // Draw connecting lines 
                        ctx.strokeStyle = `rgba(${secondaryColor}, ${opacity * 0.4})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }
            
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', () => {
            resize();
        });
        
        setTimeout(() => {
             init();
             animate();
        }, 50);
        
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: 0.9
            }} 
        />
    );
}
