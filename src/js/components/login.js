import 'style/common/login.less';

const LOGIN_HTML = `<div class="login-wrap" id="login-panel">
		<div class="login-panel">
			<div class="panel-header">
				<h3>登录</h3>
				<span class="login-close">x</span>
			</div>
			<input type="text" placeholder="请输入用户名">
			<input type="password" placeholder="请输入密码">
			<span class="btn-submit">登录</span>
		</div>
	</div>`;

export default class Login {
	constructor() {
		this.ablesubmit = true;
		this.init();
	}

	init() {
		let _this = this,
			$login = $('#login-panel');
		$(document)
		// 点击关闭按钮
		.on('click', '.login-close', () => _this.hide())

		// 点击背景关闭
		.on('click', '.login-wrap', e => {
			if(!$(e.target).closest('.login-panel').length && !_this.backdrop) {
				_this.hide()
			}
		})

		// 点击登录按钮
		.on('click', '.btn-submit', function () {
			_this.ablesubmit && _this.logined()
		})
	}

	show(opts) {
		if(!$('#login-panel').length) {
			$('body').append(LOGIN_HTML).find('.login-wrap').show();
		} else {
			$('#login-panel').show();
		}
		if(opts) {
			opts.onShow && opts.onShow();
			this.backdrop = !!opts.backdrop;
			this.onSuccess = opts.onSuccess || null;
			this.onHide = opts.onHide || null;
		}
	}

	hide() {
		$('#login-panel').hide();
		this.onHide && this.onHide();
	}

	logined() {
		let _this = this;
		_this.ablesubmit = false;
		const api_data = {
			'msg': '登录成功',
			'name': 'username'
		};
		_this.ablesubmit = true;
		_this.hide();
		_this.onSuccess && _this.onSuccess(api_data)
	}
}
