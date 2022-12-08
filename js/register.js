var allCookies = allCookieList()
if (allCookies[userNameCookie] != null && allCookies[passwordCookie] != null) {
    if (allCookies[isLoginCookie] == "1") {
        window.location.replace("./pages/home.html")
    } else {
        window.location.replace(loginPage)
    }
}

window.onload = function (e) {
    var userNameIput = document.getElementById('username');
    var passwordIput = document.getElementById('password');
    var confirmPasswordIput = document.getElementById('confirm_password');

    var Incorrect = document.getElementsByClassName('Incorrect')[0];

    var btn = document.querySelector('.formBtn');

    btn.addEventListener('click', clickBtn);

    function clickBtn(e) {
        e.preventDefault()

        var regx = /^[A-z]+$/

        if (emptyField()) {
            Incorrect.innerHTML = 'Please Check All Inputs !'
            return;
        } else if (!regx.test(userNameIput.value) || userNameIput.value.length < 2) {
            Incorrect.innerHTML = 'Not Valid UserName !'
            return;
        } else if (passwordIput.value.length < 6) {
            Incorrect.innerHTML = 'Wrong ! Password Should be at least 6 Char!'
            return;
        } else if (passwordIput.value !== confirmPasswordIput.value) {
            Incorrect.innerHTML = "Password and Confirm Password Dosn't Match !"
            return;
        }

        var date = new Date()
        date.setTime(date.getTime() + 60 * 60 * 24 * 1000)

        setCookie(userNameCookie, userNameIput.value, date)
        setCookie(passwordCookie, passwordIput.value, date)
        setCookie(isLoginCookie, "1", date)

        window.location.replace(mainPageUrl)
    }

    function emptyField() {
        return (
            userNameIput.value == '' ||
            passwordIput.value == '' ||
            confirmPasswordIput.value == ''
        )
    }
}