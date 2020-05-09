import React from "react"
import styled from "styled-components"
import contactUs from "../../images/contact.svg"
import Button from "./Button"
import Background from "./Background"
const Wrapper = styled.div`
  display: flex;

  justify-content: space-between;
  padding-left: ${({ theme }) => theme.sizes.siteSpace};
  padding-right: ${({ theme }) => theme.sizes.siteSpace};
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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

const ContactUs = () => (
  <Wrapper>
    <Form>
      <Header>Get in touch with us</Header>
      <input></input>
      <input></input>
      <textarea></textarea>
      <Button>Submit</Button>
    </Form>
    <ImgWrapper>
      <ContactImg />
    </ImgWrapper>
  </Wrapper>
)
export default ContactUs
