var userNameIput = document.getElementById("username")
var passwordIput = document.getElementById("password")

var Incorrect = document.getElementsByClassName("Incorrect")[0]

var btn = document.getElementsByTagName("button")[0]


btn.addEventListener('click', clickBtn)

function clickBtn(e) {
    e.preventDefault()
    if (emptyField()) {
        Incorrect.innerHTML = "Please Check All Inputs !"
        return;
    }

    var allCookies = allCookieList();
    if (allCookies[userNameCookie] != userNameIput.value || allCookies[passwordCookie] != passwordIput.value) {
        Incorrect.innerHTML = "unauthorized ! Please Try again"
        return;
    }

    var date = new Date()
    date.setTime(date.getTime() + 60 * 60 * 24 * 1000)

    setCookie(isLoginCookie, "1", date)

    window.location.replace(mainPageUrl)
}

function emptyField() {
    return userNameIput.value == "" || passwordIput.value == ""
}

function hvAcc() {
    deleteCookie("name");
    deleteCookie("password");
    window.location.replace("../index.html");
}