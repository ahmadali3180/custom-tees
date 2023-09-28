import React from 'react'
import CustomButton from "../components/CustomButton"

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea rounded-[6px] text-white'
        placeholder='Tell AI your design...'
        rows={5}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? 
        (
          <CustomButton
            type="outline"
            title="AI is designing"
            customStyles="text-xs flex-[0.45] w-full items-center justify-center px-1 py-1"
          />
        ) : 
        (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs flex-[0.45] w-full items-center justify-center px-1 py-1"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs flex-[0.45] w-full items-center justify-center px-1 py-1"
            />
          </>
        )}
       
      </div>
    </div>
  )
}

export default AIPicker
