function check(form) {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    let x=user+"~";
    if (localStorage.getItem(user)==pass) {
        window.open("home.html");
        if(user=="mohamed2002"){
            localStorage.setItem('my',x);
            localStorage.setItem(x,"admin");
            window.location.href="home.html"
        }
        else{
            localStorage.setItem(x,"general");
            localStorage.setItem('my',x);
            window.location.href="home.html"
        }
    }
    else {
        alert("Wrong password");
        location.replace("login.html");
    }
}