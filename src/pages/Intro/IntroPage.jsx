import React from 'react';
import styled from 'styled-components';
import SideMenuBar from '../../components/SideMenu/SideMenuBar';
import Logo from '../../assets/img/후면로고.png';
import Intro1 from '../../assets/img/Intro1.png';
import Intro2 from '../../assets/img/Intro2.png';
import Intro3 from '../../assets/img/Intro3.png';
import { useState } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import '../../assets/font/Font.css';
import IntroImg from '../../assets/img/test.png';
import sideImg from '../../assets/img/logo-removebg-preview.png';
import Footer from '../../components/Main/Footer';
import useScrollImg from '../../hook/useScrollImg';
import { useNavigate } from 'react-router-dom';

const H = {
  MainBox: styled.header`
    position: fixed;
    width: 390px;
    height: 50px;
    background-color: #fff;
    z-index: 100;
    opacity: 0.8;
  `,

  MenuBox: styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 390px;
    height: 50px;
  `,

  Menu: styled.div`
    display: flex;
    justify-content: space-between;
    width: 390px;
    height: 35px;
  `,

  Logo: styled.img`
    position: relative;
    width: 100px;
    height: 35px;
    margin-left: 20px;
    cursor: pointer;
  `,
  MenuBar: styled.div`
    width: 30px;
    height: 35px;
    border: 1px solid red;
  `,
};

const S = {
  Frame: styled.div`
    width: 390px;
    min-height: 100vh;
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    overflow: auto;
    /* justify-content: center; */
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  Main: styled.div`
    width: 390px;
    height: 1000px;
    position: relative;
    top: 50px;
  `,
  Title: styled.div`
    padding-top: 60px;
    padding-left: 20px;
    position: relative;
    width: 350px;
    height: 150px;
    font-size: 40px;
    color: #05194d;
    font-family: '공체Bold' !important;
  `,
  SubTitle: styled.div`
    display: block;
    padding-top: 20px;
    padding-left: 20px;
    position: relative;
    width: 350px;
    height: 80px;
    font-size: 30px;
    color: black;
    font-weight: bold;
    font-family: '공체Medium' !important;
  `,
  IntroImg: styled.div`
    position: relative;
    width: 390px;
    height: 400px;
    background-image: url(${IntroImg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: bottom;
  `,
  SubIntro: styled.div`
    display: table-cell;
    vertical-align: middle;
    background-color: #05194d;
    padding-left: 20px;
    width: 390px;
    height: 100px;
    justify-content: space-between;
  `,
  Subtext: styled.div`
    width: 250px;
    height: 80px;
    color: #fff;
    font-family: '공체Medium' !important;
    line-height: 30px;
    font-size: 20px;
    float: left;
    padding: 10px 0;
  `,
  imgbox: styled.div`
    width: 100px;
    height: 80px;
    background-image: url(${sideImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    float: right;
    margin-right: 15px;
    opacity: 0.3;
  `,
  IntroBox: styled.div`
    margin-top: 30px;
    position: relative;
    width: 390px;
    height: 1000px;
    top: 0;
    bottom: 0;
  `,
  ScrollBox: styled.div`
    width: 390px;
    height: 300px;
    display: flex;
    align-items: center;
  `,
  ScrollText: styled.div`
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 100px;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    line-height: 20px;
    font-family: '공체Light';
  `,

  ScrollImg: styled.img`
    width: 200px;
    height: 200px;
    margin: 13px;
    background-color: #ececf1;
    border-radius: 30px;
  `,
  SubText2: styled.div`
    display: flex;
    width: 350px;
    height: 50px;
    color: #05194d;
    font-size: 15px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  `,
  FontBlue: styled.span`
    font-family: '공체Bold' !important;
    color: #05194d;
    font-size: 18px;
  `,
};

const IntroPage = () => {
  const animatedItem = {
    0: useScrollImg('up', 1, 0),
    1: useScrollImg('up', 1, 0.2),
    2: useScrollImg('up', 1, 0.3),
    3: useScrollImg('up', 1, 0.8),
  };
  const [sideOn, setSideOn] = useState(false);

  const handleSideClick = () => {
    setSideOn(!sideOn);
  };
  const navigate = useNavigate();
  return (
    <>
      <S.Frame>
        <H.MainBox>
          <H.MenuBox>
            <H.Menu>
              <H.Logo src={Logo} onClick={() => navigate('/main')} />
              <SideMenuBar onclick={handleSideClick} color={'#000'} />
            </H.Menu>
          </H.MenuBox>
        </H.MainBox>
        <S.Main>
          <S.Title>리:페어</S.Title>
          <S.SubTitle>차 수리도 이제는 똑똑하게</S.SubTitle>
          <S.IntroImg></S.IntroImg>
          <S.SubIntro>
            <S.Subtext>
              딥러닝 예측모델로 <br />내 차 진단과 견적도 확인
            </S.Subtext>
            <S.imgbox />
          </S.SubIntro>
          <S.IntroBox>
            <S.ScrollBox {...animatedItem[0]}>
              <S.ScrollImg src={Intro1} />
              <S.ScrollText>
                <S.FontBlue>예측모델 구현</S.FontBlue>
                <br />
                <br />
                사진 한장으로 AI가 <br />
                손상도 예측, 견적 제시
              </S.ScrollText>
            </S.ScrollBox>
            <S.ScrollBox {...animatedItem[1]}>
              <S.ScrollText>
                <S.FontBlue>유저 커뮤니티</S.FontBlue>
                <br />
                <br />
                자동차에 관한 <br /> 정보는 모두 여기에
              </S.ScrollText>
              <S.ScrollImg src={Intro2} />
            </S.ScrollBox>
            <S.ScrollBox {...animatedItem[2]}>
              <S.ScrollImg src={Intro3} />
              <S.ScrollText>
                <S.FontBlue>주변 정비소 검색</S.FontBlue>
                <br />
                <br />
                클릭 한번으로
                <br />
                정비소 검색 끝
              </S.ScrollText>
            </S.ScrollBox>
            <S.SubText2 {...animatedItem[3]}>
              630,000개 데이터로 학습한 AI모델을 경험해보세요
            </S.SubText2>
          </S.IntroBox>
          <Footer />
        </S.Main>
      </S.Frame>

      <SideMenu sideOn={sideOn} />
    </>
  );
};

export default IntroPage;
