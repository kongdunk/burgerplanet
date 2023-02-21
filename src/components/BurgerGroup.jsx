import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
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
    useFrame((state, delta) => {
        setItem1(scroll.range(0, 1 / 9) * 10 -10)
        setItem2(scroll.range(0.25, 1 / 9) * 10 -10)
        setItem3(scroll.range(0.35, 1 / 9) * 10 -10)
        setItem4(scroll.range(0.45, 1 / 9) * 10 -10)
        setItem5(scroll.range(0.55, 1 / 9) * 10 -10)
        setItem6(scroll.range(0.65, 1 / 9) * 10 -10)

        setGroupY(scroll.range(0.85, 1 / 9) * 10)
    })
    return(
        <>
            <group position={[0,groupY,0]}>
                <Burger bottomBun={true} position={[item1, 0, 0]}/>
                <Burger cheese={true} position={[item2, 0, 0]} />
                <Burger patty={true} position={[item3, 0, 0]} />
                <Burger tomato={true}  position={[item4, 0, 0]} />
                <Burger lettuce={true} position={[item5, 0, 0]}/>
                <Burger topBun={true} position={[item6, 0, 0]} />
            </group>
          
        </>
    )
}