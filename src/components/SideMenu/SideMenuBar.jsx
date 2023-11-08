import React from 'react';
import styled from 'styled-components';

const S = {
  MenuIcon: styled.input`
    display: none;
    &:checked + label {
      z-index: 2;
    }
    &:checked + label span {
      background: ${(props) => props.color};
    }
    &:checked + label span:nth-child(1) {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
    &:checked + label span:nth-child(2) {
      opacity: 0;
    }
    &:checked + label span:nth-child(3) {
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
    }
  `,
  MenuLabel: styled.label`
    display: block;
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;
    margin: auto 10px;
  `,
  Line: styled.span`
    display: block;
    position: absolute;
    width: 100%;
    height: 5px;
    border-radius: 30px;
    background: ${(props) => props.color};
    transition: all 0.35s;
    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-child(3) {
      bottom: 0;
    }
  `,
};

const SideMenuBar = ({ onclick, color }) => {
  return (
    <>
      <S.MenuIcon type="checkbox" id="menuicon" onClick={onclick} />
      <S.MenuLabel for="menuicon">
        <S.Line id="line" color={color}></S.Line>
        <S.Line id="line" color={color}></S.Line>
        <S.Line id="line" color={color}></S.Line>
      </S.MenuLabel>
    </>
  );
};

export default SideMenuBar;
