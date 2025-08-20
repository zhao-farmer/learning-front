<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// console.log(uni.setTabBarItem);
			// 修改每一项的名称
			// uni.setTabBarItem({
			// 	index:1,
			// 	text:"自定义"
			// })
			// 右上角提示信息
			// uni.setTabBarBadge({
			// 	index: 1,
			// 	text: '32'
			// })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
