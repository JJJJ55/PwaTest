import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { CommuModifyRead } from '../../lib/apis/CommuReadApi';

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

const Modify = ({ onSubmit }) => {
  const location = useLocation();
  const index = location.state.idx;
  const [btnOn, setBtnOn] = useState(false);
  const [data, setData] = useState({
    itemIdx: '',
    title: '',
    content: '',
    password: '',
  });

  useEffect(() => {
    btnOnOff();
  }, [data]);

  useEffect(() => {
    // 이펙트 함수를 통해 데이터를 가져옵니다.
    GetModifyRead(index);
  }, []);

  const GetModifyRead = async (index) => {
    try {
      const response = await CommuModifyRead(index);
      setData(response);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  const InputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      itemIdx: index,
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

export default Modify;
