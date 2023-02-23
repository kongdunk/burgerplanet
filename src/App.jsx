import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { Html, OrbitControls, PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei'
import { Characters } from './components/Characters'
import { Globe } from './components/Globe'
import { Burger } from './components/Burger'
import BurgerText from './components/BurgerText'
import BurgerGroup from './components/BurgerGroup'
import { BurgerMake } from './components/BurgerMake'
import BurgerButtons from './components/BurgerButtons'
import './App.css';
import { Ufo } from './components/Ufo'

export default function App() {
  // textHoverState
  const [hoveredB, hoverB] = useState([false, false])

  const [pattyShow, setPattyShow] = useState([false, false])
  const [bottomBunShow, setBottomBunShow] = useState([false, false])
  const [topBunShow, setTopBunShow] = useState([false, false])
  const [lettuceShow, setLettuceShow] = useState([false, false])
  const [cheeseShow, setCheeseShow] = useState([false, false])
  const [tomatoShow, setTomatoShow] = useState([false, false])

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
      <ScrollControls pages={10} damping={0.3}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh scale={1}>
          <BurgerText hover={hoverB} hovered={hoveredB}/>
          <Globe position={[0,-0.7,-10]}/>
          </mesh>
          {/* model following cursor
          <Ufo scale={0.15} position={[mousePosition.x/100 - 6.7, -mousePosition.y/100 + 3,0]}/>
          */}
          <BurgerGroup/>
          <BurgerMake pattyShow={pattyShow} bottomBunShow={bottomBunShow} topBunShow={topBunShow} cheeseShow={cheeseShow} lettuceShow={lettuceShow} tomatoShow={tomatoShow} />
          <Html style={{top: '750vh'}} fullscreen>
            <h1>
              make
            </h1>
          </Html>
                    <Html style={{top: '820vh'}} fullscreen>
            <h1>
              your
            </h1>
          </Html>
          <Html style={{top: '890vh'}} fullscreen>
            <h1>
              own
            </h1>
          </Html>
          <Html style={{top: '940vh'}} fullscreen>
            <h1>
              burger
            </h1>
          </Html>
          <BurgerButtons 
            pattyShow={pattyShow} setPattyShow={setPattyShow}
            bottomBunShow={bottomBunShow} setBottomBunShow={setBottomBunShow}
            topBunShow={topBunShow} setTopBunShow={setTopBunShow}
            lettuceShow={lettuceShow} setLettuceShow={setLettuceShow}
            cheeseShow={cheeseShow} setCheeseShow={setCheeseShow}
            tomatoShow={tomatoShow} setTomatoShow={setTomatoShow}
          />
          </ScrollControls>
    </Canvas>
    </>
  )
}
