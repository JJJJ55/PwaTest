import axios from 'axios';

export const CommuListApi = async () => {
  try {
    const response = await axios.get(
      'https://daishi7462.cafe24.com/php/CommuList.php',
    );
    return response.data;
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
};
