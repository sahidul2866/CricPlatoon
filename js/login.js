
function Login() {

    var email = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;
    var logInRef = firebase.database().ref().child("LogIn");
    logInRef.on("child_added", snap => {
    var mail = snap.child("email").val();
    var pass = snap.child("pass").val();
    var admin = snap.child("admin").val();
    if(mail == email && pass == password)
      {
        if(admin == false)
        window.open("index.html","_self");
        if(admin == true)
        window.open("admin/adminIndex.html","_self");
      }
    });
}
