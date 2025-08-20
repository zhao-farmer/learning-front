// 点击按钮 弹出文件选择对话框
let openDialogBtn = document.querySelector('#open_dialog_btn');
let detectionBtn1 = document.getElementById("detection_btn1")
let detectionBtn2 = document.getElementById("detection_btn2")
let detectionBtn3 = document.getElementById("detection_btn3")
let openBaiduBtn = document.getElementById("open_baidu_btn")
let openBbBtn = document.getElementById("open_bb_btn")


openDialogBtn.addEventListener('click',function() {
    myAPI.openDialog()
})


// 三种提示信息
detectionBtn1.onclick = () =>{
    new window.Notification("渲染进程",{ body: '渲染进程的消息内容' });
}
detectionBtn2.onclick = () =>{
    myAPI.showNotify1()
}
detectionBtn3.onclick = () =>{
    myAPI.showNotify2()
}


document.addEventListener('dragover', ev => {
    ev.preventDefault();
    console.log('请在此处放置文件');
});
document.addEventListener('drop', ev => {
    console.log(ev.dataTransfer.files);
    ev.preventDefault();
});

openBaiduBtn.onclick = () =>{
    myAPI.openBaidu()
}
openBbBtn.onclick = () =>{
    myAPI.openBB()
}
