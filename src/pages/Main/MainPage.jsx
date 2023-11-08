import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/img/메인로고.png';
import Footer from '../../components/Main/Footer';
import Section1 from '../../components/Main/Section1';
import Section2 from '../../components/Main/Section2';
import Section3 from '../../components/Main/Section3';
import SideMenu from '../../components/SideMenu/SideMenu';
import { useState } from 'react';
import SideMenuBar from '../../components/SideMenu/SideMenuBar';
import Section4 from '../../components/Main/Section4';
import { useNavigate } from 'react-router-dom';

const H = {
  MainBox: styled.header`
    position: fixed;
    width: 390px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
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
  content: styled.main`
    width: 390px;
    height: 100%;
    justify-content: flex-start;
    background-color: white;
  `,
  Frame: styled.div`
    width: 390px;
    height: 100vh;
    display: flex;
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0px 0px 30px #000;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

const MainPage = () => {
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
              <SideMenuBar onclick={handleSideClick} color={'#fff'} />
            </H.Menu>
          </H.MenuBox>
        </H.MainBox>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </S.Frame>
      <SideMenu sideOn={sideOn} />
    </>
  );
};
export default MainPage;
