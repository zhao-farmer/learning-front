/* 新增节点 */
//创建一个元素节点
var newNode = document.createElement("div");
//创建一个文本节点
var textNode = document.createTextNode("hello world!");
//克隆一个节点，参数true表示会克隆当前节点以及他的所有子节点，flase表示只克隆当前节点，默认为false
var cloneNode = newNode.cloneNode(true);
//创建文档对象变量，主要用来临时存储节点，大量操纵dom时性能会有很大的提升
document.createDocumentFragment();

/* 删除节点 */
//删除指定的子节点，并返回   deleteNode只是在dom树中删除了，但在内存中还可以访问
var deleteNode = parentNode.removeChild(item);

/* 修改节点 */
// 在指定元素后面新增子节点
node.appendChild(newNode);
//在parentNode的子节点newNode前面插入newNode节点
parentNode.insertBefore(newNode, node);
//用oldNode节点替换parentNode的子节点newNode
parentNode.replaceChild(newNode, oldNode);

/* 查找节点 */
//返回第一个带有指定id的元素
var parentNode = document.getElementById("list");
//返回所有带有指定class的元素的集合(返回数组形式)
var classList = document.getElementsByClassName("wrapper");
//返回所有带有指定标签的元素的集合(返回数组形式)   // *表示查找所有标签
var tagList = document.getElementsByTagName("li");
//返回第一个带有指定id或class的元素
var list = document.querySelector(".wrapper");
//返回所有带有指定id或class的元素
var allList = document.querySelectorAll(".wrapper");



/* 通过节点之间的关系来查找元素节点，dom节点之间关系图以及操作方法如下 */

var node = document.getElementById("list");
// ======classList方法操作元素的class属性==========
//给node节点添加一个class
node.classList.add("test");
//删除node节点名为test的class
node.classList.remove("test");
//替换node节点的class
node.classList.replace("old-class", "new-class");
//node节点是否存在给定的class，如果存在则返回 true，否则返回 false。
var hasClass = node.classList.contains("test");
//如果节点已经存在给定的class则删除，如果没有则添加
node.classList.toggle("test")

//=======给node节点设置id=123==========
node.setAttribute("id", "123");
//获取node节点的id属性值
var id = node.getAttribute("id");
//判断node节点是否存在id属性
var hasAttr = node.hasAttribute("id");

// ==========dataset方法获取元素的data- 属性值=======
//获取node节点的data-id属性值
var dataId = node.dataset.id;
//类似data-user-name属性必须使用驼峰式来访问
var dataName = node.dataset.userName;
// 判断node节点是否有data-id属性
'id' in node.dataset


// =========style方法修改元素的样式=========
//设置color样式
node.style.color = 'red';
//设置font-size样式
node.style.setProperty('font-size', '16px');
//或
node.style.fontSize = '16px'
//移除color属性
node.style.removeProperty('color');

