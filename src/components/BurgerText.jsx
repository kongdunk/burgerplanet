import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import { Characters } from "./Characters"


export default function BurgerText(props) {
    const [globeY, setGlobeY] = useState(0)
      const scroll = useScroll()
    useFrame((state, delta) => {
        setGlobeY(scroll.range(0, 2 / 5) * 10 + 1)
    })
    return(
        <>
        <Characters position={[-2.5, globeY, 0]} char={'B'} />
        <Characters position={[-1.5, globeY, 0]} char={'U'} />
        <Characters position={[-0.5, globeY, 0]} char={'R'} />
        <Characters position={[0.5, globeY, 0]} char={'G'} />
        <Characters position={[1.5, globeY, 0]} char={'E'} />
        <Characters position={[2.5, globeY, 0]} char={'R'} />

        <Characters position={[-2.5, globeY-1.5, 0]} char={'P'} />
        <Characters position={[-1.5, globeY-1.5, 0]} char={'L'} />
        <Characters position={[-0.5, globeY-1.5, 0]} char={'A'} />
        <Characters position={[0.5, globeY-1.5, 0]} char={'N'} />
        <Characters position={[1.5, globeY-1.5, 0]} char={'E'} />
        <Characters position={[2.5, globeY-1.5, 0]} char={'T'} />
        </>
    )
}