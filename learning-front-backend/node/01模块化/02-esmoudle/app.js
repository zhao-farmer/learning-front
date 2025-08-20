// app.mjs (假设 package.json 中有 "type": "module", 或者此文件为 app.mjs)

// 导入命名导出和默认导出
import calculateArea, { calculateCircumference, pi } from './geometry.mjs';

// 也可以分开导入
// import calculateArea from './geometry.mjs';
// import { calculateCircumference, pi } from './geometry.mjs';

const radius = 5;

const area = calculateArea(radius);
const circumference = calculateCircumference(radius);

console.log(`半径 ${radius}:`);
console.log(` - 面积: ${area}`);          // 输出:  - 面积: 78.53975
console.log(` - 周长: ${circumference}`); // 输出:  - 周长: 31.4159
console.log(` - PI 值: ${pi}`);           // 输出:  - PI 值: 3.14159

// 动态导入示例
async function loadGeometryDynamically() {
  const geo = await import('./geometry.mjs');
  console.log('动态加载:', geo.default(2)); // 动态加载: 12.56636
}
loadGeometryDynamically();
