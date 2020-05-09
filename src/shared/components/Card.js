import styled from "styled-components"

const Card = styled.div`
  transition: 0.4s background-color ease;
  background-color: white;
  border-radius: 20px;
  position: relative;
  transition: all 0.4s;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.05);
  }
`

export default Card
