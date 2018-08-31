// var { arr } = require('../common/test')
// import { arr } from '../common/test'

import test, { datalist } from '../common/test'

// import $ from 'jquery'

console.log($.fn.jquery);

import 'less/index.less';

console.log(test.str);
console.log(datalist);

$('.index').text('首页').css({ 'font-size': 30 })

datalist && datalist.length && datalist.forEach(item => $('.list').append(`<p>- ${item}</p>`))
