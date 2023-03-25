
import React, { useRef } from 'react'
import { useGLTF, useAnimations} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export default function Alkaabaview(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/view.glb');
  const { viewport } = useThree();
  useFrame(() => (
    group.current.scale.set(1.2,1.2,1.2),
    group.current.position.set(26,-25,-52)
    
  
    ))
  //const { actions } = useAnimations(animations, group)
  return (
    <group ref={group}   {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[-41.21, 27.28, 16.39]} rotation={[-Math.PI / 2, 0, 0.06]} scale={[0.04, 0.07, 0.05]}>
          <group name="e9f57dd6a809469da89f32dac0fefec1fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="01" position={[-36.19, -1.19, 0]}>
                <group name="Retopo_obj26" position={[-44, 89.31, 0.06]}>
                  <mesh name="Retopo_obj26__0" geometry={nodes.Retopo_obj26__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj27" position={[-82.71, 145.14, 0.05]} rotation={[0, 0.19, 0]}>
                  <mesh name="Retopo_obj27__0" geometry={nodes.Retopo_obj27__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj28" position={[124.14, 54.54, 0.07]} rotation={[-0.1, 0.36, 0.04]}>
                  <mesh name="Retopo_obj28__0" geometry={nodes.Retopo_obj28__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj29" position={[123.33, 23.76, 0.05]} rotation={[0, -0.26, 0]}>
                  <mesh name="Retopo_obj29__0" geometry={nodes.Retopo_obj29__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj30" position={[58.03, 14.74, 0.05]}>
                  <mesh name="Retopo_obj30__0" geometry={nodes.Retopo_obj30__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj31" position={[119.45, -32.11, 0.05]} rotation={[-0.11, 0.05, -0.04]}>
                  <mesh name="Retopo_obj31__0" geometry={nodes.Retopo_obj31__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj32" position={[-98.71, -47.26, -0.92]} rotation={[0, 0.29, 0]}>
                  <mesh name="Retopo_obj32__0" geometry={nodes.Retopo_obj32__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj33" position={[-102.23, -70.62, -1.16]} rotation={[0.05, -0.21, 0.01]}>
                  <mesh name="Retopo_obj33__0" geometry={nodes.Retopo_obj33__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj34" position={[-105.08, -45.22, 0.03]} rotation={[0, -0.2, 0]}>
                  <mesh name="Retopo_obj34__0" geometry={nodes.Retopo_obj34__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj35" position={[124.02, 23.48, 0.01]} rotation={[-0.15, 0.07, 0.02]}>
                  <mesh name="Retopo_obj35__0" geometry={nodes.Retopo_obj35__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj36" position={[-65.33, -85.22, 0.08]} rotation={[0, -0.15, 0]}>
                  <mesh name="Retopo_obj36__0" geometry={nodes.Retopo_obj36__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj48" position={[-69.24, -2.76, 0.05]} rotation={[0.14, 0.03, 0]}>
                  <mesh name="Retopo_obj48__0" geometry={nodes.Retopo_obj48__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj49" position={[33.84, 45.19, 2.27]} rotation={[0.12, 0, 0]}>
                  <mesh name="Retopo_obj49__0" geometry={nodes.Retopo_obj49__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj50" position={[-45.67, 123.2, 0.05]}>
                  <mesh name="Retopo_obj50__0" geometry={nodes.Retopo_obj50__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj51" position={[40.09, 105.63, 0.05]}>
                  <mesh name="Retopo_obj51__0" geometry={nodes.Retopo_obj51__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj63" position={[107.45, -70.8, 0.05]} rotation={[-0.08, 0.01, 0]}>
                  <mesh name="Retopo_obj63__0" geometry={nodes.Retopo_obj63__0.geometry} material={materials['Scene_-_Root']} />
                </group>
                <group name="Retopo_obj65" position={[-45.36, -92.17, 1.67]} rotation={[-0.05, 0, 0]}>
                  <mesh name="Retopo_obj65__0" geometry={nodes.Retopo_obj65__0.geometry} material={materials['Scene_-_Root']} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Kaaba_0726_0555" position={[-203.49, 0, -16.65]} rotation={[Math.PI / 2, 0, 0]} scale={1.62}>
          <mesh name="Kaaba_0726_0555001" geometry={nodes.Kaaba_0726_0555001.geometry} material={materials['Material_6.001']} />
          <mesh name="Kaaba_0726_0555001_1" geometry={nodes.Kaaba_0726_0555001_1.geometry} material={materials['Material_3.001']} />
          <mesh name="Kaaba_0726_0555001_2" geometry={nodes.Kaaba_0726_0555001_2.geometry} material={materials['Material_9.001']} />
          <mesh name="Kaaba_0726_0555001_3" geometry={nodes.Kaaba_0726_0555001_3.geometry} material={materials['Material_-4.001']} />
          <mesh name="Kaaba_0726_0555001_4" geometry={nodes.Kaaba_0726_0555001_4.geometry} material={materials['Material_7.001']} />
          <mesh name="Kaaba_0726_0555001_5" geometry={nodes.Kaaba_0726_0555001_5.geometry} material={materials['Material_5.001']} />
          <mesh name="Kaaba_0726_0555001_6" geometry={nodes.Kaaba_0726_0555001_6.geometry} material={materials['Material_4.001']} />
          <mesh name="Kaaba_0726_0555001_7" geometry={nodes.Kaaba_0726_0555001_7.geometry} material={materials['Material_0.001']} />
          <mesh name="Kaaba_0726_0555001_8" geometry={nodes.Kaaba_0726_0555001_8.geometry} material={materials['Material_1.001']} />
          <mesh name="Kaaba_0726_0555001_9" geometry={nodes.Kaaba_0726_0555001_9.geometry} material={materials['Material_11.001']} />
          <mesh name="Kaaba_0726_0555001_10" geometry={nodes.Kaaba_0726_0555001_10.geometry} material={materials['Material_2.001']} />
          <mesh name="Kaaba_0726_0555001_11" geometry={nodes.Kaaba_0726_0555001_11.geometry} material={materials['Material_8.001']} />
          <mesh name="Kaaba_0726_0555001_12" geometry={nodes.Kaaba_0726_0555001_12.geometry} material={materials['Material_10.001']} />
        </group>
        <mesh name="Torus001" geometry={nodes.Torus001.geometry} material={materials['Material.002']} position={[-54.32, 9.78, 27.31]} rotation={[2.05, 0, 0]} scale={0.18} />
        <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={materials['Material.006']} position={[-54.34, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={materials['Material.007']} position={[-54.34, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder009" geometry={nodes.Cylinder009.geometry} material={materials['Material.008']} position={[-54.34, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials['Material.009']} position={[-54.34, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={materials['Material.010']} position={[-54.34, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder012" geometry={nodes.Cylinder012.geometry} material={materials['Material.011']} position={[-54.34, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder013" geometry={nodes.Cylinder013.geometry} material={materials['Material.002']} position={[-54.34, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials['Material.019']} position={[-22.43, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.003']} position={[-22.43, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials['Material.004']} position={[-22.43, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials['Material.005']} position={[-22.43, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials['Material.001']} position={[-22.43, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={materials['Material.015']} position={[-22.43, -0.03, 27.38]} scale={1.67} />
        <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={materials['Material.018']} position={[-22.43, -0.03, 27.38]} scale={1.67} />
        <mesh name="Torus" geometry={nodes.Torus.geometry} material={materials['Material.019']} position={[-22.42, 9.78, 27.31]} rotation={[2.05, 0, 0]} scale={0.18} />
      </group>
    </group>
  )
}

useGLTF.preload('/view.glb')
