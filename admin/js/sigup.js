function Signup() {
	var name = document.getElementById("username_signup").value;
	var email = document.getElementById("email_signup").value;
	var password = document.getElementById("password_signup").value;
	var confirmPassword = document.getElementById("confirm_pass_signup").value;
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
	firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
		var user = firebase.auth().currentUser;
		var userId = user.uid;

		user.updateProfile({
			displayName: name
		}).then(function () {
			// Update successful.
		}).catch(function (error) {
			// An error happened.
		});

		firebase.database().ref('users/' + userId).set({
			FirstName: name,
			Password: password,
			Email: email,
			UserID: userId
		})
			.then(function () {

			})
			.catch(function (error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				window.alert("Error Code: " + errorCode);
				window.alert("Error Message: " + errorMessage);
			});
	}, function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		window.alert("Error Code: " + errorCode);
		window.alert("Error Message: " + errorMessage);
	});
}
