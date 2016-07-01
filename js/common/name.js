$(function(){
	$("#login").text($.cookie("user"));
	$("#login").css("color","#f00");
	if($.isEmptyObject(user)){
		$("#register").text("注册")
	}else{
		$("#register").text("退出")
	}
	
})
