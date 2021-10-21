import { Color, Mesh, MeshNormalMaterial, PerspectiveCamera, Scene, sRGBEncoding, TetrahedronBufferGeometry, WebGLRenderer } from 'three'

export const createScene = (canvasId: string) => {

  // init

  const canvas = document.getElementById(canvasId) as HTMLCanvasElement
  const context = canvas.getContext('webgl2')

  const options = {
    canvas,
    context,
    antialias: true,
  }

  
  const renderer = new WebGLRenderer(options)
  renderer.physicallyCorrectLights = true
  renderer.outputEncoding = sRGBEncoding
  const scene = new Scene()
  scene.background = new Color('black')
  const camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 10000)
  camera.position.set(10, 6, 5)
  camera.lookAt(0, 0, 0)

  const resize = () => {
    renderer.setPixelRatio(window.devicePixelRatio)
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }

  window.addEventListener('resize', resize, false)
  resize()

  // world

  const obj = new Mesh(new TetrahedronBufferGeometry(1, 6), new MeshNormalMaterial())
  scene.add(obj)

  // render

  let timeElapsed = 0
  let lastTime = Date.now()
  let delta = 0

  const render = (frameId) => {
    delta = Date.now() - lastTime
    timeElapsed += delta

    renderer.render(scene, camera)

    requestAnimationFrame(render)
  }

  requestAnimationFrame(render)
}