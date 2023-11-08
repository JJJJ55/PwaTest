import React from 'react';
import styled from 'styled-components';
import useCount from '../../hook/useCount';

const S = {
  CountBox: styled.section`
    width: 390px;
    position: relative;
    text-align: center;
    margin: 25px 0;
    line-height: 25px;
    font-size: 13px;
    z-index: 10 !important;
  `,

  Number: styled.span`
    font-weight: bold;
    font-size: 20px;
  `,
};

const Section2 = () => {
  const targetValue = 630000;
  const duration = 2000; // 3초 동안 증가

  const count = useCount(targetValue, duration);
  return (
    <S.CountBox>
      <S.Number>{count.toLocaleString()}</S.Number> 개의 데이터로 <br />
      파손도와 수리비용을 안내해드립니다.
    </S.CountBox>
  );
};

export default Section2;
