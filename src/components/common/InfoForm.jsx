import styled from 'styled-components';
import ButtonLong from '../common/ButtonLong';
import { useState, useEffect } from 'react';

const S = {
  Header: styled.h1`
    font-weight: bold;
    font-size: 24px;
    color: #000;
    margin-bottom: 60px;
  `,
  Info: styled.div`
    margin-bottom: 20px;
  `,
  Name: styled.div`
    margin-bottom: 20px;
  `,
  Input: styled.input`
    width: 322px;
    height: 40px;
    font-size: 15px;
    color: #000;
    border-bottom: 1px solid black;
    ::placeholder {
      font-weight: bold;
    }
  `,
  Label: styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
  `,
};

const InfoForm = ({ type, onSubmit }) => {
  const title = {
    login: '로 그 인',
    register: '회 원 가 입',
  };
  const headline = title[type];

  const [btnOn, setBtnOn] = useState(false);
  const [data, setData] = useState({
    name: '',
    id: '',
    pw: '',
  });

  useEffect(() => {
    btnOnOff();
  }, [data]);

  const InputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const btnOnOff = () => {
    if (type === 'register') {
      if (!!data.name && !!data.id && data.pw.length > 5) {
        setBtnOn(true);
      } else {
        setBtnOn(false);
      }
    } else {
      if (!!data.id && data.pw.length > 5) {
        setBtnOn(true);
      } else {
        setBtnOn(false);
      }
    }
  };
  const btnSubmit = async (e) => {
    e.preventDefault();
    if (btnOn) {
      // {
      //   if (type === 'register') {
      //     console.log('회원가입경로');
      //   } else {
      //     LoginApi(data, type);
      //   }
      // }
      onSubmit(data);
    }
  };

  return (
    <>
      <S.Header>{headline}</S.Header>
      {type === 'register' && (
        <S.Name>
          <S.Label htmlFor="name">성함</S.Label>
          <S.Input
            name="name"
            value={data.name}
            placeholder="성함을 입력하세요"
            type="text"
            onChange={InputChange}
          />
        </S.Name>
      )}
      <S.Info>
        <S.Label htmlFor="id">이메일</S.Label>
        <S.Input
          name="id"
          value={data.id}
          placeholder="이메일을 입력하세요"
          type="text"
          onChange={InputChange}
        />
      </S.Info>
      <S.Info>
        <S.Label htmlFor="pw">비밀번호</S.Label>
        <S.Input
          name="pw"
          type="password"
          value={data.pw}
          placeholder="8~15자리 비밀번호를 입력하세요"
          maxLength={15}
          onChange={InputChange}
        />
      </S.Info>
      <ButtonLong
        text={type === 'register' ? '가입하기' : '로그인'}
        onClick={btnSubmit}
        active={btnOn}
      />
    </>
  );
};

export default InfoForm;
