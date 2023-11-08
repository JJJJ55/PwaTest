import React from 'react';
import styled from 'styled-components';
import ButtonMain from '../common/ButtonMain';
import { useNavigate } from 'react-router-dom';

const S = {
  container: styled.div`
    position: relative;
    width: 390px;
    height: 200px;
    z-index: 10 !important;
  `,
  cummuticate: styled.div`
    width: 340px;
    height: auto;
    margin: 20px auto;
    text-align: center;
  `,
};

const Section4 = () => {
  const navigate = useNavigate();
  return (
    <S.container>
      <S.cummuticate>
        <ButtonMain
          text={'프로젝트 소개'}
          onClick={() => {
            navigate('/intro');
          }}
        />
        <ButtonMain
          text={'유저 커뮤니티'}
          onClick={() => {
            navigate('/commu');
          }}
        />
        <ButtonMain
          text={'주변 정비소 안내'}
          onClick={() => {
            navigate('/map');
          }}
        />
      </S.cummuticate>
    </S.container>
  );
};

export default Section4;
