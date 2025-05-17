'use client';

import { useEffect, useRef } from 'react';

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minRadius?: number;
  maxRadius?: number;
}

export default function StarBackground({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1.0,
  minOpacity = 1,
  maxOpacity = 2.0,
  minRadius = 0.2,
  maxRadius = 0.9
}: StarBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<any[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setupCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      generateStars(width, height);
    };

    const generateStars = (width: number, height: number) => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      
      starsRef.current = Array.from({ length: numStars }, () => {
        const shouldTwinkle = 
          allStarsTwinkle || 
          Math.random() < twinkleProbability;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: minRadius + Math.random() * (maxRadius - minRadius),
          opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null
        };
      });
    };

    const startAnimation = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        starsRef.current.forEach(star => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();

          if (star.twinkleSpeed !== null) {
            star.opacity = 
              minOpacity + 
              Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * (maxOpacity - minOpacity));
          }
        });

        animationFrameIdRef.current = requestAnimationFrame(render);
      };

      render();
    };

    setupCanvas();
    startAnimation();

    const resizeObserver = new ResizeObserver(() => {
      setupCanvas();
    });
    
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
    minOpacity,
    maxOpacity,
    minRadius,
    maxRadius
  ]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
    />
  );
}