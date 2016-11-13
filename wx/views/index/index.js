const app = getApp();

Page({
	data: {
		message: "Hello COOLFE",
		list:[]
	},
	onLoad(){
		const msg = app.helloworld();
		console.log(msg);
		console.log(app.num);
		console.log(app.data);
		this.setData({
			// message: Date.now()
		})
		const _this = this;
		wx.request({
		    url: 'http://api.douban.com/v2/movie/in_theaters',
		    data: {},
		    header: {
		        "Content-Type": "application/json"
		    },
		    success: function(res) {
		         console.log(res.data);
		        _this.setData({
		        	list: res.data.subjects
		        })
		    }
		})
	}
})