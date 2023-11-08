import React from 'react';
import styled from 'styled-components';
import InfoForm from '../../components/common/InfoForm';
import { RegisterApi } from '../../lib/apis/RegisterApi';
import { useNavigate } from 'react-router-dom';

const S = {
  content: styled.main`
    justify-content: flex-start;
    margin-top: 50px;
  `,
};
const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (inputs) => {
    try {
      const response = await RegisterApi(inputs);
      if (response.success) {
        console.log('회원가입 성공');
        alert('환영합니다!');
        navigate('/home');
      } else {
        console.log('회원가입 실패');
        alert('회원가입에 실패하였습니다! : ' + response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.content>
      <InfoForm type="register" onSubmit={handleRegister} />
    </S.content>
  );
};

export default RegisterPage;
