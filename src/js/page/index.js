// var { arr } = require('../common/test')
// import { arr } from '../common/test'

import 'less/index.less';
import test, { datalist } from '../common/test'


console.log($.fn.jquery);

console.log(test.str);
console.log(datalist);

const index = {
	login: null,

	init: function() {
		this.interActive();
	},

	interActive: function() {
		let _this = this;

		datalist && datalist.length && datalist.forEach(item => $('.list').append(`<p>- ${item}</p>`))

		$('.index')
			.html('<button>点击登录</button>')
			.children('button')
			.css({
				'font-size': 14,
				'padding': '5px 20px',
				'border': '1px solid #ddd',
				'margin': 20,
				'background': '#fff'
			})
			.on('click', e => {
				import(/* webpackChunkName: "login" */ '../common/login.js')
				.then(module => {
					if(!_this.login) {
						_this.login = new module.default();
					}
					_this.login.show({
						onShow: () => {
							console.log('显示登录弹窗');
						},
						onHide: () => {
							console.log('关闭登录弹窗');
						},
						onSuccess: d => {
							console.log(d);
							console.log('登录成功');
						}
					});
				})
				.catch(err => {
					alert(err)
				})
			})

		$('h3').on('click', () => {
			console.log(_this.login);
		})

	},

}

index.init();

