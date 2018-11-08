$('.btn-edit').click(function () {
	$('.edit-tab').show();
})

$('.btn-close').click(function () {
	$('.add-tab').hide();
	$('.edit-tab').hide();
	$('.input-information').removeClass('border-red');
})

$('#add-button').click(function () {
	$('.add-tab').show();
})


$('.input-information').blur(function() {
			var currentInput = this;
		    var value = $(currentInput).val();
		    if (value.trim().length === 0) {
		        $(currentInput).addClass('border-red');
		        $(currentInput).attr("title", "Trường này không được để trống");
		    } else {
		        $(currentInput).removeClass('border-red');
		        $(currentInput).removeAttr('title');
	    	}
})

// $('.btn-submit').click(function () {
// 	debugger;
// 	$('form').submit(function () {
// 		$('.input-information').blur();
// 		var input= $('.input-information').val();
// 		$.each(input, function (index, item) {
// 	        var checkempty = $(item).val().trim();
// 	        if (checkempty.length == 0) {
// 	            window.alert('Mời bạn nhập đầy đủ');
// 	        } 
// 	    })
// 	    event.preventDefault();
//     })
// })



function ChuanhoaTen(ten) {
	dname = ten;
	ss = dname.split(' ');
	dname = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (dname.length > 0) dname = dname + " ";
			dname = dname + ss[i].substring(0, 1).toUpperCase();
			dname = dname + ss[i].substring(1).toLowerCase();
		}
	return dname;
}

$('.name').blur(function() {
	this.value = ChuanhoaTen(this.value);
})