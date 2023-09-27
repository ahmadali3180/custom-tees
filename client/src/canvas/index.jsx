import { Canvas } from "@react-three/fiber"
import { Environment, Center} from "@react-three/drei"
import Shirt from "./Shirt";
import Backdrop from "./Backdrop"
import CameraRig from "./CameraRig"


const CanvasModel = () => { 
  return (
    <Canvas 
      shadows
      gl={{preserveDrawingBuffer: true}}
      camera={{position: [0, 0, 0], fov: 25}}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5}/>
      <Environment preset="city"/>
      <CameraRig>
        <Backdrop/>
        <Center>
          <Shirt/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel