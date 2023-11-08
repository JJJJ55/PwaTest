import { createGlobalStyle } from 'styled-components';
// 전역 스타일링
import reset from 'styled-reset';
import light from '../assets/font/esamanruLight.ttf';
import bold from '../assets/font/esamanruBold.ttf';
import medium from '../assets/font/esamanruMedium.ttf';
// 리셋
// import spinner from '../../assets/image/spinner.gif';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'ChosunGu';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'ChosunBg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunBg.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
  font-family: '공체Bold';
  src: url(${bold}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: '공체Light';
  src: url(${light}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: '공체Medium';
  src: url(${medium}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: '공체Light' !important;
  }

  .ir {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  body {
    font-weight: 300; /* 100 = 얇게, 300 = 보통, 400 = 두껍게 */
    overflow-y: hidden;
  }
  
  main {
    height: calc(100vh - 108px);
    display: flex; /*이거 땜에 높이가 제한받음*/
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  main::-webkit-scrollbar {
    display: none;
  }

  section {
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    vertical-align: top;
  }

  li {
    list-style: none;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: inherit;
  }

  input, 
  textarea {
    background-color: inherit;
    border: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit; 
    color: #000000;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: #92918A;
  }

  .loading-indicator:before {
    content: '';
    background: rgba(243, 241, 232, 0);
    position: fixed;
    width: 390px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
}


`;

export default GlobalStyle;
