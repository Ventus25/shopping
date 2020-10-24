import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 14px;
  background: transparent;
  padding: 1rem;
  border-radius: 8px;
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border: 0.05rem solid var(--lightBlue);
  border-color:${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  margin:0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5 ease-in-out;
  outline:0;
  &:hover {
    background:${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
    color:var(--mainBLue)
  }
`;