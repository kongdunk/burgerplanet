import { Html, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"

export default function BurgerButtons(props){
    const scroll = useScroll( )
    const [burgerY, setBurgerY] = useState(0)

    useFrame((state, delta) => {
  //    mesh.current.rotation.y += r1/10
      setBurgerY(scroll.range(0, 1 / 2) * 10 )
    })


    return(
    <Html style={{top: '1000vh'}} fullscreen>
    <div className="buttonContainer">
      <button 
        onClick={() => { props.pattyShow[0] === true ? props.setPattyShow([true, true]) : props.setPattyShow([true, false])}}
      > 
        add patty 
      </button>

      <button 
        onClick={() => { props.topBunShow[0] === true ? props.setTopBunShow([true, true]) : props.setTopBunShow([true, false])}}
      > 
        add top bun 
      </button>

      <button 
        onClick={() => { props.bottomBunShow[0] === true ? props.setBottomBunShow([true, true]) : props.setBottomBunShow([true, false])}}
      > 
        add bottom bun 
      </button>
      
      <button 
        onClick={() => { props.lettuceShow[0] === true ? props.setLettuceShow([true, true]) : props.setLettuceShow([true, false])}}
      > 
        add lettuce 
      </button>

      <button 
        onClick={() => { props.cheeseShow[0] === true ? props.setCheeseShow([true, true]) : props.setCheeseShow([true, false])}}
      > 
        add cheese 
      </button>

      <button 
        onClick={() => { props.tomatoShow[0] === true ? props.setTomatoShow([true, true]) : props.setTomatoShow([true, false])}}
      > 
        add tomato 
      </button>
      
      <button onClick={() => {
        props.setPattyShow(false)
        props.setBottomBunShow(false)
        props.setTopBunShow(false)
        props.setCheeseShow(false)
        props.setLettuceShow(false)
        props.setTomatoShow(false)
      }}> 
        Reset 
      </button>
    </div>
    </Html>
    )
}