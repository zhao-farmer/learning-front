let show = true;
const minsizeBtn = document.querySelector(".minsize")
const restoreBtn = document.querySelector(".restore")
const maxsizeBtn = document.querySelector(".maxsize")
const closeBtn = document.querySelector(".close")

// 切换展示
function toggleDisplay() {
    show = !show;   
    if(show) {
        restoreBtn.classList.remove('hidden');
        maxsizeBtn.classList.add('hidden');
    } else {
        restoreBtn.classList.add('hidden');
        maxsizeBtn.classList.remove('hidden');
    }
}

// 点击事件
minsizeBtn.onclick= () =>{
    myAPI.controlBtn("minimize")
}
restoreBtn.onclick = () =>{
    toggleDisplay();
    myAPI.controlBtn("maximize")
}
maxsizeBtn.onclick = () =>{
    toggleDisplay();
    myAPI.controlBtn("maximize")
}
closeBtn.onclick = () =>{
    myAPI.controlBtn("close")
}


let show2 = false
const changeRound = document.querySelector(".change-round")
const changeWin = document.querySelector(".change-win")
const app = document.getElementById("app")
const titleBar = document.querySelector(".titleBar")

// 切换展示
function toggleDisplay2() {
    show2 = !show2;   
    if(show2) {
        changeWin.classList.remove('hidden');
        changeRound.classList.add('hidden');
        titleBar.classList.add('hidden');
        app.classList.add('round');
    } else {
        changeWin.classList.add('hidden');
        changeRound.classList.remove('hidden');
        titleBar.classList.remove('hidden');
        app.classList.remove('round');
    }
}

changeRound.onclick = () =>{
    toggleDisplay2();
}
changeWin.onclick = () =>{
    toggleDisplay2();
}

window.addEventListener("mousemove", event => {
    let flag = event.target === document.documentElement;
    // 选区外为true 选区内为false
    myAPI.winChange(flag)
});
