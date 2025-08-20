let { Menu } = require("electron");

let templateArr = [
    {
        label: "菜单1",
        submenu: [
            {
                label: "菜单1-1",
                type: "checkbox",
            },
            // 添加分隔条
            { type: "separator" },

            {
                label: "菜单1-2",
                tyep: "radio",
            },
        ],
    },
    {
        label: "菜单2",
        click() {
            console.log("hello menu");
        },
    },
    {
        label: "菜单3",
        // 为菜单设置 role 属性
        // role 属性可选值：undo、redo、cut、copy、delete、selectAll、paste、minimize、
        // close、quit等，一个菜单项只能设置一个role值。
        role: "reload",
    },
    { label: "菜单4" },
    {
        label: '文件',
        submenu: [
            {
                label: '新建窗口',
                accelerator: 'CmdOrCtrl+N',  // 快捷键定义
                click: () => { console.log('新建窗口'); }
            },
            {
                label: '刷新',
                accelerator: 'F5',  // 功能键
                role: 'reload'
            }
        ]
    }
];

let menu = Menu.buildFromTemplate(templateArr);

module.exports = menu;
