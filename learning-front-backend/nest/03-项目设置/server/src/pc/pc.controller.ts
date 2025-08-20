import { Controller, Get,Param, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';

import * as uuid from 'uuid'

@Controller('pc')
export class PcController {

    @Get("parseOld/:id")
    parseParamsOld(@Param('id') id: string){
        console.log(typeof id,"=============>");
        return "id类型:" + typeof id
    }

    @Get("parseNew/:id")
    parseParamsNew(@Param('id',ParseIntPipe) id: number){
        console.log(typeof id,"=============>");
        return "id类型:" + typeof id
    }

    @Get("getUUid")
    getUUid(){
        return "传递的是uuid:"  + uuid.v4()
    }

    @Get("parseUUid/:id")
    parseParamsUUid(@Param('id',ParseUUIDPipe) id: number){
        return "传递的是uuid"
    }
}
