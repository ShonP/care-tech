import React from "react"
import styled, { css } from "styled-components"
import contactUs from "../../images/contact.svg"
import Button from "./Button"

const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
  padding: ${({ theme }) => theme.sizes.siteSpace};
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  & > * {
    margin-bottom: 1rem;
  }
`

const ContactImg = styled.img.attrs(() => ({ src: contactUs }))`
  flex: 1;
  max-width: 100%;
`

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  line-height: 3rem;
`

const ImgWrapper = styled.div`
  flex: 1;
`

const inputCss = css`
  padding: 0.5rem 1rem;
  border: 2px solid rgba(70, 178, 240, 0.4);
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 1.2rem;
  }
`

const Input = styled.input`
  ${inputCss}
`

const TextArea = styled.textarea`
  ${inputCss}
  height:9.5rem;
  resize: none;
`

const ContactUs = () => (
  <Wrapper>
    <Form>
      <Header>דבר איתנו</Header>
      <Input placeholder="שם"></Input>
      <Input placeholder="אימייל"></Input>
      <TextArea  placeholder="כתוב את פנייתך כאן"></TextArea>
      <Button>שלח</Button>
    </Form>
    <ImgWrapper>
      <ContactImg />
    </ImgWrapper>
  </Wrapper>
)
export default ContactUs
