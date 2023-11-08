import styled, { css } from 'styled-components';

const S = {
  Button: styled.button`
    width: 85px;
    height: 32px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    background-color: #e2e2e2;
    cursor: pointer;
    ${(props) =>
      props.active === false &&
      css`
        background-color: #f7f7f7;
        color: #000;
        :hover {
        }
        pointer-events: none;
      `}
  `,
};

const Button = ({ text, onClick, active }) => {
  return (
    <>
      <S.Button onClick={onClick} active={active}>
        {text}
      </S.Button>
    </>
  );
};

export default Button;
