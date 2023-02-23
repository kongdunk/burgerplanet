import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { Burger } from "./Burger"

export default function BurgerGroup(props) {
    const [item1, setItem1] = useState(0)
    const [item2, setItem2] = useState(0)
    const [item3, setItem3] = useState(0)
    const [item4, setItem4] = useState(0)
    const [item5, setItem5] = useState(0)
    const [item6, setItem6] = useState(0)
    const [groupY, setGroupY] = useState(0)
    const scroll = useScroll()
    const mesh1 = useRef()
    useFrame((state, delta) => {
        mesh1.current.rotation.y += delta
        setItem1(scroll.range(0.02, 1 / 4) * -10 + 9)
        setItem2(scroll.range(0.07, 1 / 4) * -10 + 9)
        setItem3(scroll.range(0.12, 1 / 4) * -10 + 9)
        setItem4(scroll.range(0.17, 1 / 4) * -10 + 9)
        setItem5(scroll.range(0.22, 1 / 4) * -10 + 9)
        setItem6(scroll.range(0.27, 1 / 4) * -10 + 9)

        setGroupY(scroll.range(0.6, 1 / 2) * 10)
    })
    return(
        <>
            <mesh ref={mesh1} position={[0,groupY,0]}>
                <Burger bottomBun={true} position={[0, item1, 0]}/>
                <Burger cheese={true} position={[0, item2, 0]} />
                <Burger patty={true} position={[0, item3, 0]} />
                <Burger tomato={true}  position={[0, item4, 0]} />
                <Burger lettuce={true} position={[0, item5, 0]}/>
                <Burger topBun={true} position={[0, item6, 0]} />
            </mesh>
          
        </>
    )
}