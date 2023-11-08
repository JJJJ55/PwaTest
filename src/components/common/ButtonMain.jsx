import styled, { css } from 'styled-components';

const S = {
  Button: styled.button`
    width: 322px;
    height: 48px;
    margin-bottom: 5px;
    font-size: 15px;
    font-weight: bold;
    background-color: #05194d;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #070f24;
    }
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

const ButtonMain = ({ onClick, text, active }) => {
  return (
    <>
      <S.Button onClick={onClick} active={active}>
        {text}
      </S.Button>
    </>
  );
};

export default ButtonMain;
