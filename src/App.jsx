import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei'
import { Characters } from './components/Characters'
import { Globe } from './components/Globe'
import { Burger } from './components/Burger'
import BurgerText from './components/BurgerText'
import BurgerGroup from './components/BurgerGroup'
import { Physics, useBox } from '@react-three/cannon'
import { BurgerMake } from './components/BurgerMake'

export default function App() {
  // textHoverState
  const [hoveredB, hoverB] = useState(false)

  const [pattyShow, setPattyShow] = useState(false)
  const [bottomBunShow, setBottomBunShow] = useState(false)
  const [topBunShow, setTopBunShow] = useState(false)
  const [lettuceShow, setLettuceShow] = useState(false)
  const [cheeseShow, setCheeseShow] = useState(false)
  const [tomatoShow, setTomatoShow] = useState(false)

  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null
  })
  const data = useScroll()

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
    <Canvas id='canvas' orthographic camera={{ position: [0, 0, 4], left: -6, right: 6, top: 2, bottom: -2, zoom: 100 }}>
      <color attach="background" args={['#414a4c']} />
      {/* SCROLL SCREEN INSIDE CANVAS */}
      <ScrollControls pages={30} damping={0.3}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh scale={1}>
          <BurgerText hover={hoverB} hovered={hoveredB}/>
          <Globe position={[0,-0.7,-10]}/>
          </mesh>
          <Burger scale={0.2} position={[mousePosition.x/100 - 6.7, -mousePosition.y/100 + 3,0]}/>
          <BurgerGroup/>
          <BurgerMake pattyShow={pattyShow} bottomBunShow={bottomBunShow} topBunShow={topBunShow} cheeseShow={cheeseShow} lettuceShow={lettuceShow} tomatoShow={tomatoShow} />
          </ScrollControls>
    </Canvas>
    <button onClick={() => setPattyShow(true)}> show smt </button>
    <button onClick={() => setBottomBunShow(true)}> show smt </button>
    <button onClick={() => setTopBunShow(true)}> show smt </button>
    <button onClick={() => setCheeseShow(true)}> show smt </button>
    <button onClick={() => setLettuceShow(true)}> show smt </button>
    <button onClick={() => setTomatoShow(true)}> show smt </button>
    <button onClick={() => {
      setPattyShow(false)
      setBottomBunShow(false)
      setTopBunShow(false)
      setCheeseShow(false)
      setLettuceShow(false)
      setTomatoShow(false)
    }}> reset </button>
    
    </>
  )
}
