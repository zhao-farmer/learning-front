let { Menu } = require("electron");
const menuTemplate = [
    { label: '文件', submenu: [
        { 
            label: '打开', 
            click: () => 
                console.log('打开文件') 
        },
        { type: 'separator' },
        { role: 'quit' }
    ]},
    { label: '编辑', submenu: [
        { role: 'copy' },
        { role: 'paste' }
    ]}
];

let mouseMenu = Menu.buildFromTemplate(menuTemplate);

module.exports = mouseMenu;