// define UI variables

let result = document.querySelector('.result');
const generatePwd = document.querySelector('.generate');
const clipBoard = document.querySelector('#clipboard');

const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

loadEventListeners();
// load event listeners

function loadEventListeners() {
  generatePwd.addEventListener('click', randomPwd)
clipBoard.addEventListener('click',
  copyPwd)


}


function randomPwd(e) {
e.preventDefault();
result.innerText =
Math.random().toString(36).slice(2)+ symbols[Math.floor(symbols.length *Math.random())] +
Math.random().toString(36).toUpperCase().slice(2) 
}
// console.log(result);



 function copyPwd (){
	const textarea = document.createElement('textarea');
	const password = result.innerText;

	if (!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard!');
};



