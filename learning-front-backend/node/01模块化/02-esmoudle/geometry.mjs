// geometry.mjs

export const pi = 3.14159;

export function calculateCircumference(radius) {
  return 2 * pi * radius;
}

// 默认导出一个计算面积的函数
export default function calculateArea(radius) {
  return pi * radius * radius;
}
