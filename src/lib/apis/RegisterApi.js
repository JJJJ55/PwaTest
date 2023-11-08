import axios from 'axios';

export const RegisterApi = async (inputs) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/Sign_up.php',
      {
        name: inputs.name,
        email: inputs.id,
        password: inputs.pw,
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
