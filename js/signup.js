function Signup() {
	var name = document.getElementById("username_signup").value;
	var email = document.getElementById("email_signup").value;
	var password = document.getElementById("password_signup").value;
	var confirmPassword = document.getElementById("confirm_pass_signup").value;
	var checkAdmin = document.getElementById("agree-term").checked;

	if (password != confirmPassword) {
		window.alert("Password is not matching.");
		return;
	}
	if (password.length < 6 || confirmPassword.length < 6) {
		window.alert("Password must be 6-14 characters.");
		return;
	}
	if (email.length < 6) {
		window.alert("Invalid Email");
		return;
	}
  else{
		saveMsg(name,email,password,checkAdmin);

 }
}
var logInRef = firebase.database().ref().child("LogIn");
function saveMsg(name,email,pass,check){
	var newMessageRef  = logInRef.push();
	newMessageRef.set({
    uname: name,
		pass: pass,
		email: email,
		admin: check
	});
}
