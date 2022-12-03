const apiCall = require('./apiCall2');
url = "https://wizard-world-api.herokuapp.com/Spells";
apiCall.getData(url);

const firstApi = require('./api1Call');
url = 'https://poetrydb.org/title/Ozymandias/lines.json';
firstApi.getData1(url);
