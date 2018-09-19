const $header = $('.header');

const header = {
	login: null,

	init: function () {
		this.interActive();
	},

	interActive: function () {
		let _this = this;

		$header.find('.login').on('click', e => {
			import(/* webpackChunkName: "login" */ 'components/login.js')
			.then(module => {
				if(!_this.login) {
					_this.login = new module.default();
				}

				console.log(_this.login);

				_this.login.show({
					onShow: () => {
						console.log('顶部登录-----显示登录弹窗');
					},
					onHide: () => {
						console.log('顶部登录-----关闭登录弹窗');
					},
					onSuccess: d => {
						console.log(d);
						console.log('顶部登录-----登录成功');
					}
				});
			})
			.catch(err => {
				alert(err)
			})
		})
	}
};

header.init();