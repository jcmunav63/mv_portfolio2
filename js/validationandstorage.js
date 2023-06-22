// EMAIL VALIDATION SCRIPT
const form = document.getElementById('form1');
const { email } = form;

function emailValidation(mail) {
  const pattern = new RegExp(/^[0-9a-z_]+@[0-9a-z.]+\.[a-z]{2,4}$/);
  if (pattern.test(mail) === false) {
    return false;
  }
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const isValid = emailValidation(email.value);
  const modal2 = document.getElementById('myModal');
  const span = document.getElementsByClassName('close')[0];

  if (!isValid) {
    modal2.style.display = 'block';
    span.onclick = function clickedX() {
      modal2.style.display = 'none';
    };
    window.onclick = function clickedOut(event) {
      if (event.target === modal2) {
        modal2.style.display = 'none';
      }
    };
  } else {
    recordInputData();
    form.submit();
    form.reset();
  }
});

// PRESERVE DATA IN THE BROWSER (LOCAL STORAGE)
function recordInputData() {
  const nameInput = document.querySelector('#names').value;
  const emailInput = document.querySelector('#email').value;
  const msgInput = document.querySelector('#textarea').value;

  const myContactData2 = { name: nameInput, email: emailInput, message: msgInput };
  localStorage.setItem('form1', JSON.stringify(myContactData2));
}

function getDataToInputs() {
  const forms = document.getElementById('form1');

  const storedData = JSON.parse(localStorage.getItem('form1'));
  const data1 = storedData.name;
  const data2 = storedData.email;
  const data3 = storedData.message;

  if (data1 === "" && data2 === "" && data3 === "") {
    data1 = 'Francisco Garcia';
    data2 = 'fgarcia@gmail.com';
    data3 = 'This is my message';
  }
  forms.querySelector('#names').value = data1;
  forms.querySelector('#email').value = data2;
  forms.querySelector('#textarea').value = data3;
}

function insertDataFirstTime() {
  const myContactData = { name: 'Francisco Garcia', email: 'fgarcia@gmail.com', message: 'This is my message' };
  localStorage.setItem('form1', JSON.stringify(myContactData));
}

function checkDataExists() {
  if (localStorage.getItem('form1') !== undefined && localStorage.getItem('form1')) {
    getDataToInputs();
  } else {
    insertDataFirstTime();
    getDataToInputs();
  }
}

const myBody = document.body;
myBody.onload = checkDataExists();
