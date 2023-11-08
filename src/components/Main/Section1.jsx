import React from 'react';
import styled from 'styled-components';
import mainImg from '../../assets/img/newBg.gif';

const S = {
  container: styled.div`
    width: 390px;
    z-index: 10 !important;
  `,
  Background: styled.div`
    width: 390px;
    height: 230px;
    background-image: url(${mainImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  `,
};

const Section1 = () => {
  return (
    <S.container>
      <S.Background />
    </S.container>
  );
};

export default Section1;
