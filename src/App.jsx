import { useRef, useState } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { Environment } from '@react-three/drei'
import { Characters } from './components/Characters'
import { Globe } from './components/Globe'

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
        
    </mesh>
  </>
  )
}

export default function App() {
  const [hoveredB, hoverB] = useState(false)
  const [hoveredU, hoverU] = useState(false)
  const [hoveredR, hoverR] = useState(false)
  const [hoveredG, hoverG] = useState(false)
  const [hoveredE, hoverE] = useState(false)
  const [hoveredRR, hoverRR] = useState(false)
  return (
    <Canvas  orthographic camera={{ position: [0, 0, 4], left: -6, right: 6, top: 2, bottom: -2, zoom: 100 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
          <Characters hover={hoverB} hovered={hoveredB} position={[-2.5, 1, 0]} char={'B'} />
          <Characters hover={hoverU} hovered={hoveredU} position={[-1.5, 1, 0]} char={'U'} />
          <Characters hover={hoverR} hovered={hoveredR} position={[-0.5, 1, 0]} char={'R'} />
          <Characters hover={hoverG} hovered={hoveredG} position={[0.5, 1, 0]} char={'G'} />
          <Characters hover={hoverE} hovered={hoveredE} position={[1.5, 1, 0]} char={'E'} />
          <Characters hover={hoverRR} hovered={hoveredRR} position={[2.5, 1, 0]} char={'R'} />
           
          <Characters hover={hoverB} hovered={hoveredB} position={[-2.5, -0.5, 0]} char={'P'} />
          <Characters hover={hoverU} hovered={hoveredU} position={[-1.5, -0.5, 0]} char={'L'} />
          <Characters hover={hoverR} hovered={hoveredR} position={[-0.5, -0.5, 0]} char={'A'} />
          <Characters hover={hoverG} hovered={hoveredG} position={[0.5, -0.5, 0]} char={'N'} />
          <Characters hover={hoverE} hovered={hoveredE} position={[1.5, -0.5, 0]} char={'E'} />
          <Characters hover={hoverRR} hovered={hoveredRR} position={[2.5, -0.5, 0]} char={'T'} />
          <Globe position={[0,-0.7,-10]}/>
          <OrbitControls/>
    </Canvas>
  )
}
