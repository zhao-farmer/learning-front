import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateLoginDto } from '../dto/create-login.dto';

@Injectable()
export class LoginPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    // 值与源数据
    console.log(value,metadata);

    // 反射获取DTO
    const DTO = plainToInstance(CreateLoginDto,value);
    console.log(DTO);
    const errors = await validate(DTO)
    console.log(errors);
    
    if(errors.length){
        throw new HttpException(errors,HttpStatus.BAD_REQUEST)
    }
    return value;
  }
}
