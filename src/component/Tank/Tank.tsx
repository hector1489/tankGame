import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface TankProps {
  onShoot: () => void; // Recibimos la función onShoot como prop
}

const Tank: React.FC<TankProps> = ({ onShoot }) => {
  const tankRef = useRef<any>(null);
  const [tankPosition, setTankPosition] = useState([0, 0.5, 0]);

  const moveTank = (dx: number, dy: number, dz: number) => {
    setTankPosition([tankPosition[0] + dx, tankPosition[1], tankPosition[2] + dz]);
  };

  return (
    <>
      <mesh ref={tankRef} position={tankPosition}>
        <boxGeometry args={[2, 1, 4]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <div>
        <button onClick={() => moveTank(-1, 0, 0)}>Izquierda</button>
        <button onClick={() => moveTank(1, 0, 0)}>Derecha</button>
        <button onClick={() => moveTank(0, 0, -1)}>Adelante</button>
        <button onClick={() => moveTank(0, 0, 1)}>Atrás</button>
        <button onClick={onShoot}>Disparar</button> {/* Botón para disparar */}
      </div>
    </>
  );
};

export default Tank;
