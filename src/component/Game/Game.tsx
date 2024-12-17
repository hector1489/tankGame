import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Bullet from '../Bullet/Bullet';
import Tank from '../Tank/Tank';
import * as THREE from 'three';

const Game: React.FC = () => {
  const [bullets, setBullets] = useState<{ startPosition: [number, number, number], direction: [number, number, number] }[]>([]);
  const [tankPosition, setTankPosition] = useState<[number, number, number]>([0, 0.5, 0]);

  // Función para disparar
  const shootBullet = () => {
    setBullets([
      ...bullets,
      { startPosition: [0, 0.5, 0], direction: [0, 0, -1] },
    ]);
  };

  // Función para mover el tanque
  const moveTank = (direction: THREE.Vector3) => {
    setTankPosition([tankPosition[0] + direction.x, tankPosition[1], tankPosition[2] + direction.z]);
  };

  return (
    <>
      <Canvas camera={{ position: [10, 10, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} />

        <Tank onShoot={shootBullet} onMove={moveTank} />
        {bullets.map((bullet, index) => (
          <Bullet key={index} startPosition={bullet.startPosition} direction={bullet.direction} />
        ))}
        <OrbitControls />
      </Canvas>

      <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1 }}>
        <button onClick={() => moveTank(new THREE.Vector3(-1, 0, 0))}>Izquierda</button>
        <button onClick={() => moveTank(new THREE.Vector3(1, 0, 0))}>Derecha</button>
        <button onClick={() => moveTank(new THREE.Vector3(0, 0, -1))}>Adelante</button>
        <button onClick={() => moveTank(new THREE.Vector3(0, 0, 1))}>Atrás</button>
        <button onClick={shootBullet}>Disparar</button>
      </div>
    </>
  );
};

export default Game;
