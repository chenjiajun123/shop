//mockjs数据模拟设置
const Mock = require('mockjs')
// mockjs会拦截对应的请求地址，返回你配置的数据
const Random = Mock.Random
//主页信息
let indexIntro = [];
indexIntro.push({
	ctitle: Random.ctitle(),
	'Cword|3': [{
		cword: () => Random.cword(3)
	}],
	cparagraph: Random.cparagraph(5, 10)
})
let indexProduct = [];
indexProduct.push({
	leftpic: () => Random.image('200x100', '#FF6600'),
	leftctitle: () => Random.ctitle(),
	rightpic: () => Random.image('200x100', '#FF6600'),
	rightctitle: () => Random.ctitle(),
})
let indexNews = [];
indexNews.push({
	'News|2': [{
		'id|+1': 0,
		cparagraph: () => Random.cparagraph(),
		title: () => Random.ctitle(15),
		Date: () => Random.date(),
		pic: () => Random.image('200x100', '#FF6600'),
	}]
})
//关于我们
let aboutUs = [];
aboutUs.push({
	pic: Random.image('200x100', '#FF6600'),
	cparagraph: Random.cparagraph(15, 20)
})
//新闻列表
let newslist = [];
newslist.push({
	'newslist|10': [{
		'id|+1': 0,
		cparagraph: () => Random.cparagraph(),
		title: () => Random.ctitle(15),
		Date: () => Random.date(),
		pic: () => Random.image('200x100', '#FF6600'),
	}]
})
//产品列表一
let productListOne = [];
productListOne.push({
	'productListOne|12': [{
		'id|+1': 0,
		title: () => Random.ctitle(15),
		"number|1-2000": 100,
		pic: Random.image('100x100', '#FF6600'),
	}]
})
//产品列表二
let productListTwo = [];
productListTwo.push({
	'productListTwo|12': [{
		'id|+1': 12,
		title: () => Random.ctitle(15),
		"number|1-2000": 100,
		pic: Random.image('100x100', '#FF6600'),
	}]
})
//产品列表三
let productListThree = [];
productListThree.push({
	'productListThree|12': [{
		'id|+1': 24,
		title: () => Random.ctitle(15),
		"number|1-2000": 100,
		pic: Random.image('100x100', '#FF6600'),
	}]
})
//底部信息
let proDetails_lunbo = [];
proDetails_lunbo.push(
	Mock.mock({
		'smpic|6': [{
			smpic: () => Random.image(),
			'id|+1': 0
		}]
	}),
)
let footer = [];
footer.push(
	Mock.mock({
		'mid|2': [{
			scentence: () => Random.csentence()
		}]
	}),
	Mock.mock({
		'sub|5': [{
			title: () => Random.cword(4)
		}]

	}),
	Mock.mock({
		'bottom': [{
			scentence: () => Random.csentence()
		}]

	}),
)
Mock.mock('/proDetails_lunbo', proDetails_lunbo);
Mock.mock('/aboutUs', aboutUs);
Mock.mock('/indexIntro', indexIntro);
Mock.mock('/indexProduct', indexProduct);
Mock.mock('/indexNews', indexNews);
Mock.mock('/newslist', newslist);
Mock.mock('/newsDetails', function(options) {
	return Mock.mock({
		'newsDetails': [{
			id: parseInt(eval("(" + options.body + ")").id),
			cparagraph: () => Random.cparagraph(),
			title: () => Random.ctitle(15),
			Date: () => Random.date(),
			pic: () => Random.image('200x100', '#FF6600'),
			county: () => Random.county(true),
			paragraph: () => Random.paragraph(),
			pre: () => Random.ctitle(10),
			next: () => Random.ctitle(5)
		}]
	});

});
Mock.mock('/productListOne', productListOne);
Mock.mock('/productListTwo', productListTwo);
Mock.mock('/productListThree', productListThree);
Mock.mock('/footer', footer);
Mock.mock('/productDetails', function(options) {

	return Mock.mock({
		'productDetails': [{
			id: parseInt(eval("(" + options.body + ")").id),
			"Number|1-2000": 100,
			title: () => Random.ctitle(15),
			stitle: () => Random.ctitle(5),
			'funtion|3': [{
				func: () => Random.ctitle(12)
			}],
			name: () => Random.ctitle(5),
			Func: () => Random.ctitle(2),
			brand: () => Random.ctitle(5),
			model: () => Random.ctitle(5),
			work: () => Random.ctitle(3),
			clean: () => Random.ctitle(3),
			source: () => Random.ctitle(3),
			part: () => Random.ctitle(3),
			color: () => Random.ctitle(3),
			'lunbo|3': [{
				lunbo: () => Random.image('200x100', '#FF6600'),
			}],
			pic: () => Random.image('200x100', '#FF6600')
		}]
	});

});