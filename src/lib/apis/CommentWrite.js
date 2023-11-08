import axios from 'axios';

export const CommentUpdate = async (inputs) => {
  console.log('보낼이메일', inputs.email);
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/CommentWrite.php',
      {
        post_idx: inputs.idx,
        name: inputs.user,
        content: inputs.comment,
        email: inputs.email,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    alert('댓글을 올리는 중 발생했습니다.');
  }
};

export const ReplyUpdate = async (inputs) => {
  console.log('보낼이메일', inputs.email);
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/ReplyWrite.php',
      {
        post_idx: inputs.idx,
        comment_id: inputs.comment_id,
        name: inputs.user,
        content: inputs.comment,
        email: inputs.email,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    alert('댓글을 올리는 중 발생했습니다.');
  }
};
