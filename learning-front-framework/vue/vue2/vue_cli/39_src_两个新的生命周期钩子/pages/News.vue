<template>
    <div>
        <ul>
            <li :style="{opacity}">欢迎学习vue></li>
            <li>news001<input type="text"></li>
            <li>news002<input type="text"></li>
            <li>news003<input type="text"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'News',
        // beforeDestroy(){
        //     console.log('News组件即将被销毁了');
        //     console.log(this.timer);
        // },
        // mounted(){
        //     console.log('News组件即将被激活了');
        //     this.timer = setInterval(() => {
        //         vm.opacity -= 0.01
        //         if (vm.opacity <= 0) {
        //             vm.opacity = 1
        //         }
        //     }, 16)
        // },
        //激活
        activated(){
            console.log('News组件即将被激活了');
            this.timer = setInterval(() => {
                console.log('@');
                
                vm.opacity -= 0.01
                if (vm.opacity <= 0) {
                    vm.opacity = 1
                }
            }, 16)
        },
        //失活
        deactivated(){
            console.log('News组件即将被销毁了');
            console.log(this.timer);
        }
    };
</script>


