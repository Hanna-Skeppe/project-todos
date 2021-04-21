 import styled from 'styled-components/macro'

//props: if props is sent on button in component regarding background 
//it will take that color, otherwise have default color.
export const Button = styled.button`
  padding: 5px;
  margin: 6px;
  background: ${(props) => props.background || '#d3947a'};
  font-size: 16px;
  border: none;
  // border-radius: 3px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: grey;
    color: white;
  }
`;

export const AddButton = styled.button`
  padding: 8px, 14px;
  margin: 3px;
  background: #757f9e;
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;

  &:hover {
    background: grey;
    color: white;
  }
`;
