import axios from 'axios';

export const CommuDeleteApi = async (index) => {
  console.log('dd', index);
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/CommuDelete.php',
      { idx: index },
    );
    return response.data;
  } catch (error) {
    console.error('삭제하는 도중 문제가 발생했습니다:', error);
  }
};
