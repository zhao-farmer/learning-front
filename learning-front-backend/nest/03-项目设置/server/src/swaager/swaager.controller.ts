import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SwaagerService } from './swaager.service';
import { CreateSwaagerDto } from './dto/create-swaager.dto';
import { UpdateSwaagerDto } from './dto/update-swaager.dto';
import { ApiOperation, ApiTags, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('swaager')
@ApiTags("swagger分组")
@ApiBearerAuth()
export class SwaagerController {
  constructor(private readonly swaagerService: SwaagerService) {}

  @Post()
  create(@Body() createSwaagerDto: CreateSwaagerDto) {
    return this.swaagerService.create(createSwaagerDto);
  }

  @Get()
  @ApiOperation({summary:"get请求测试",description:"api使用的rest风格"})
  @ApiQuery({name:"page",description:"分页信息"})
  findAll() {
    return this.swaagerService.findAll();
  }

  @Get(':id')
  @ApiParam({name:"id",description:"用户id",required:true})
  findOne(@Param('id') id: string) {
    return this.swaagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSwaagerDto: UpdateSwaagerDto) {
    return this.swaagerService.update(+id, updateSwaagerDto);
  }

  @Delete(':id')
  @ApiResponse({status:403,description:"自定义返回信息"})
  remove(@Param('id') id: string) {
    return this.swaagerService.remove(+id);
  }
}
