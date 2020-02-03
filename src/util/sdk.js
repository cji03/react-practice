import axios from 'axios';

const apiUrl = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth';

function checkStatus(response) {
  if (!response) { return undefined; }
  if (response.status === 200 || response.status === 304 || response.status === 202) {
    return response;
  }

  const error = new Error(response.statusText);

  error.response = response;

  return Promise.reject(error);
}

const submitUserInfo = (params) => axios({
  method: 'post',
  url: apiUrl,
  data: params,
}).then(checkStatus);

export default {
  submitUserInfo,
}
