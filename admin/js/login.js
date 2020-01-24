function Login() {
    var email = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;

    window.alert(email + " " + password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        var user = firebase.auth().currentUser;
        window.location = "login.html";


    }, function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error Code: " + errorCode);
        window.alert("Error Message: " + errorMessage);
    });

}