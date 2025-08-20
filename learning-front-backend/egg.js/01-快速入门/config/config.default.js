// config/config.default.js
// cookie的key值
exports.keys = 'test-cookie';

// 设置模板类型
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.njk': 'nunjucks',
    },
};

// 通过url 获取数据
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};


exports.security = {
    // 跨站点请求
    csrf: {
        ignoreJSON: true, // 默认为 false，设置为 true 时，会忽略所有 content-type 为 `application/json` 的请求
    }
}
