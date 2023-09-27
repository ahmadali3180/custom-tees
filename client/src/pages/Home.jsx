import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { useSnapshot } from 'valtio'
import {
  headContainerAnimation, headContentAnimation, slideAnimation, headTextAnimation
} from "../config/motion"
import state from "../store"
import {CustomButton} from "../components"


const Home = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src="./logo-no-background.svg" alt='logo' className='w-8 h-8 object-contain'/>
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>LET'S <br className='xl:block hidden' />DO IT.</h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-full gap-5'>
              <p className='max-w-md font-normal text-gray-600 text-base'>Create your own unique design for your T-Shirt, with our brand-new <br className='xl:block hidden'/> 3D customization tool. <strong>Unleash your imagination
              </strong> and define your own style</p>
             
            </motion.div>
             <CustomButton 
                type="filled" 
                title="Design It" 
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home