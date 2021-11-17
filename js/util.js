const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 1000;
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '1000px';
  alertContainer.style.margin = '0 auto';
  alertContainer.style.borderRadius = '10px';
  alertContainer.style.left = 0;
  alertContainer.style.top = '500px';
  alertContainer.style.right = 0;
  alertContainer.style.border = '3px solid grey';
  alertContainer.style.textTransform = 'uppercase';
  alertContainer.style.padding = '30px 9px';
  alertContainer.style.fontSize = '40px';
  alertContainer.style.fontWeight = 'bold';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.color = 'tomato';
  alertContainer.style.backgroundColor = 'rgba(180, 180, 180, 0.9)';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showSuccessMessage = () => {
  const successFragment = document.querySelector('#success').content.querySelector('.success');
  return successFragment.cloneNode(true);
};

const showErrorMessage = () => {
  const errorFragment = document.querySelector('#error').content.querySelector('.error');
  return errorFragment.cloneNode(true);
};

export {showAlert, showSuccessMessage, showErrorMessage};
