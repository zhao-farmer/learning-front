// pages/cate/cate.js
Page({
  data:{
    num:1,
    userInfo1:{
    
    },
    userInfo2:{
      name:"张三",
      age:18
    },
    userInfo3:{
      name:"张三",
      age:18
    },
    userInfo4:{
      name:"张三",
      age:18
    },
    userInfo5:{
      name:"张三",
      age:18
    },
    userInfo6:{
      name:"张三",
      age:18
    },
    list1:[1,2,3],
    list2:[1,2,3],
    list3:[1,2,3],
    list4:[1,2,3],
    list5:[
      {id:1,name:"tom"}
    ],
    list6:[1,2,3],
    list7:[1,2,3],
  },

  // 更新num
  updateNum(){
    // 通过赋值的方式直接修改数据
    // 能够修改数据，不能改变页面上的数据
    // this.data.num += 1

    // this.setData 两个作用
    // 1. 更新数据
    // 2. 驱动视图（页面）更新
    this.setData({
      // key： 是需要更新的数据
      // value：是最新的值
      num: this.data.num + 1
    })


    // 获取数据
    console.log(this.data.num);
  },

  // 更新 userInfo
  updateUserInfo(){
    // 新增单个 / 多个 属性
    this.setData({
      // 如果给对象新增属性，可以将key写成数据路径的方式 a.b.c
      "userInfo1.name":"tom",
      "userInfo1.age":"10"
    })

    // 修改单个 / 多个 属性
    this.setData({
      // 如果需要修改对象属性，也可以将key写成数据路径的方式 a.b.c
      "userInfo2.name":"jerry",
      "userInfo2.age":"18"
    })

    // 目前进行新增和修改都是使用数据路径，如果新增和修改的数据量比较小，还可以;
    // 如果修改的数据很多，每次都写数据路径，就太麻烦了
    // 可以使用 ES6 提供的 展开运算符 和 Object.assign()
    
    // ES6 提供的展开运算符
    // 通过展开运算符能够将对象的属性复制给另一个对象
    // 后面的属性会覆盖前面的属性
    const userInfo3 = {
      ...this.data.userInfo3,
      name:'Mia',
      age:20
    }

    this.setData({
      userInfo3
    })

    // Object.assign() 将多个对象合并为一个对象
    const userInfo4 = Object.assign(this.data.userInfo4,{name:'mary'},{age:26})

    this.setData({
      userInfo4
    })

    // 删除单个属性
    delete this.data.userInfo5.age
    this.setData({
      userInfo5: this.data.userInfo5
    })

    // 删除多个属性
    const {age,name,...rest} = this.data.userInfo6

    this.setData({
      userInfo6:rest
    })
  },

  // 更新 list
  updateList(){
    // 新增数组元素
    // 如果直接使用 push 方法，可以直接更新 data , 但是不能更新 页面中的数据
    // this.data.list.push(4)

    // 第一种
    this.data.list1.push(4)
    this.setData({
      list1: this.data.list1
    })

    // 第二种
    const newList1 =  this.data.list2.concat(5)
    this.setData({
      list2:newList1
    })

    // 第三种
    const newList2 = [...this.data.list3,6]
    this.setData({
      list3:newList2
    })

    // 修改数组元素
    this.setData({
      'list4[1]':7,
      'list5[0].name':'jerry'
    })


    // 删除数组元素

    // 第一种
    this.data.list6.splice(1,1)
    this.setData({
      list6: this.data.list6
    })

    // 第二种
    const newList3 = this.data.list7.filter(item=> item!==2)
    this.setData({
      list7: newList3
    })
  }



})