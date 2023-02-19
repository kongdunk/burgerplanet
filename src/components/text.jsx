import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import sarpnach from '../assets/Sarpanch SemiBold_Regular.json'

extend ({ TextGeometry })

export default function Text(props) {
    const font = new FontLoader().parse(sarpnach);
    font.generateMipmaps = false;
    return (
        <>
        <mesh position={[-3, 0, 0]} rotation-y={Math.PI * 0.08} >
            <textGeometry args={['BURGER', {font, size: 0.5, height: 0.5, }]} />
            <meshToonMaterial attach='material' color={'#b0255a'}/>
        </mesh>
        <mesh position={[0, 0, 0]} rotation-y={Math.PI * -0.08} >
            <textGeometry args={['Planet', {font, size: 0.5, height: 0.5, }]} />
            <meshToonMaterial attach='material' color={'#b0255a'}/>
        </mesh>
        </>
    )
}