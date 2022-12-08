function logout(){
    deleteCookie(isLoginCookie);
    window.location.replace("./login.html");
}
let names=["Ashraf Ahmed Thabet","Hassan Mustafa Mohammed","Kareem Ayman Sakr","Shrouk Mohamed"];
let i=0;
let show= setInterval(function(){
    document.getElementById("team").innerHTML=names[i];
    i++;
    if(i>=names.length){
        i=0;
    }
},600);