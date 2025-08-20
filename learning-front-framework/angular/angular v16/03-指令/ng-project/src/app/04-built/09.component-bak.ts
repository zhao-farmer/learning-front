import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'baseForml-01',
  template: `
   <form [formGroup]="taskForm" (ngSubmit)="onSubmit()">
    <h2>任务列表管理器</h2>

    <!-- 动态任务列表 -->
    <div formArrayName="tasks">
      <div
        *ngFor="let task of tasks.controls; let i = index"
        [formGroupName]="i"
        class="task-item"
        [class.completed]="task.get('completed')?.value">

        <div class="task-header">
          <h3>任务 #{{ i + 1 }}</h3>
          <button type="button" (click)="removeTask(i)" class="btn-danger">
            删除
          </button>
        </div>

        <div class="form-group">
          <label>任务标题 *</label>
          <input
            type="text"
            formControlName="title"
            placeholder="输入任务标题"
            [class.is-invalid]="task.get('title')?.invalid && task.get('title')?.touched">
          <div *ngIf="task.get('title')?.invalid && task.get('title')?.touched" class="error">
            任务标题是必填项
          </div>
        </div>

        <div class="form-group">
          <label>任务描述</label>
          <textarea
            formControlName="description"
            placeholder="输入任务描述"
            rows="3"></textarea>
        </div>

        <div class="form-group">
          <label>
            <input type="checkbox" formControlName="completed">
            已完成
          </label>
        </div>

        <hr *ngIf="i < tasks.length - 1">
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="form-actions">
      <button type="button" (click)="addTask()" class="btn-secondary">
        添加新任务
      </button>

      <button type="submit" [disabled]="taskForm.invalid" class="btn-primary">
        提交任务列表
      </button>

      <button type="button" (click)="resetForm()" class="btn-warning">
        重置表单
      </button>
    </div>

    <!-- 调试信息 -->
    <div class="debug-info" *ngIf="tasks.length > 0">
      <h4>当前任务数量: {{ tasks.length }}</h4>
      <pre>表单值: {{ taskForm.value | json }}</pre>
      <pre>表单状态: {{ taskForm.status }}</pre>
    </div>
  </form>
  `,
  styles:[`
    .task-item {
      border: 1px solid #ddd;
      padding: 15px;
      margin: 10px 0;
      border-radius: 5px;
      background-color: #f9f9f9;
    }

    .task-item.completed {
      background-color: #e8f5e8;
      border-color: #4caf50;
    }

    .task-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input[type="text"], textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }

    input.is-invalid {
      border-color: #dc3545;
    }

    .error {
      color: #dc3545;
      font-size: 0.875em;
      margin-top: 5px;
    }

    .form-actions {
      margin-top: 20px;
      display: flex;
      gap: 10px;
    }

    button {
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .btn-primary {
      background-color: #007bff;
      color: white;
    }

    .btn-primary:disabled {
      background-color: #6c757d;
      cursor: not-allowed;
    }

    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }

    .btn-danger {
      background-color: #dc3545;
      color: white;
    }

    .btn-warning {
      background-color: #ffc107;
      color: black;
    }

    .debug-info {
      margin-top: 20px;
      padding: 15px;
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 4px;
    }

    pre {
      background-color: #e9ecef;
      padding: 10px;
      border-radius: 4px;
      overflow-x: auto;
    }

  `]
})
export class FormArray01Component {
   taskForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      tasks: this.fb.array([
        this.createTask() // 初始创建一个空任务
      ])
    });
  }

  // 获取 tasks FormArray 的便捷方法
  get tasks() {
    return this.taskForm.get('tasks') as FormArray;
  }

  // 创建单个任务的表单组
  createTask(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: [''],
      completed: [false]
    });
  }

  // 添加新任务
  addTask() {
    this.tasks.push(this.createTask());
  }

  // 删除任务
  removeTask(index: number) {
    this.tasks.removeAt(index);
  }

  // 提交表单
  onSubmit() {
    if (this.taskForm.valid) {
      console.log('提交的任务列表:', this.taskForm.value);
      alert('任务列表已提交！');
    } else {
      alert('请填写所有必填字段！');
    }
  }

  // 重置表单
  resetForm() {
    this.taskForm.reset();
    // 清空数组并添加一个空任务
    this.tasks.clear();
    this.tasks.push(this.createTask());
  }
}
