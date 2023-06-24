import axios from 'axios';

const baseUrl = 'https://api.api-ninjas.com/v1/quotes';

const getQuotes = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: baseUrl,
      headers: {
        'x-api-key': process.env.REACT_APP_USER_KEY,
      },
    });

    if (response.error) {
      console.log(response.message);
    } else {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    alert(error);
  }
};

export default getQuotes;
