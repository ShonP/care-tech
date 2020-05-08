import styled from "styled-components"

const Triangle = styled.div`
  overflow: hidden;
  position: relative;
  margin: 7rem auto 0;
  border-radius: 20%;
  transform: translateY(50%) rotate(30deg) skewY(30deg) scaleX(0.866);
  width: 4rem;
  height: 4rem;
  pointer-events: none;
  &::before,
  &::after {
    position: absolute;
    background: orange;
    pointer-events: auto;
    content: "";
    height: 4rem;
    width: 4rem;
  }
  &::before {
    border-radius: 20% 20% 20% 53%;
    transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%)
      skewX(30deg) scaleY(0.866) translateX(-24%);
  }
  &::after {
    border-radius: 20% 20% 53% 20%;
    transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%)
      skewX(-30deg) scaleY(0.866) translateX(24%);
  }
`

export default Triangle
