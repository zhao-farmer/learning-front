const btn1 = document.getElementById('btn1')
 
btn1.onclick = ()=>{
    console.log(123);
    
    alert(
        '此应用的node版本: ' + myAPI.nodeVersion
        + '\n此应用的chrome版本: '+myAPI.chromeVersion 
        + '\n此应用的electron版本: '+myAPI.electronVersion 
    );
}