import React from "react"
import styled, { keyframes } from "styled-components"
import Card from "./Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import _Button from "./Button"

const types = {
  front: "red",
  back: "green",
  full: "primary",
}

const circleAn = keyframes`
  0% { 
    box-shadow:
      0px 30px 30px -25px rgba(0,0,0,0.6), 
      0px 0px 0px 0px rgba(52,175,255,1), 
      0px 0px 0px 0px rgba(52,175,255,.7),
      0px 0px 0px 0px rgba(52,175,255,.5);
  }
 100% { 
   box-shadow:
     0px 5px 5px -5px rgba(0,0,0,0.6), 
     0px 0px 0px 10px rgba(52,175,255,0),
     0px 0px 0px 30px rgba(52,175,255,0),
     0px 0px 0px 50px rgba(52,175,255,0);
  }
  `

const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  left: calc(50% - 60px);
  top: 60%;
  background-color: white;
  position: absolute;
  border: 10px solid ${({ theme, type }) => theme.colors[types[type]]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.4s;
`

const Point = styled.div`
  width: 30px;
  background-color: #34afff;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  border: 7px solid #505050;
  margin: 0 auto;
  position: relative;
  transition: all 0.4s cubic-bezier(0.37, 0.26, 0.35, 1);
  &::before,
  &::after {
    position: absolute;
    content: "";
    border-top: 3px solid #505050;
    border-top-style: dotted;
    width: 90px;
    top: 8px;
    transition: transform 300ms ease-in-out;
    transform: scaleX(0);
  }
  &::after {
    left: 23px;
    transform-origin: 100% 50%;
  }
  &::before {
    transform-origin: 0 50%;
    right: 23px;
  }
`
const Wrapper = styled(Card)`
  transform: scale(${({ type }) => type === "full" && "1.11"});
  width: 20rem;
  &:hover {
    transform: scale(${({ type }) => type === "full" && "1.13"});
    ${Circle} {
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
      border-width: 5px;
    }
    ${Point} {
      animation: ${circleAn} 4s infinite;
      &::after {
        transform: scaleX(1);
      }
      &::before {
        transform: scaleX(1);
      }
    }
  }
`

const Header = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme, type }) => theme.colors[types[type]]};
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
`

const PriceTitle = styled.span`
  display: block;
  font-size: 28px;
  font-weight: bold;
`

const PriceInfo = styled.span`
  display: block;
  font-size: 12px;
  font-weight: bold;
  color: gray;
`

const Discount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme, type }) => theme.colors[types[type]]};
  padding: 4px 12px;
  border-radius: 25px;
  overflow: hidden;
  color: ${({ theme, type }) => theme.colors[types[type]]};
  margin: 0 40px;
  width: 150px;

  margin-left: auto;
  margin-right: auto;
`

const Content = styled.div`
  margin-top: 80px;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  padding-right: 4rem;
`
const Item = styled.div`
  padding: 15px 0 15px 0;
  margin: 0;
  display: flex;
`

const Check = styled(FontAwesomeIcon).attrs(() => ({ icon: faCheck }))`
  color: green;
  margin-right: 0.5rem;
`

const Button = styled(_Button)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1rem;
  background-color: ${({ theme, type }) => theme.colors[types[type]]};
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const PricingCard = ({ plan, className }) => (
  <Wrapper type={plan.type} className={className}>
    <Header type={plan.type}>
      <Title type={plan.type}>{plan.title}</Title>
      <Circle type={plan.type}>
        <PriceTitle>{plan.price}</PriceTitle>
        <PriceInfo>{plan.priceInfo}</PriceInfo>
      </Circle>
    </Header>
    <Content>
      {plan.discount && <Discount type={plan.type}>{plan.discount}</Discount>}
      <ItemWrapper>
        {plan.items &&
          plan.items.map(item => (
            <Item key={item}>
              <Check type={plan.type} />
              {item}
            </Item>
          ))}
      </ItemWrapper>
      <Button type={plan.type} isRound>
        בחר
      </Button>
    </Content>
  </Wrapper>
)

export default PricingCard
