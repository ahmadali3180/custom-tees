import React from 'react'
import CustomButton from './CustomButton'

const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input 
          id='file-upload' 
          type='file' 
          accept='image/'
          onChange={(e) => {
            setFile(e.target.files[0])
          }}
        />
        <label className='filepicker-label' htmlFor='file-upload'>
          Upload File
        </label>
        <p className='mt-2 text-black text-xs truncate'>{file === "" ? "No file selected" : file.name}</p>
      </div>
      <div className='mt-4 flex flex-wrap justify-between'>
        <CustomButton 
          type={"outline"} 
          title={"logo"}
          handleClick={() => readFile("logo")}
          customStyles="text-xs flex-[0.45] w-full items-center justify-center px-1 py-1"
        />
        <CustomButton 
          type={"filled"} 
          title={"Full"}
          handleClick={() => readFile("full")}
          customStyles="text-xs flex-[0.45] w-full  items-center justify-center px-1 py-1"
        />
      </div>
    </div>
  )
}

export default FilePicker