const handleApiErrors = (error, userMessage = '') => {
  const { response, message } = error;
  const status = response ? response.status : null;
  let errorMessage = '';
  switch (status) {
    case 401:
      errorMessage = 'You are not authenticated';
      break;
    case 403:
      errorMessage = 'You are not authorized to access this ressource.';
      break;
    case 500:
      errorMessage = `${userMessage}. There was an internal error, please try again.`;
      break;
    case 503:
      errorMessage = `${userMessage}. The network connection is unavailable at the moment.`;
      break;
    default:
      errorMessage = message;
  }
  return errorMessage;
};

export default handleApiErrors;
