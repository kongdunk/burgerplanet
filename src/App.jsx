import { useRef, useState } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Text from './components/text'
import Model from './components/Model'
import { Suspense } from 'react'
import { Environment } from '@react-three/drei'

function Box(props) {
  
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  </>
  )
}

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <group position={[0,0,2]}> <cameraHelper args={[camera]} /></group>
}

export default function App() {
  return (
    <Canvas  orthographic camera={{ position: [0, 0, 2], left: -2, right: 2, top: 2, bottom: -2, zoom: 100 }}>
          <Model />
          <OrbitControls/>
    </Canvas>
  )
}
