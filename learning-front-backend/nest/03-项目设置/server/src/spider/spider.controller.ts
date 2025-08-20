import { Controller, Get } from '@nestjs/common';

import * as cheerio from 'cheerio';
import { SocksProxyAgent } from 'socks-proxy-agent';
import https from 'https';
import fs from 'fs';
const fsp = fs.promises;


const agent = new SocksProxyAgent("socks://127.0.0.1:1080");
// 获取网页
function fetchData(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { agent }, response => {
            let data = "";

            response.on("data", chunk => {
                data += chunk;
            });

            response.on("end", () => {
                resolve(data);
            });
        }).on("error", error => {
            reject(error);
        });
    });
}

// 获取文件
function fetchDownload(urlStr,fileStream) {    
    // 解决 referer：unsafe-url
    const headers = {
        'referer': 'https://meirentu.cc/pic/',
    };

    return new Promise((resolve, reject) => {
        https.get(urlStr,
            {   
                agent,
                headers:headers
            }, response => {
            // 将响应数据管道传输到文件
            response.pipe(fileStream);

            // 监听完成事件
            fileStream.on('finish', () => {
                fileStream.close();
            });
        }).on("error", error => {
            reject(error);
        });
    });
}

// 间隔时间
function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(resolve, 500);
    });
}

@Controller('spider')
export class SpiderController {

  @Get()
  async getNetWorkImage() {
    console.log('==============  开始操作 =================');

    let index = 1;
    const nextText = '下页';
    // url 集合
    const urls:string[] = [];

    let title = '';
    // 获取url 数据
    async function getData() {
      try {
        const result = await fetchData(
          `https://meirentu.cc/pic/263296808615-${index}.html`,
        );
        // console.log(result);
        
        if (!result) return;
        // 获取对象
        const $ = cheerio.load(result + "");
        // 获取头部
        let head = $('.item_title');
        // 获取标题
        title = head.find('h1').text();
        if (index == 1) {
          // 创建目录
          await fsp.mkdir(title);

          let file = title + '/描述信息.txt';

          // 创建文本文件
          await fsp.writeFile(file, '', 'utf8');

          // 描述信息
          head.find('article p').each(function () {
             fsp.appendFile(file, $(this).text() + '\n\n', 'utf8');
          });
        }

        // 创建图片
        const page = $('.content .page').find('a');

        // 获取页数数组
        const pageArray = page
          .map(function () {
            return $(this).text();
          })
          .toArray();

        // 不是最后一页 进行递归
        if (pageArray.includes(nextText)) {
          // 获取图片
          // 第一个 content 的img图片
          $('.content').eq(0).find('img').each(function () {
              let srcStr = $(this).attr('src');
              if (srcStr) {
                urls.push(srcStr + "");
              }
            });

          index++;
          // 开启递归
          await getData();
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    await getData()

    console.log(urls);
    

    // 开始下载
    for (const newUrl of urls) {
        // 等待1s 后调用
        await waitOneSecond();
        // 文件地址
        const fileStream = fs.createWriteStream(title + "/" + new Date().getTime() + '.jpg');
        // 开始写入
        fetchDownload(newUrl,fileStream)
    } 

    return 'cos';
  }
}
