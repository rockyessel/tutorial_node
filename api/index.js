const axios = require('axios');

const getData = async () => {
  try {
    const { data } = await axios.get(
      'https://api.musixmatch.com/ws/1.1/artist.get&apikey=73b0e87e345b4c0c4c69daf5689b31ba'
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();
