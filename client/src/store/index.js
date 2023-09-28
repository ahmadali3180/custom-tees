import {proxy} from "valtio"

const state = proxy({
    intro: true,
    color: "#EFBD48",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: "./logo-no-background.svg",
    fullDecal: "./logo-no-background.svg"
})

export default state