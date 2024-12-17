import { useRef, useState } from 'react';
import * as THREE from 'three';

interface TankProps {
  onShoot: () => void;
  onMove: (direction: THREE.Vector3) => void;
}

const Tank: React.FC<TankProps> = ({ onShoot, onMove }) => {
  const tankRef = useRef<THREE.Mesh>(null);
  const [tankColor, setTankColor] = useState('green');

  // Maneja el disparo
  const handleShoot = () => {
    onShoot();
    setTankColor('red');
    setTimeout(() => setTankColor('green'), 200);
  };

  // Maneja el movimiento del tanque
  const handleMove = (direction: THREE.Vector3) => {
    onMove(direction);
  };

  return (
    <>
      <mesh ref={tankRef} position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 1, 4]} />
        <meshStandardMaterial color={tankColor} />
      </mesh>

      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1 }}>
        <button onClick={() => handleMove(new THREE.Vector3(-1, 0, 0))}>Izquierda</button>
        <button onClick={() => handleMove(new THREE.Vector3(1, 0, 0))}>Derecha</button>
        <button onClick={() => handleMove(new THREE.Vector3(0, 0, -1))}>Adelante</button>
        <button onClick={() => handleMove(new THREE.Vector3(0, 0, 1))}>Atrás</button>
        <button onClick={handleShoot}>Disparar</button>
      </div>
    </>
  );
};

export default Tank;
