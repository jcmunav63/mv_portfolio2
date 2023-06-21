function recordInputData() {
}

function getDataToInputs() {
  const forms = document.getElementById('form1');

  const storedData = JSON.parse(localStorage.getItem('form1'));
  const data1 = storedData.name;
  const data2 = storedData.email;
  const data3 = storedData.message;

  forms.querySelector('#names').value = data1;
  forms.querySelector('#email').value = data2;
  forms.querySelector('#textarea').value = data3;

  forms.addEventListener('submit', recordInputData);
}

function insertDataFirstTime() {
}

function checkDataExists() {
  if (localStorage.getItem('form1') !== undefined && localStorage.getItem('contactForm')) {
    getDataToInputs();
  } else {
    insertDataFirstTime();
    getDataToInputs();
  }
}

const myBody = document.body;
myBody.onload = checkDataExists();