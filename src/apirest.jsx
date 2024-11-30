import axios from './axios'

const handleResponse = (response) => {
  const responseObj = {
    status: 500,
    success: false,
    error: null,
    data: null
  };

  if (response && response.status) {
    responseObj.status = response.status;
  } else if (response && response.response) {
    responseObj.status = response.response.status;
  }
  responseObj.success =
    responseObj.status === 200 || responseObj.status === 201;

  if (responseObj.status !== 200 && responseObj.status !== 201) {
    if (response) {
      if (response.response) {
        responseObj.error = response.response.data;
      } else if (response.message) {
        responseObj.error = response.message;
      } else if (response.non_field_errors) {
        responseObj.error = response.non_field_errors[0];
      }
    }
  }

  responseObj.data =
    responseObj.status === 200 || responseObj.status === 201
      ? response.data || response.result
      : null;
  return responseObj;
};


export const get = async (resource, headers) => {
  const response = await axios
    .get(`${resource}`, headers)
    .then(handleResponse)
    .catch(handleResponse);
  return response;
};