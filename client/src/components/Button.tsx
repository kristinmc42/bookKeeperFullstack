import styled from "styled-components";

//types
interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void | undefined;
  disabled?: boolean | undefined;
  children?: React.ReactNode;
}

// styles
const StyledButton = styled.button`
  color: ${props => props.theme.colors.blackText};
  background-color: ${props => props.theme.colors.secondary};
  padding: 5px 10px;
  max-height: 42px;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 8px;
  font-weight: 500;
  letter-spacing: 1px;

  &:hover{
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.secondary};
    cursor: pointer;
  }
`

const Button = ({ type, onClick, disabled, children }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
