import React from "react"
import _Card from "./Card"
import styled from "styled-components"
import education from "../../images/education.svg"
import job from "../../images/job.svg"

const Card = styled(_Card)`
  height: 25rem;
  width: 20rem;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  margin-right: 3rem;
  &:last-child {
    margin-left: 0;
  }
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes.siteSpace};
  margin-top: ${({ theme }) => theme.sizes.siteSpace};
`

const Img = styled.img`
  width: 100%;
  margin-bottom: 2rem;
`

const Header = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 2rem;
`

const SubHeader = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
`

const WhatWeDo = () => (
  <Wrapper>
    <Card>
      <Img src={job} />
      <Header>מציאת עבודה בקלות</Header>
      <SubHeader>
        ניתן לך את כל הטיפים לעבור את ראיון העבודה והמבחן בקלות ובמהירות
      </SubHeader>
    </Card>
    <Card>
      <Img src={education} />

      <Header>לימוד יעיל ומהיר</Header>
      <SubHeader>
        ניתן לך את הכלים הדרושים להתמודד עם מגוון משימות ובעיות על מנת שתוכל
        בסופו של דבר להתמודד בעצמך
      </SubHeader>
    </Card>
  </Wrapper>
)

export default WhatWeDo
