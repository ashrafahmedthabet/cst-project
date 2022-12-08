function getCookie(cookieName) {
    var cookies = allCookieList()
    return cookies[cookieName]
}

function setCookie(cookieName, cookieValue, expiryDate) {
    document.cookie = cookieName + "=" + cookieValue + "; path=/; expires=" + expiryDate
}

function deleteCookie(cookieName) {
    setCookie(cookieName , "" , new Date(0).toUTCString())
}

function allCookieList() {
    var cookiesList = document.cookie.split(";")

    var cookies = {}

    for (let index = 0; index < cookiesList.length; index++) {
        const element = cookiesList[index];
        cookies[element.split("=")[0].trim()] = element.split("=")[1];
    }

    console.log(cookies);
    return cookies;
}

function hasCookie(cookieName) {
    var cookies = allCookieList()
    return cookies.hasOwnProperty(cookieName)
}
