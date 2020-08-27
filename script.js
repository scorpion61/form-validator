const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

const errorMsg1 = document.getElementById('error1');
const errorMsg2 = document.getElementById('error2');
const errorMsg3 = document.getElementById('error3');
const errorMsg4 = document.getElementById('error4');
const errorIcon1 = document.getElementById('error-icon-1');
const errorIcon2 = document.getElementById('error-icon-2');
const errorIcon3 = document.getElementById('error-icon-3');
const errorIcon4 = document.getElementById('error-icon-4');

const button = document.querySelector('.form__button');

button.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('button clicked');
	showErrors();
});

const showErrors = () => {
	if (firstName.value.trim() === '') {
		errorMsg1.classList.remove('hide');
		errorIcon1.classList.remove('hide');
	} else {
		errorMsg1.classList.add('hide');
		errorIcon1.classList.add('hide');
	}
	if (lastName.value.trim() === '') {
		errorMsg2.classList.remove('hide');
		errorIcon2.classList.remove('hide');
	} else {
		errorMsg2.classList.add('hide');
		errorIcon2.classList.add('hide');
	}
	if (email.value.trim() === '') {
		errorMsg3.classList.remove('hide');
		errorIcon3.classList.remove('hide');
	} else {
		errorMsg3.classList.add('hide');
		errorIcon3.classList.add('hide');
	}
	if (password.value.trim() === '') {
		errorMsg4.classList.remove('hide');
		errorIcon4.classList.remove('hide');
	} else {
		errorMsg4.classList.add('hide');
		errorIcon4.classList.add('hide');
	}
};
