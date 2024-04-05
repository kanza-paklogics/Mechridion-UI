'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const ModelViewer = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#222222') // Set background color to #222222

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = 5

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(700, 850) // Set canvas size to match parent container
    containerRef.current.appendChild(renderer.domElement)

    // Load the OBJ model
    const loader = new OBJLoader()
    let model

    loader.load(
      '/model/bugattiNew.obj',
      (object) => {
        object.scale.set(0.3, 0.3, 0.3)
        scene.add(object)
        model = object // Store a reference to the loaded model
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.error('An error happened', error)
      },
    )

    // Add a light to the scene
    const light = new THREE.PointLight(0xffffff)
    light.position.set(10, 10, 10)
    scene.add(light)

    // Create OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.25
    controls.screenSpacePanning = false
    controls.minDistance = 1
    controls.maxDistance = 500
    controls.maxPolarAngle = Math.PI / 2

    // Function to handle window resize
    const handleResize = () => {
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update() // Update controls
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default ModelViewer
