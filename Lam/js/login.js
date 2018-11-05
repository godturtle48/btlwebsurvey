var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "REVISUB";
letterColors = [red, orange, green];
bubbleShape = "circle";


drawName(myName, letterColors);
bounceBubbles();

$('[requiredInput="true"]').blur(function () {
	debugger;
	var currentInput = this;
    var inputcheck = $('[requiredInput="true"]');
    var value = $(currentInput).val();
	if (value.trim().length === 0) {
        $(currentInput).addClass("border-red");       
        $(currentInput).attr("title", "Trường này không được để trống");
    } else {
        $(currentInput).removeClass("border-red");
        $(currentInput).removeAttr("title");
    }
})

$('#submit-button').click(function () {	
	debugger;
    $('[requiredInput="true"]').blur()
    var username = $('#username').val();
    var password = $('#password').val();
    if (username == "admin") {
    	if (password == "admin") {
    		window.location ="./dashboard.html"
    	}
    	else window.alert('Mật khẩu sai');
    } else window.alert('Người dùng không tồn tại');
})

function DoKeyup(e, myself, nextcontrolid) {
	if (window.event) e = window.event; //de chay ca tren IE
	if (e.keyCode == 13) {
		document.getElementById(nextcontrolid).focus();
	}
}

$('#username').keyup( function(e) {
	DoKeyup(e, this, 'password');
})


$('#password').keyup( function(e) {
	DoKeyup(e, this, 'submit-button');
	
})