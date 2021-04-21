import styled from 'styled-components/macro'

export const InputText = styled.input`
  font-size: 20px;
  font-family: 'Montserrat',sans-serif;
  width: 85vw;
  max-width: 700px;
  height: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #ccc;
  color: #606060;
  outline: none;
  &::placeholder {
    color: #606060;
}`;

export const Title = styled.h1`
  color: ${(props) => props.color || '#fff'};
  font-size: 28px;
  letter-spacing: 2px;
  text-align: center;
  margin: 1vh;
  font-family: 'Pacifico', cursive; 
`
export const Subtitle = styled.h2`
  color: ${(props) => props.color || '#fff'};
  font-size: 16px;
  text-align: center;
  margin: 1vh;
  font-family: 'Montserrat', sans-serif;
`