/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/ufo2.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Ufo(props) {
  const { nodes, materials } = useGLTF('/ufo2.gltf')
const mesh = useRef()
  useFrame((state, delta) => {
    mesh.current.rotation.y += 5*delta
  })
  return (
    <group {...props} dispose={null}>
      <group mesh ref={mesh} rotation={[-Math.PI, 0, -Math.PI]} scale={[-2, -0.48, -2]}>
        <mesh geometry={nodes.Sphere.geometry} material={materials.Body} />
        <mesh geometry={nodes.Sphere_1.geometry} material={materials.Glass} />
        <mesh geometry={nodes.Sphere_2.geometry} material={materials['Dome.belt']} />
        <mesh geometry={nodes.Sphere_3.geometry} material={materials.Bottom} />
        <mesh geometry={nodes.Sphere_4.geometry} material={materials['Glass.mini']} />
        <mesh geometry={nodes.Sphere_5.geometry} material={materials['Bottom.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/ufo2.gltf')
