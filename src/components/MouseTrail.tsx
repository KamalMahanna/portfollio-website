import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<Point[]>([]);
  const rafId = useRef<number | undefined>(undefined);
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const maxAge = 20;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new point
      points.current.unshift({
        x: mousePos.current.x,
        y: mousePos.current.y,
        age: 0
      });

      // Update and draw points
      ctx.beginPath();
      points.current = points.current.filter((point: Point) => {
        point.age++;
        if (point.age > maxAge) return false;

        const size = (maxAge - point.age) * 0.1;
        const alpha = 1 - point.age / maxAge;

        ctx.fillStyle = `rgba(109, 40, 217, ${alpha})`; // brand.accent color
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
