import React, { Suspense } from 'react'
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import Light from './Light';
import Iphone from './Iphone';
import * as THREE from 'three';
import Loader from './Loader';
const ModelView = ({index, groupRef, gsapType, controlRef, setRotationState, size, item}) => {
  const isActive = (size === 'small' && index === 1) || (size === 'large' && index === 2)
  return (
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full absolute ${index === 2 ? 'left-[100%]' : ''}`}
    >
   {/* Ambient Light */}
   <ambientLight intensity={0.3}/>

   <PerspectiveCamera makeDefault={isActive} position={[0, 0, 4]} />

   <Light/>
   <OrbitControls
      makeDefault={isActive}
      enabled={isActive}
      ref={controlRef}
      enableZoom={false}
      zoomSpeed={0}
      enablePan={false}
      minDistance={4}
      maxDistance={4}
      rotateSpeed={0.4}
      target={new THREE.Vector3(0, 0, 0)}
      onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
   <group ref={groupRef} name={index === 1 ? 'small' : 'large'}>
   <Suspense fallback={<Loader/>}>
   <Iphone
     scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
     item={item}
     size={size}
    />
   </Suspense>
   </group>
    </View>
  )
}

export default ModelView
