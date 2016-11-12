// 指定生命周期事件
App({
	helloworld() {
		return "helloworld";
	},
	data: {},
	num: 100,
	onLaunch:function () {
		console.log("onLauch");
	}
})