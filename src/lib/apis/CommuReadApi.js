import axios from 'axios';

export const CommuRead = async (itemIdx) => {
  try {
    const response = await axios.get(
      `https://daishi7462.cafe24.com/php/CommuRead.php?idx=${itemIdx}`,
    );
    return response.data;
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
};

export const CommuUpdate = async (inputs) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/CheckCommuPassword.php',
      {
        itemIdx: inputs.index,
        password: inputs.pw,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    alert('비밀번호 확인 중 오류가 발생했습니다.');
  }
};

export const CommuModifyRead = async (itemIdx) => {
  try {
    const response = await axios.get(
      `https://daishi7462.cafe24.com/php/CommuRead.php?idx=${itemIdx}`,
    );
    return response.data;
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
};
