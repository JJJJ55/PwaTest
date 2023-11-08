import axios from 'axios';

export const CommentRead = async (idx) => {
  try {
    const response = await axios.get(
      `https://daishi7462.cafe24.com/php/CommentRead.php?post_idx=${idx}`,
    );
    return response.data;
  } catch (error) {
    console.error('댓글 불러오기 실패:', error);
  }
};

export const ReplyRead = async (idx) => {
  try {
    const response = await axios.get(
      `https://daishi7462.cafe24.com/php/ReplyRead.php?post_idx=${idx}`,
    );
    return response.data;
  } catch (error) {
    console.error('댓글 불러오기 실패:', error);
  }
};
