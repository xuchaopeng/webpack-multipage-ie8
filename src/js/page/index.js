// var { arr } = require('../common/test')
// import { arr } from '../common/test'

import 'style/page/index.less';
import test, { datalist } from 'common/test';

import 'common/header.js';

import J from 'utils/jsonp';


console.log('--------------------------test-------------------------------');
console.log($.fn.jquery);
console.log(test.str);
console.log(datalist);
console.log('--------------------------test-------------------------------');


// import riot from 'riot';
// console.log(riot);
// import '../riot/todo.tag';
// riot.mount('todo', { first: 'first', last: 'last' })

const index = {
	init: function() {
		this.getNewsList();
	},

	getNewsList: function() {
		J('https://pcflow.dftoutiao.com/toutiaopc_jrtt/newspool', {
			params: {
				type: 'toutiao',
				startkey: null,
				newkey: '|',
				pgnum: 2,
				pageSize: 50,
				uid: '15373237235528933',
				qid: 'jrttnull',
				position: '%E4%B8%8A%E6%B5%B7',
				domain: 'kktt',
				sclog: 1,
			},
			timeout: 8000
		}).then( res => {
			if(res.data) {
				for (let i = 0, len= res.data.length; i < len; i++) {
					let item = res.data[i];
					$('#newspool').append(`
						<div class="item">
							<h2>${item.topic}</h2>
						</div>	
					`)
				}
			}
		})
		.catch(error => {
			console.error(error)
		})
	}
}

index.init();

