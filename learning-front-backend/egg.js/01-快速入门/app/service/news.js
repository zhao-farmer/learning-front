// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1) {
        // 1.读取配置
        const { serverUrl, pageSize } = this.config.news;

        // 2. 获取列表id
        const { data: idList } = await this.ctx.curl(
            `${serverUrl}/topstories.json`,
            {
                data: {
                    orderBy: '"$key"',
                    startAt: `"${pageSize * (page - 1)}"`,
                    endAt: `"${pageSize * page - 1}"`,
                },
                dataType: 'json',
            }
        );

        // 3. 通过id 获取列表数据
        const newsList = await Promise.all(
            Object.keys(idList).map((key) => {
                const url = `${serverUrl}/item/${idList[key]}.json`;
                return this.ctx.curl(url, { dataType: 'json' });
            })
        );
        // 4. 返回其中的data数据
        return newsList.map((res) => res.data);
    }
}

module.exports = NewsService;