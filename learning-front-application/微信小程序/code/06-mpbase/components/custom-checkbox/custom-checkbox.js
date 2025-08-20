Component({
  options:{
    styleIsolation:"shared"
  },

  // 如果 styleIsolation 属性值是 shared
  // 这时候 externalClasses 会失效
  externalClasses:["xxx"],

  /**
   * 组件的属性列表: 组件的对外属性，主要用来接受组件使用者传递给逐渐内部的属性以及数据
   */
  properties: {
    // 如果需要接受传递的属性，有两种方式：全写、简写
    // label:String

    label:{
      // type 组件使用者传递的数据类型
      // 数据类型：String、Boolean、Object、Array
      // 也可以设置为null，表示不限制类型
      type:String,
      // 设置默认值
      value:""
    },
    position:{
      type:String,
      value:"right"
    },
    // 复选框组件公共组件
    // 需要在多个页面，在多个项目中使用
    // 在有的地方默认时选中的效果.有的地方希望模式是没有被选中的效果
    // 怎么处理？
    // 首先让复选框默认还是没有被选中的效果
    // 如果希望复选框默认被选中，这时候传递属性 {check=true} 到复选框组件

    checked:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据：用来定义当前组件内部所需要使用的数据
   */
  data: {
    isChecked:false
  },

  /**
   * 组件的方法列表：在组件中，所有的事件处理程序都需要写到 methods 方法中
   */
  methods: {
    // 更新复选框的状态
    updateChecked(){
      this.setData({
        // isChecked: !this.data.isChecked,
        // label:"在组件内部也可以修改 properties 数据"
        checked: !this.properties.checked,
      })

      // console.log(this.properties.checked);

      // 在 JS 中可以访问和获取 properties 中的数据
      // 但是一般情况下，不建议修改，因为会造成数据流的混乱
      // console.log(this.properties.label);


      // 目前复选框组件的状态是存储在复选框内部的，存储在自定义组件内部的
      // 但是，在以后实际开发中，组件使用者、父组件有时候也需要获取复选框内部的状态
      // 怎么办
      // 这时候，自定义组件内部就需要发射一个自定义事件
      // 如果组件使用者，父组件需要使用数据，绑定自定义事件获取即可
      this.triggerEvent("changechecked",this.data.isChecked)

    }
  },

  observers:{
    // 如果需要将 properties 中数据赋值给data
    // 可以使用 observers 进行处理
    checked:function(newChecked){
      this.setData({
        isChecked:newChecked
      })
    }
  }
  
})