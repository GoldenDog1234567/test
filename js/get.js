var token;
var maindata;

function print(a) {
	console.log(a)
}

function getImg() {
	mui.ajax('https://api.github.com/repos/GoldenDog1234567/goldendog/contents/img', {
		data: {

		},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {},
		success: function(data) {
			print(data)
			Rdata = []
			Pdata = ""
			for (var i = 0; i < data.length; i++) {
				Rdata.push(data[i].name)
			}
			print(Rdata)
			for (var i = 0; i < Rdata.length; i++) {
				Pdata = Pdata +
					'<div class="ImgShow"><img src="https://raw.githubusercontent.com/GoldenDog1234567/goldendog/main/img/' +
					Rdata[i] + '"></div>'
			}
			print(Pdata)
			document.getElementsByTagName('body')[0].innerHTML = Pdata
		},
		error: function(xhr, type, errorThrown) {

		}
	});
}
getImg()