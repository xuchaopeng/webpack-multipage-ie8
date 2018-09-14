const tpl = require('./layout.ejs');

module.exports = tpl({
	title: '首页',
	header: `
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
		<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap.min.css"/>
	`,
	content: `
		<div class="index"></div>
		<h3>css引用图片</h3>
		<div class="img"></div>
		<h3>html引用图片</h3>
		<img src="images/img.gif" height="100" width="100" alt="">
		<br>
		<h3>模板字符串</h3>;
		<div class="list"></div>

		<button type="button" class="btn btn-primary">测试</button>
		
	`,
})