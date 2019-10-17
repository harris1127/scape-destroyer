const axios = require('axios');

const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';

axios(url)
     .then(response => {
       const html = response.data;
       console.log(html);
     }).catch(console.error);
