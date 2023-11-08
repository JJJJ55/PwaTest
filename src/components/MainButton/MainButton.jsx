import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import car1 from '../../assets/img/앞범퍼.png';
import car2 from '../../assets/img/뒷범퍼.png';
import car3 from '../../assets/img/휠.png';
import car4 from '../../assets/img/휀더.png';
import car5 from '../../assets/img/도어.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCallback } from 'react';

const S = {
  ButtonBox: styled.div`
    background-color: red;
    width: 340;
    height: 300;
    margin: 0 auto;
  `,
  CarButton: styled.img`
    width: 120px;
    height: 110px;
    border-radius: 30px;
    box-shadow: 1px 1px 3px 3px #143c56;
    cursor: pointer;
    &:active {
      box-shadow: 1px 1px 3px 1px #dadce0 inset;
    }
  `,
  MenuBox: styled.div`
    width: 390px;
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
};
const StyledSlider = styled(Slider)`
  .slick-list {
    margin: -20px;
  }

  .slick-slide {
    padding: 20px;
  }
  .slick-slide {
    padding-right: 10px;
    padding-left: 10px;
  }
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
const MainButton = () => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    centerMode: true,
    centerPadding: '5px',
    beforeChange: () => {
      // 슬라이더가 변경되기 전에 드래그 중이라고 표시
      setIsDragging(true);
    },
    afterChange: () => {
      setIsDragging(false);
    },
  };

  const handleButtonClick = (state) => {
    if (!isDragging) {
      navigate('/car', { state });
    }
  };

  return (
    <S.MenuBox>
      <S.Menu>
        <StyledSlider {...settings}>
          <S.CarButton
            src={car1}
            onClick={() => handleButtonClick('앞 범퍼')}
          />
          <S.CarButton
            src={car2}
            onClick={() => handleButtonClick('뒷 범퍼')}
          />
          <S.CarButton src={car3} onClick={() => handleButtonClick('휠')} />
          <S.CarButton src={car4} onClick={() => handleButtonClick('휀더')} />
          <S.CarButton src={car5} onClick={() => handleButtonClick('도어')} />
        </StyledSlider>
      </S.Menu>
    </S.MenuBox>
  );
};

export default MainButton;
