import styled, { css } from 'styled-components';

const S = {
  Button: styled.button`
    width: 322px;
    height: 48px;
    font-size: 15px;
    font-weight: bold;
    background-color: #05194d;
    color: #fff;
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

const ButtonLong = ({ onClick, text, active }) => {
  return (
    <>
      <S.Button onClick={onClick} active={active}>
        {text}
      </S.Button>
    </>
  );
};

export default ButtonLong;
