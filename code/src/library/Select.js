import styled from 'styled-components'

export const Select = styled.select`
  height: 40px;
  background: #d3947a;
  color: #606060;
  padding-left: 5px;
  font-family: 'Montserrat',sans-serif;
  font-size: 16px;
  border: none;
  margin: 10px 8px;
  cursor: pointer;

  option {
    color: #000;
    background: #fff;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0 2px 1px;
  }
`;

export const SelectCategory = styled(Select)`
  font-weight: 600;
`;
