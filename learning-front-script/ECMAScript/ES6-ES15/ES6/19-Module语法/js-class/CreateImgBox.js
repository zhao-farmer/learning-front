
import { CreateBox } from "./CreateBox.js"
class CreateImgBox extends CreateBox{
            
    constructor(select,data){
        super(select,data)
        this.imgUrl = data.url
        this.render()
    }

    render(){
        super.render()
        let oimg = this.ele.querySelector("img")
        console.log(this.imgUrl);
        
        oimg.src = this.imgUrl
    }
}
export default CreateImgBox