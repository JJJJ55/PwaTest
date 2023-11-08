import React from 'react';
import styled from 'styled-components';
import img from '../assets/img/404.png';
import { useNavigate } from 'react-router-dom';

const S = {
  content: styled.main`
    height: 100vh;
    background-color: #fff;
    justify-content: center;
  `,
  error: styled.img`
    width: 200px;
    height: 200px;
  `,
  errorText: styled.p`
    font-size: 20px;
    font-family: '공체Bold' !important;
    margin-bottom: 30px;
  `,
  GoHome: styled.button`
    width: 200px;
    height: 50px;
    background-color: #c7c7c7;
    border-radius: 15px;
    font-size: 20px;
    font-family: '공체Bold' !important;
  `,
};

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!sessionStorage.getItem('id')) {
      navigate('/home');
    } else {
      navigate('/main');
    }
  };

  return (
    <S.content>
      <S.error src={img} />
      <S.errorText>페이지를 찾을 수 없습니다.</S.errorText>
      <S.GoHome onClick={handleClick}>홈으로 돌아가기</S.GoHome>
    </S.content>
  );
};

export default ErrorPage;
