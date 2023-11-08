import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useState } from 'react';
import { useEffect } from 'react';
const S = {
  InputBox: styled.div`
    display: block;
    width: 370px;
    height: 40px;
    border: solid 1px #dadada;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    margin: 0 auto;
  `,
  ButtonBox: styled.div`
    width: auto;
    height: auto;
    position: absolute;
    right: 0;
  `,
  Box: styled.div`
    position: relative;
    width: 370px;
    height: 35px;
    border-radius: 10px;
    margin: 10px auto;
    display: flex;
  `,
  TitleInput: styled.input`
    display: block;
    width: 370px;
    height: 40px;
    border: solid 1px #dadada;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    margin: 5px auto;
  `,
  Text: styled.input`
    display: block;
    width: 370px;
    height: 300px;
    border: solid 1px #dadada;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    margin: 5px auto;
  `,
  PwInput: styled.input`
    display: block;
    width: 300px;
    height: 32px;
    border: solid 1px #dadada;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
  `,
};

const Make = ({ Uname, Uemail, onSubmit }) => {
  const [btnOn, setBtnOn] = useState(false);
  const [data, setData] = useState({
    title: '',
    name: Uname,
    content: '',
    email: Uemail,
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
    if (!!data.title && !!data.content) {
      setBtnOn(true);
    } else {
      setBtnOn(false);
    }
  };

  const btnSubmit = async (e) => {
    e.preventDefault();
    if (btnOn) {
      onSubmit(data);
    }
  };

  return (
    <>
      <S.TitleInput
        name="title"
        type="text"
        maxlength="30"
        placeholder="제목을 입력하세요."
        value={data.title}
        onChange={InputChange}
      />
      <S.Text
        name="content"
        type="text"
        maxlength="1000"
        placeholder="내용을 입력하세요."
        value={data.content}
        onChange={InputChange}
      />
      <S.Box>
        <S.ButtonBox>
          <Button text={'등 록 하 기'} onClick={btnSubmit} active={btnOn} />
        </S.ButtonBox>
      </S.Box>
    </>
  );
};

export default Make;
