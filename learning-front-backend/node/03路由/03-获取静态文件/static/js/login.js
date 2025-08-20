var getlogin = document.querySelector("#getlogin");
var postlogin = document.querySelector("#postlogin");
var username = document.querySelector("#username");
var password = document.querySelector("#password");

getlogin.onclick = () => {
    let pathUrl = `/api/login?username=${username.value}&password=${password.value}`;
    //get请求
    fetch(pathUrl).then(res => res.json()).then(res => {

        console.log(window.location);
        window.open("http://" + window.location.host + "/home")
    })

}
postlogin.onclick = () => {
    let options = {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
        Headers: {
            "Content-Type": "application/json"
        }
    }
    //post请求
    fetch("/api/loginpost", options).then(res => res.text()).then(res => {
        console.log(res);
        window.open("http://" + window.location.host + "/home")
    })
}