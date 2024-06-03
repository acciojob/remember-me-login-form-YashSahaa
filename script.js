//your JS code here. If required.
const submit = document.getElementById('submit');
const username = document.getElementById('username');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const form = document.querySelector('form');

let item1 = localStorage.getItem('Username');
let item2 = localStorage.getItem('Password');

if(item1!=null || item2!=null){
	let btn = document.createElement('button');
	btn.setAttribute("id","existing");
	btn.setAttribute("type","submit");
	btn.innerText = "Login as existing user.";
	form.append(btn);

	btn.addEventListener("click",(event)=>{
		event.preventDefault()
		alert("Logged in as " + localStorage.getItem('Username'));
	})
}

submit.addEventListener("click",(event)=>{
	event.preventDefault()
	if(checkbox.checked){
		localStorage.setItem("Username", username.value);
		localStorage.setItem("Password", password.value);
	}
	else{
		localStorage.removeItem("Username");
		localStorage.removeItem("Password");
	}
	alert("Logged in as " + username.value);
})