import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator"
export class CreateLoginDto {
    @IsNotEmpty()
    @IsString()
    @Length(5,10,{
        message:"字符串最小为5，最大不能超过10"
    })
    name:string;
    @IsNumber()
    age:number
}
