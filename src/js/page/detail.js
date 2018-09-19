import 'style/page/detail.less';
import test, { datalist } from 'common/test';

import 'common/header.js';

const detail = {
	login: null,

	init: function() {
		this.interActive();
	},

	interActive: function() {
		let _this = this;
		$('.detail')
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
				import(/* webpackChunkName: "login" */ 'components/login.js')
				.then(module => {
					console.log(module);
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
	}
}

detail.init();

