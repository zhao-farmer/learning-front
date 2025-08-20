
export class CreateBox{
    constructor(select,data){
        this.ele = document.querySelector(select)
        this.title = data.title
        this.list= data.list

        //初始化后 立即执行render
        this.render()
    }

    render(){
        let oh1 = this.ele.querySelector("h1")
        let oul = this.ele.querySelector("ul")
        oh1.innerHTML = this.title
        oul.innerHTML =  this.list.map(item =>{  
            return `<li>${item}</li>`
        }).join("")
    
    }
}