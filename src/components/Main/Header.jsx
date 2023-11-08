import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/img/메인로고.png';
import SideMenuBar from '../SideMenu/SideMenuBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const H = {
  MainBox: styled.header`
    position: fixed;
    width: 390px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
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

const Header = () => {
  const navigate = useNavigate();
  const [sideOn, setSideOn] = useState(false);

  const handleSideClick = () => {
    setSideOn(!sideOn);
  };
  return (
    <H.MainBox>
      <H.MenuBox>
        <H.Menu>
          <H.Logo
            src={Logo}
            onClick={() => {
              navigate('/main');
            }}
          />
          <SideMenuBar onclick={handleSideClick} />
        </H.Menu>
      </H.MenuBox>
    </H.MainBox>
  );
};

export default Header;
