import axios from 'axios';

export const CarmapListApi = async () => {
  try {
    const response = await axios.get(
      'https://daishi7462.cafe24.com/php/CarmapList.php',
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
