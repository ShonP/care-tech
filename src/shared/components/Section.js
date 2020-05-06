import React from "react"
import styled from "styled-components"
import MiniCard from "./MiniCard"
const Wrapper = styled.div`
  height: 400px;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.sizes.siteSpace};
  padding-right: ${({ theme }) => theme.sizes.siteSpace};
`

const Image = styled.img.attrs(() => ({
  src: "https://blog.hubspot.com/hubfs/landing-page-design-examples.jpg",
}))`
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 30rem;
`

const cards = ["react", "css", "js", "nodejs", "html", "express"]

const Section = () => (
  <Wrapper>
    {cards.map(i => (
      <MiniCard key={i} type={i} />
    ))}
    <Image></Image>
  </Wrapper>
)

export default Section
