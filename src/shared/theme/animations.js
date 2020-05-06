import { keyframes } from "styled-components"

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const svgLineMoving = keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -53;
  }
}`

export const blinks = keyframes`
    from{
    opacity:0.7
    } 
    to{
        opacity:1
    }`
export const slideFromLeft = keyframes`
from {
  transform: translateX(-100px);
}
to {
  transform: translateX(0);
}
`
export const slideFromBottom = keyframes`
  from {
    transform: translateY(100px);
  }
  to {
    transform: translateX(0);
  }
`
export const slideFromTop = keyframes`
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateX(0);
  }
`
