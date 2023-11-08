import React from 'react';
import styled from 'styled-components';
import main_Logo2 from '../../assets/img/후면로고.png';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const S = {
  Footer: styled.footer`
    z-index: 10;
    position: relative;
    height: 120px;
    bottom: 0px;
  `,
  MenuBox: styled.div`
    width: 390px;
    background-color: #143c56;
  `,

  Menu: styled.div`
    max-width: 360px;
    margin: 0 auto;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
  `,

  MenuList: styled.a`
    text-decoration: none;
    color: #fff;
    display: inline-block;
    font-size: 10px;
    opacity: 0.8;
    padding: 20px 0;
    text-align: center;
  `,

  Info: styled.footer`
    max-width: 390px;
    height: 100%;
    margin: 0 auto;
  `,

  InfoBox: styled.div`
    display: block;
    width: auto;
    height: auto;
    margin: 10px 20px;
  `,

  InfoLogo: styled.img`
    position: relative;
    width: 100px;
    height: 35px;
    cursor: pointer;
  `,

  InfoList: styled.div`
    color: #143c56;
    display: inline-block;
    font-size: 10px;
    margin-right: 10px;
    cursor: pointer;
    &::after {
      background: #143c56;
      content: '';
      display: inline-block;
      height: 7px;
      margin-left: 10px;
      vertical-align: 2px;
      width: 1px;
    }
  `,

  InfoText: styled.p`
    color: #9b9eae;
    font-size: 10px;
    margin-top: 16px;
    text-align: center;
  `,
};

const StyledSlider = styled(Slider)`
  .slick-next:before {
    display: none !important;
  }
  .slick-prev:before {
    display: none !important;
  }
  .slick-arrow.slick-prev {
    display: none !important;
  }
  .slick-arrow.slick-next {
    display: none !important;
  }
`;

const LinkData = [
  { href: 'https://www.kidi.or.kr/home/homeIndex.do', text: '보험개발원' },
  { href: 'https://www.hwgi.kr/', text: '한화손해보험' },
  {
    href: 'https://direct.samsungfire.com/index.html',
    text: '삼성화재다이렉트',
  },
  { href: 'https://www.directdb.co.kr/main.do', text: 'DB손해보험' },
  { href: 'https://www.hi.co.kr/serviceAction.do', text: '현대해상화재보험' },
  { href: 'https://www.kbinsure.co.kr/main.ec', text: 'KB손해보험' },
];

const LinkData2 = [
  { href: '/intro', text: '프로젝트 소개' },
  { href: '/commu', text: '유저 커뮤니티' },
  {
    href: '/car',
    text: '차량수리비 안내',
  },
  { href: '/map', text: '주변 정비소 안내' },
];

const Footer = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
  };

  return (
    <S.Footer>
      <S.MenuBox>
        <S.Menu>
          <StyledSlider {...settings}>
            {LinkData.map((link, index) => (
              <S.MenuList
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </S.MenuList>
            ))}
          </StyledSlider>
        </S.Menu>
      </S.MenuBox>
      <S.Info>
        <S.InfoBox>
          <S.InfoLogo src={main_Logo2}></S.InfoLogo>
        </S.InfoBox>
        <S.InfoBox style={{ textAlign: 'center' }}>
          {LinkData2.map((link, index) => (
            <S.InfoList
              onClick={() => navigate(link.href)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </S.InfoList>
          ))}
        </S.InfoBox>
        <S.InfoText>
          © 2023 Re:pair from KNU Capstone Design All right reserved.
        </S.InfoText>
      </S.Info>
    </S.Footer>
  );
};

export default Footer;
