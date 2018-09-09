//正则验证
function RegTelPhone(Telphone) {
	var myreg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/;
	var myReg = /^[1][3,4,5,7,8][0-9]{9}$/;

	if(!(myreg.test(Telphone) || myReg.test(Telphone))) {
		return false
	} else {
		return true
	}
}

function Regmima(pasword) {
	var myreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
	if(!myreg.test(pasword)) {
		return false
	} else {
		return true
	}
}

function Regemail(email) {
	var myreg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(!myreg.test(email)) {
		return false
	} else {
		return true
	}
}

function Regusername(username) {

	if(username.length == 0) {
		return false
	} else {
		return true
	}
}

function RegIdnumber(idnumber) {
	var myreg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if(!myreg.test(idnumber)) {
		return false
	} else {
		return true
	}
}

function Regcompany(company) {
	var myreg = /^(([\u4e00-\u9fff]{2,50})|([a-z\.\s\,]{2,50}))$/i;
	if(!myreg.test(company)) {
		return false
	} else {
		return true
	}
}

function Regsale(sale) {
	var myreg = /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/;
	if(!myreg.test(sale)) {
		return false
	} else {
		return true
	}
}

function RegorderNumber(orderNumber) {
	var myreg = /(^[0-9]{3,4}\-[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/;
	var myReg = /^[1][3,4,5,7,8][0-9]{9}$/;
	var MyReg = /^[0-9a-zA-Z]{10,}$/
	if(!(myreg.test(orderNumber) || myReg.test(orderNumber) || MyReg.test(orderNumber))) {
		return false
	} else {
		return true
	}
}

function code(code) {
	if(!(code == this.msg)) {
		return false
	} else {
		return true
	}
}
export default {
	RegTelPhone,
	Regmima,
	Regemail,
	Regusername,
	RegIdnumber,
	Regcompany,
	Regsale,
	RegorderNumber,
	code
}