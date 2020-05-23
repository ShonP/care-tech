import React from "react"
import styled, { css } from "styled-components"
import { useTranslation } from "react-i18next"
import contactUs from "../../images/contact.svg"
import Button from "../../shared/components/Button"
import Section from "../../shared/components/Section"
import Header from "../../shared/components/Header"

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

const Anchor = styled.a`
  ${({ disabled }) =>
    `
  pointer-events: none;
  cursor: default;`}
`

const ContactUs = ({ name, content, setName, setContent }) => {
  const { t } = useTranslation()
  return (
    <Wrapper name={t("talkWithUs")}>
      <Form>
        <Header>דבר איתנו</Header>
        <Input
          required
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          placeholder="שם"
        ></Input>
        <TextArea
          value={content}
          onChange={({ target: { value } }) => setContent(value)}
          placeholder="כתוב את פנייתך כאן"
        ></TextArea>
        <Anchor
          disabled={!name || !content}
          href={`mailto:techcaretoday@gmail.com?subject=${name}&body=${content}`}
        >
          <Button disabled={!name || !content}>שלח</Button>
        </Anchor>
      </Form>
      <ImgWrapper>
        <ContactImg />
      </ImgWrapper>
    </Wrapper>
  )
}
export default ContactUs
