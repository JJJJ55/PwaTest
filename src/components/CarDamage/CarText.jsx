import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const S = {
  Box: styled.div`
    width: 350px;
    height: 210px;
    margin: 0 auto;
    text-align: center;
    padding-top: 20px;
  `,
  TextBox: styled.div`
    width: 240px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 10px;
  `,
  FootBox: styled.div`
    margin-top: 30px;
    text-align: center;
    font-size: 11px;
    position: relative;
  `,
  Title: styled.div`
    width: 120px;
    font-weight: bold;
    font-size: 23px;
    color: #05194d;
  `,
  Text: styled.div`
    width: 120px;
    font-size: 20px;
  `,
};

const CarText = ({ data }) => {
  useEffect(() => {}, [data]);
  return (
    <S.Box>
      <S.TextBox>
        <S.Title>파손 부위 : </S.Title>
        <S.Text> {data.parts}</S.Text>
      </S.TextBox>
      <S.TextBox>
        <S.Title>파손 종류 : </S.Title>
        <S.Text> {data.damage}</S.Text>
      </S.TextBox>
      <S.TextBox>
        <S.Title>수리 방법 : </S.Title>
        <S.Text> {data.repair}</S.Text>
      </S.TextBox>
      <S.TextBox>
        <S.Title>수리 비용 : </S.Title>
        <S.Text> {data.cost}</S.Text>
      </S.TextBox>
      <S.FootBox>
        본 모델은 실 가격과 상이할 수 있으니 참고용으로 보시기 바랍니다.
      </S.FootBox>
    </S.Box>
  );
};

export default CarText;
