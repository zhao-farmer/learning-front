import { Component } from '@angular/core';

@Component({
  selector: 'pipe-02',
  template: `
    <div class="product-card">
      <!-- 多参数date管道 -->
      <div class="product-date">
        上架时间: {{ product.releaseDate | date:'yyyy年MM月dd日':'UTC+8':'zh-Hans' }}
      </div>

      <h2>{{ product.name | uppercase }}</h2>

      <!-- 多参数currency管道 -->
      <div class="product-price">
        价格: {{ product.price | currency:'CNY':'symbol':'1.2-2' }}
        <span class="original-price">
          (原价: {{ product.originalPrice | currency:'CNY':'symbol':'1.0-0' }})
        </span>
      </div>

      <!-- 链式管道：number → uppercase -->
      <div class="product-rating">
        评分: {{ product.rating | number:'1.1-1' | uppercase }}
      </div>

      <!-- 链式管道：date → slice → lowercase -->
      <div class="product-update">
        最后更新: {{ product.lastUpdated | date:'medium' | slice:0:10 | lowercase }}
      </div>

      <!-- 多参数percent管道 -->
      <div class="product-discount">
        折扣力度: {{ product.discount | percent:'1.0-2' }}
      </div>

      <!-- 复杂链式管道：json → slice → uppercase -->
      <div class="product-specs">
        规格: {{ product.specifications | json | slice:0:30 | uppercase }}...
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      border: 1px solid #ddd;
      padding: 20px;
      margin: 15px;
      max-width: 400px;
      font-family: Arial, sans-serif;
    }
    .product-date {
      color: #666;
      font-size: 0.9em;
      margin-bottom: 5px;
    }
    h2 {
      color: #333;
      margin: 10px 0;
    }
    .product-price {
      color: #e53935;
      font-weight: bold;
      font-size: 1.2em;
    }
    .original-price {
      color: #999;
      font-size: 0.9em;
      text-decoration: line-through;
    }
    .product-rating {
      color: #ff9800;
      margin: 8px 0;
    }
    .product-update {
      color: #2196f3;
      font-size: 0.9em;
    }
    .product-discount {
      color: #4caf50;
      font-weight: bold;
    }
    .product-specs {
      margin-top: 10px;
      color: #795548;
      font-family: monospace;
    }
  `]
})
export class Pipe02Component {
  product = {
    name: 'angular 高级编程指南',
    price: 89.99,
    originalPrice: 99.99,
    rating: 4.8723,
    discount: 0.1, // 10%折扣
    releaseDate: '2023-05-15T08:00:00Z',
    lastUpdated: '2023-10-20T14:30:00Z',
    specifications: {
      pages: 356,
      language: '中文',
      publisher: '技术出版社',
      ISBN: '978-7-121-45678-9'
    }
  };
}
