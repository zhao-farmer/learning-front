import {
  Controller,
  Post,
  Get,
  Res,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import type { Response } from 'express';
import { zip } from 'compressing';

@Controller('upload')
export class UploadController {
  // 上传文件
  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log(file);
    return true;
  }
  // reponse.download下载
  @Get('export')
  downLoad(@Res() res: Response) {
    const url = join(__dirname, '../images/1754563534169.png');
    res.download(url);
  }
  // 字节流下载
  @Get('stream')
  async down(@Res() res: Response) {
    const url = join(__dirname, '../images/1754563534169.png');
    const tarStream = new zip.Stream();
    await tarStream.addEntry(url);

    res.setHeader('Content-Type', 'application/octet-stream');

    res.setHeader('Content-Disposition', `attachment; filename=xiaoman`);

    tarStream.pipe(res);
  }
}
