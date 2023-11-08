import axios from 'axios';

export const ReplyDeleteApi = async (index) => {
  console.log('지우는 대댓글 인덱스', index);
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/ReplyDelete.php',
      {
        r_id: index,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    alert('댓글을 삭제 중 오류가 발생했습니다.');
  }
};
