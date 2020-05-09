import React from "react"
import styled, { css } from "styled-components"
import { useTranslation } from "react-i18next"
import contactUs from "../../images/contact.svg"
import Button from "../../shared/components/Button"
import Section from "../../shared/components/Section"

const Wrapper = styled(Section)`
  display: flex;
  justify-content: space-between;
  background-color: white;
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
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.25rem;
  &::after {
    content: ""; /* This is necessary for the pseudo element to work. */
    display: block; /* This will put the pseudo element on its own line. */
    width: 25%; /* Change this to whatever width you want. */
    padding-top: 20px; /* This creates some space between the element and the border. */
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary}; /* This creates the border. Replace black with whatever color you want. */
  }
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

const ContactUs = () => {
  const { t } = useTranslation()
  return (
    <Wrapper name={t("talkWithUs")}>
      <Form>
        <Header>דבר איתנו</Header>
        <Input placeholder="שם"></Input>
        <Input placeholder="אימייל"></Input>
        <TextArea placeholder="כתוב את פנייתך כאן"></TextArea>
        <Button>שלח</Button>
      </Form>
      <ImgWrapper>
        <ContactImg />
      </ImgWrapper>
    </Wrapper>
  )
}
export default ContactUs
