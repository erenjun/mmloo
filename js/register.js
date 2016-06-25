addHtml("../html/common/topImg.html","#top_img");
addHtml("../html/common/footer.html","#footer");

$(function(){
	
	//表单验证
	$("#userName").on({
		"focus":function(){
			$(this).parent().find("p").text("请输入11位手机号");
			$(this).parent().find("i").css({
					"background":'url("../img/correct.png") repeat scroll 0% 0% transparent',
					"display":"none"
				});
		},
		"blur":function(){
			var txt = $(this).val();
			var reg = /^1[3-5|7-8]\d{9}$/;
			//alert(txt.length);
			if(reg.test(txt)){
				$(this).parent().find("i").css({
					"background":'url("../img/correct.png") repeat scroll 0% 0% transparent',
					"display":"block"
				});
				$(this).parent().find("p").text("");
			}else if(txt.length < 11 ||txt.length > 11){
				$(this).parent().find("p").text("手机号码只有11位");
				$(this).parent().find("p").css("color","#f00");
				$(this).parent().find("i").css({
					"background":'url("../img/error.png") repeat scroll 0% 0% transparent',
					"display":"block"
				});
			}else if(txt.length == 11 && !reg.test(txt)){
				$(this).parent().find("p").text("手机号码格式不对");
				$(this).parent().find("p").css("color","#f00");
				$(this).parent().find("i").css({
					"background":'url("../img/error.png") repeat scroll 0% 0% transparent',
					"display":"block"
				});
			}
		}
	});
	
	
	
	
})
