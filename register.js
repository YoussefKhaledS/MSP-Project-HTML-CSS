var allusers=[];
function check(form) {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(user==""||pass==""){
        alert("please fill the data");
        location.replace("register.html");
    }
    else{
        if (localStorage.getItem(user)) {
            alert("this user is already used");
            location.replace("register.html");
        }
        else {
            localStorage.setItem(user, pass);
            alert(localStorage.getItem(user));
            location.replace("login.html");
            localStorage.setItem(allusers,user);
        }
    }
}