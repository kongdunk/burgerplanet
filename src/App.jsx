import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, ScrollControls } from '@react-three/drei'
import { Characters } from './components/Characters'
import { Globe } from './components/Globe'
import { Burger } from './components/Burger'

export default function App() {
  const [hoveredB, hoverB] = useState(false)
  const [hoveredU, hoverU] = useState(false)
  const [hoveredR, hoverR] = useState(false)
  const [hoveredG, hoverG] = useState(false)
  const [hoveredE, hoverE] = useState(false)
  const [hoveredRR, hoverRR] = useState(false)
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null
  })

  useEffect(() => {
    function handle(e){
      setMousePosition({
        x: e.pageX,
        y: e.pageY
      })
    }
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  })
  
  
  return (
    <>
    <Canvas  orthographic camera={{ position: [0, 0, 4], left: -6, right: 6, top: 2, bottom: -2, zoom: 100 }}>
      <color attach="background" args={['#414a4c']} />
      {/* SCROLL SCREEN INSIDE CANVAS */}
      <ScrollControls pages={3} damping={0.1}>
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
          <Burger scale={0.2} position={[mousePosition.x/100 - 6.7, -mousePosition.y/100 + 3,0]}/>

          </ScrollControls>
    </Canvas>
    </>
  )
}
