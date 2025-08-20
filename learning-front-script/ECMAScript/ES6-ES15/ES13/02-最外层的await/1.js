function ajax(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve("data-111111")
        }, 1000);
    })
}

let data = await ajax()


export default{
    name:'moduleA',
    data
}