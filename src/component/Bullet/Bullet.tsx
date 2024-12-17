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
      requestAnimationFrame(moveBullet); // Llamamos a requestAnimationFrame para que se actualice de forma continua
    };
    moveBullet(); // Iniciamos la animación

    return () => cancelAnimationFrame(moveBullet as any); // Limpiamos el intervalo cuando el componente se desmonta
  }, [direction]);

  return (
    <mesh ref={bulletRef} position={position}>
      <sphereGeometry args={[0.2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default Bullet;
