import styled from '@emotion/styled';
export const Button = styled.button`
  background-color: #eabda8;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #61988e;
  }
`;
export const Input = styled.input`
  padding: 10px;
  border: 1px solid #cbbfbb;
  border-radius: 5px;
  font-size: 16px;
  color: #493843;
`;
export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
`;
export const Heading = styled.h1`
  font-size: 24px;
  color: #493843;
`;
export const Modal = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;