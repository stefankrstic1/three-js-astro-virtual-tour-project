import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

type TourViewerProps = {
  image: string
}

export default function TourViewer({ image }: TourViewerProps) {
  const texture = useLoader(THREE.TextureLoader, image) as THREE.Texture
 
  return (
    <Canvas>
      <mesh>
        <sphereGeometry args={[5, 60, 40]} />
        <meshBasicMaterial 
          map={texture}
          side={THREE.BackSide}
        />
      </mesh>

      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
