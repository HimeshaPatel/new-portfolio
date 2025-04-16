import React, { useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "styled-components";

const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  const theme = useTheme();

  const colorScheme = useMemo(() => {
    if (theme.bg === "#FFFFFF") {
      return {
        color1: "#be1adb",
        color2: "#0046d1",
        opacity1: 0.8,  // Increased from 0.5
        opacity2: 0.7,  // Increased from 0.4
      };
    } else {
      return {
        color1: "#f272c8",
        color2: "#854CE6",
        opacity1: 1,
        opacity2: 0.8,
      };
    }
  }, [theme]);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={colorScheme.color1}
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={colorScheme.opacity1}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const theme = useTheme();
  
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 0,
      background: theme.bg === "#FFFFFF" 
        ? 'linear-gradient(180deg, rgba(190,26,219,0.25) 0%, rgba(0,70,209,0.25) 100%)'  // Increased opacity from 0.15
        : 'linear-gradient(180deg, rgba(242,114,200,0.2) 0%, rgba(133,76,230,0.2) 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
