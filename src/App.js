import React, { Component } from 'react';
import { Canvas } from '@react-three/fiber'
import { meshLambertMaterial } from 'three';

import './App.css';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { OrbitControls, Stars } from '@react-three/drei';

function Box() {
	const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
	return (
		<mesh
			onClick={() => {
				api.velocity.set(0, 2, 0);
			}}
			ref={ref}
			position={[0, 2, 0]}
		>
			<boxBufferGeometry attach="geometry" />
			<meshLambertMaterial attach="material" color="hotpink" />
		</mesh>
	);
}

function Plane() {
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
	}));
	return (
		<mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
			<planeBufferGeometry attach="geometry" args={[10, 10]} />
			<meshLambertMaterial attach="material" color="lightblue" />
		</mesh>
	);
}


function App() {
  return (  
	<>
	<Canvas>
		<OrbitControls />
		<Stars />
		<ambientLight intensity={0.5} />
		<spotLight position={[10, 15, 10]} angle={0.3} />
		<Physics>
			<Box />
			<Plane />
		</Physics>
	</Canvas>
	<div className='newHight'/>
  </>
  );
}

export default App;
