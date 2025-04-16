import * as THREE from 'three';

// Configure Three.js globally
THREE.ColorManagement.enabled = true;

// Export any Three.js configurations you might need
export const defaultCamera = {
  fov: 75,
  near: 0.1,
  far: 1000,
  position: [0, 0, 1]
};