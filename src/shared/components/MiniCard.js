import React from "react"
import styled from "styled-components"
import { media } from "../../shared/theme/media"
import css from "../../images/css.png"
import express from "../../images/expressjslogo.png"
import html from "../../images/html5.png"
import js from "../../images/javascriptlang.png"
import nodejs from "../../images/nodejslogo.png"
import react from "../../images/react.png"

const Wrapper = styled.div`
  width: 6rem;
  height: 6rem;
  padding: 0.3rem;
  ${media.minTablet`
    width: 10rem;
    height: 10rem;
    padding: 0.6rem;
  `}
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 200ms;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  }
`

const Icon = styled.img`
  margin-bottom: 1.5rem;
  width: 2rem;
  height: 2rem;
`

const icons = { css, express, html, js, nodejs, react }

const texts = {
  css: "CSS 3",
  express: "Express JS",
  html: "HTML 5",
  js: "Javascript",
  nodejs: "NodeJS",
  react: "React",
}

const MiniCard = ({ type = "react" }) => (
  <Wrapper>
    <Icon src={icons[type]} />
    <div>{texts[type]}</div>
  </Wrapper>
)

export default MiniCard
