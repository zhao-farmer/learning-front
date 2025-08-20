
const setDataBtn = document.getElementById("setData");
const getDataBtn = document.getElementById("getData");

// 获取数据并传给预处理
setDataBtn.onclick = ()=>{
    const nameValue =  document.querySelector(".name").value;
    const ageValue =  document.querySelector(".age").value;
    const describeValue = document.querySelector(".describe").value;
    
   let data = {name:nameValue,age:ageValue,des:describeValue}
   myAPI.setData(data)
}

// 获取数据 并展示
getDataBtn.addEventListener("click",async () => {
    let data = await myAPI.getData();
    document.body.innerHTML += `<h2>${ JSON.stringify(data) }</h2>`;
});
