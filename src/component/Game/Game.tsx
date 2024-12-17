import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Bullet from '../Bullet/Bullet';
import Tank from '../Tank/Tank';

const Game: React.FC = () => {
  const [bullets, setBullets] = useState<{ startPosition: [number, number, number], direction: [number, number, number] }[]>([]);

  const shootBullet = () => {
    setBullets([
      ...bullets,
      { startPosition: [0, 0.5, 0], direction: [0, 0, -1] },
    ]);
  };

  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} />
      <Tank onShoot={shootBullet} />
      {bullets.map((bullet, index) => (
        <Bullet key={index} startPosition={bullet.startPosition} direction={bullet.direction} />
      ))}
      <OrbitControls />
    </Canvas>
  );
};

export default Game;
