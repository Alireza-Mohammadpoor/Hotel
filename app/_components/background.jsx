

// 'use client';

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// export default function Background() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     // Scene, Camera, Renderer Setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       100000
//     );
//     camera.position.z = 2.5;

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio); // Improve quality on high-res displays
//     mountRef.current.appendChild(renderer.domElement);

//     // Load Textures for Earth
//     const textureLoader = new THREE.TextureLoader();
//     const earthTexture = textureLoader.load('/earthmap1k.jpg');
//     const normalMap = textureLoader.load('/earth_normal_2048.jpg');
//     const specularMap = textureLoader.load('/earth_specular_2048.jpg');

//     // Create Sphere (Earth)
//     const geometry = new THREE.SphereGeometry(1, 64, 64);
//     const material = new THREE.MeshPhongMaterial({
//       map: earthTexture,
//       normalMap: normalMap,
//       specularMap: specularMap,
//       specular: new THREE.Color('gray'),
//     });
//     const earth = new THREE.Mesh(geometry, material);
//     scene.add(earth);

//     // Add Lighting
//     const pointLight = new THREE.PointLight(0xffffff, 1.5);
//     pointLight.position.set(5, 5, 5);
//     scene.add(pointLight);

//     const ambientLight = new THREE.AmbientLight(0x404040); // Soft light
//     scene.add(ambientLight);

//     // Create Starfield
//     const starGeometry = new THREE.BufferGeometry();
//     const starCount = 10000;
//     const starPositions = new Float32Array(starCount * 3);

//     for (let i = 0; i < starCount * 3; i++) {
//       starPositions[i] = (Math.random() - 0.5) * 2000;
//     }

//     starGeometry.setAttribute(
//       'position',
//       new THREE.BufferAttribute(starPositions, 3)
//     );

//     const starMaterial = new THREE.PointsMaterial({
//       color: new THREE.Color().setHSL(0, 0, 0.6), // HSL(0, 0%, 60%)
//       size: 0.5,
//     });

//     const stars = new THREE.Points(starGeometry, starMaterial);
//     scene.add(stars);

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Rotate the Earth
//       earth.rotation.y += 0.0005;

//       // Rotate the starfield slightly
//       stars.rotation.y += 0.0005;

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Handle window resize
//     const onWindowResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', onWindowResize);

//     // Cleanup on Component Unmount
//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//       mountRef.current.removeChild(renderer.domElement);
//       geometry.dispose();
//       material.dispose();
//       starGeometry.dispose();
//       starMaterial.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
// }













'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100000
    );
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Improve quality on high-res displays
    mountRef.current.appendChild(renderer.domElement);

    // Load Textures for Earth
    const textureLoader = new THREE.TextureLoader();

    // You can add error handling for loading textures
    const earthTexture = textureLoader.load('/earthmap1k.jpg', undefined, undefined, (err) => {
      console.error('Error loading earth texture', err);
    });
    const normalMap = textureLoader.load('/earth_normal_2048.jpg');
    const specularMap = textureLoader.load('/earth_specular_2048.jpg');

    // Create Sphere (Earth)
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      normalMap: normalMap,
      specularMap: specularMap,
      specular: new THREE.Color('gray'),
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Add Lighting
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040); // Soft light
    scene.add(ambientLight);

    // Create Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2000;
    }

    starGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(starPositions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: new THREE.Color().setHSL(0, 0, 0.6), // HSL(0, 0%, 60%)
      size: 0.5,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the Earth
      earth.rotation.y += 0.0005;

      // Rotate the starfield slightly
      stars.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Cleanup on Component Unmount
    return () => {
      window.removeEventListener('resize', onWindowResize);
      mountRef.current.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      earthTexture.dispose(); // Dispose of the textures
      normalMap.dispose();
      specularMap.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
}
