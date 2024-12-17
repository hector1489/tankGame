import { useRef, useState } from 'react';

interface TankProps {
  onShoot: () => void;
}

const Tank: React.FC<TankProps> = ({ onShoot }) => {
  const tankRef = useRef<any>(null);
  const [tankPosition, setTankPosition] = useState<[number, number, number]>([0, 0.5, 0]);

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
        <button onClick={onShoot}>Disparar</button>
      </div>
    </>
  );
};

export default Tank;
