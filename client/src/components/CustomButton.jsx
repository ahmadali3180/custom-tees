import React from 'react'
import state from "../store"
import { useSnapshot } from 'valtio'

const CustomButton = ({title, type, handleClick, customStyles}) => {
    const snap = useSnapshot(state)

    const generateStyle = (type) => {
        if(type === "filled") {
            return {
                backgroundColor: snap.color,
                color: "#000"
            }
        }
    }
  return (
    <button 
        className={`rounded-md ${customStyles}`} 
        onClick={handleClick}
        style={generateStyle(type)}
    >
        <p>{title}</p>
    </button>
  )
}

export default CustomButton