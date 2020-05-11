import React from "react"
import styled, { keyframes } from "styled-components"

const square = keyframes`
    0%   { transform: translateY(0); }
    12%{opacity:0;}
    20%{opacity:1;}
    100% { transform: translateY(-800rem) rotate(600deg); }
    `
const Wrapper = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;
`

const Square = styled.li`
  position: absolute;
  list-style: none;
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(70, 178, 240, 0.15);
  bottom: -160px;
  opacity: 0;
  animation: ${square} 25s infinite;

  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;

  &:nth-child(1) {
    left: 10%;
  }

  &:nth-child(2) {
    left: 20%;

    width: 80px;
    height: 80px;

    animation-duration: 17s;
  }

  &:nth-child(3) {
    left: 25%;
    animation-delay: 3s;
  }

  &:nth-child(4) {
    left: 40%;
    width: 4rem;
    height: 4rem;

    animation-duration: 22s;

    background-color: rgba(70, 178, 240, 0.25);
  }

  &:nth-child(5) {
    left: 70%;
  }

  &:nth-child(6) {
    left: 80%;
    width: 120px;
    height: 120px;

    animation-delay: 2s;
    background-color: rgba(70, 178, 240, 0.2);
  }

  &:nth-child(7) {
    left: 32%;
    width: 10rem;
    height: 10rem;

    animation-delay: 4s;
  }

  &:nth-child(8) {
    left: 55%;
    width: 1.5rem;
    height: 1.5rem;

    animation-delay: 15s;
    animation-duration: 40s;
  }

  &:nth-child(9) {
    left: 25%;
    width: 0.8rem;
    height: 0.8rem;

    animation-delay: 2s;
    animation-duration: 40s;
    background-color: rgba(70, 178, 240, 0.3);
  }

  &:nth-child(10) {
    left: 90%;
    width: 10rem;
    height: 10rem;

    animation-delay: 6s;
  }
`

const Background = () => (
  <Wrapper>
    <Square></Square>
    <Square></Square>
    <Square></Square>
    <Square></Square>
    <Square></Square>
    <Square></Square>
    <Square></Square>
    <Square></Square>
    <Square></Square>
    <Square></Square>
  </Wrapper>
)

export default Background
