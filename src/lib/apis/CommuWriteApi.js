import axios from 'axios';

export const CommuWrite = async (inputs) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/CommuWrite.php',
      {
        title: inputs.title,
        content: inputs.content,
        name: inputs.name,
        email: inputs.email,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const CommuModify = async (inputs) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/CommuModify.php',
      {
        itemIdx: inputs.itemIdx,
        title: inputs.title,
        content: inputs.content,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
