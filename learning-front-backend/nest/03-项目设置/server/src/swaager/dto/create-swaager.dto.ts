import { ApiProperty } from "@nestjs/swagger"

export class CreateSwaagerDto {
    @ApiProperty({example:"zhangsan"})
    name:string
    @ApiProperty({example:18})
    age:number
}
