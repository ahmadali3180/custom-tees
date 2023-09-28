import React from 'react'
import state from "../store"
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'


const CustomButton = ({title, type, handleClick, customStyles}) => {
    const snap = useSnapshot(state)

    const generateStyle = (type) => {
        if(type === "filled") {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        } else if(type === "outline") {
            return {
                borderWidth: 1,
                borderColor: getContrastingColor(snap.color), 
                color: getContrastingColor(snap.color)
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