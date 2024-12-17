import React, { useState, useEffect, useRef } from 'react';

interface BulletProps {
  startPosition: [number, number, number];
  direction: [number, number, number];
}

const Bullet: React.FC<BulletProps> = ({ startPosition, direction }) => {
  const bulletRef = useRef<any>(null);
  const [position, setPosition] = useState(startPosition);

  // Usamos useEffect para animar el proyectil
  useEffect(() => {
    const moveBullet = () => {
      setPosition((prevPos) => [
        prevPos[0] + direction[0],
        prevPos[1] + direction[1],
        prevPos[2] + direction[2],
      ]);
      requestAnimationFrame(moveBullet);
    };
    moveBullet();

    return () => cancelAnimationFrame(moveBullet as any);
  }, [direction]);

  return (
    <mesh ref={bulletRef} position={position}>
      <sphereGeometry args={[0.2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Bullet;
