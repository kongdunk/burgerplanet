/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/characters.gltf
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

export function Characters(props) {
    const [char, setChar] = useState(props.char)
    const { nodes, materials } = useGLTF('/characters.gltf')
    const propy = `A${props.char}_text_0`
    return (
    <>
        <mesh scale={0.01} position={props.position} geometry={nodes[propy].geometry} material={materials.text} />
        {/* 
        <mesh geometry={nodes.AA_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AB_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AC_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AD_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AE_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AF_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AG_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AH_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AI_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AJ_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AK_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AL_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AM_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AMesh_numbers_0.geometry} material={materials.numbers} />
        <mesh geometry={nodes.AMesh1_numbers_0.geometry} material={materials.numbers} />
        <mesh geometry={nodes.AMesh2_numbers_0.geometry} material={materials.numbers} />
        <mesh geometry={nodes.AMesh3_numbers_0.geometry} material={materials.numbers} />
        <mesh geometry={nodes.AMesh4_numbers_0.geometry} material={materials.numbers} />
        <mesh geometry={nodes.AMesh5_numbers_0.geometry} material={materials.numbers} />
        <mesh geometry={nodes.AMesh6_numbers_0.geometry} material={materials.numbers} />
        <mesh geometry={nodes.AMesh7_numbers_0.geometry} material={materials.numbers} />
        <mesh geometry={nodes.AMesh8_numbers_0.geometry} material={materials.numbers} />
        <mesh geometry={nodes.AMesh9_numbers_0.geometry} material={materials.numbers} />
        <mesh geometry={nodes.AN_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AO_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AP_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AQ_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AR_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AS_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AT_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AU_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AV_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AW_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AX_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AY_text_0.geometry} material={materials.text} />
        <mesh geometry={nodes.AZ_text_0.geometry} material={materials.text} />
        */}
    </>
  )
}

useGLTF.preload('/characters.gltf')
