/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/scene.gltf
Author: Jacobs Development (https://sketchfab.com/Jacobs_Development)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-planet-earth-7b1dc4f802a54a6297e7a46888a85f77
Title: Low Poly Planet Earth
*/

import React, { useRef, useState } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export function Globe(props) {
  const [globeY, setGlobeY] = useState(0)
  const { nodes, materials } = useGLTF('/scene.gltf')
  const mesh = useRef()
  const { viewport } = useThree()
  const scroll = useScroll()
  useFrame((state, delta) => {
    setGlobeY(scroll.range(0, 1 / 2) * 10 + 1)
    mesh.current.rotation.y += delta
  }
  )
  return (
    <group {...props} dispose={null}>
      <mesh ref={mesh} scale={2} geometry={nodes.Object_Planet_0.geometry} material={materials.Planet} position={[-0.05, globeY, 0.07]} rotation={[Math.PI, 0, Math.PI]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
