addHtml("../html/common/topImg.html","#top_img");
addHtml("../html/common/footer.html","#footer");

$(function(){
	
	//表单验证
	var t1,t2,t3,t4,t5;
	$("#userName").on({//用户名验证
		"focus":function(){
			$(this).parent().find("p").text("请输入11位手机号");
			$(this).parent().find("p").css("color","#555");
			$(this).parent().find("i").css({
					"background":'url("../img/correct.png") repeat scroll 0% 0% transparent',
					"display":"none"
				});
		},
		"blur":function(){
			var txt = $(this).val();
			var reg = /^1[3-5|7-8]\d{9}$/;
			$.ajax({
				type:"get",
				url:"../data/userName.json",
				async:true,
				success:function(data){
					var names = data.userName;
//					txt = $(this).val();
//					console.log(txt);
//					console.log(names[1]);
					for(var i=0;i<names.length;i++){
						if(txt == names[i]){
							$("#userName").parent().find("i").css({
								"background":'url("../img/error.png") repeat scroll 0% 0% transparent',
								"display":"block"
							});	
							$("#userName").parent().find("p").text("用户名已存在");
							$(this).parent().find("p").css("color","#f00");
						}
					}
				}
			});
			//alert(txt.length);
			if(reg.test(txt)){
				$(this).parent().find("i").css({
					"background":'url("../img/correct.png") repeat scroll 0% 0% transparent',
					"display":"block"
				});
				$(this).parent().find("p").text("");
				return t1 = true;
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
	
	//密码验证
	$("#pwd").on({
		"focus":function(){
			$(this).parent().find("p").text("6-20位字符，可由英文、数字及下划线组成");
			$(this).parent().find("p").css("color","#555");
			$(this).parent().find("i").css({
					"background":'url("../img/correct.png") repeat scroll 0% 0% transparent',
					"display":"none"
				});
		},
		"blur":function(){
			var reg = /^[a-z0-9_-]{6,20}$/;
			var txt = $(this).val();

			if(reg.test(txt)){
				$(this).parent().find("i").css({
					"background":'url("../img/correct.png") repeat scroll 0% 0% transparent',
					"display":"block"
				});
				$(this).parent().find("p").text("");
				return t2 = true;
			}else if(txt.length < 6 || txt.length >20){
				$(this).parent().find("p").text("密码长度应在6-20个字符");
				$(this).parent().find("p").css("color","#f00");
				$(this).parent().find("i").css({
					"background":'url("../img/error.png") repeat scroll 0% 0% transparent',
					"display":"block"
				});
			}else{
				$(this).parent().find("p").text("格式不对，由英文、数字及下划线组成");
				$(this).parent().find("p").css("color","#f00");
				$(this).parent().find("i").css({
					"background":'url("../img/error.png") repeat scroll 0% 0% transparent',
					"display":"block"
				});
			}
		}
	});
	
	//生成验证码
	function createCode(){
		var num = ["0","1","2","3","4","5","6","7","8","9","q","w","e","r","t","y","u",
		"i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
		var txt = String(num[parseInt(Math.random()*36)]) + String(num[parseInt(Math.random()*36)])
		+ String(num[parseInt(Math.random()*36)]) + String(num[parseInt(Math.random()*36)]);
		return txt;
	}
	var code = createCode();
	$("#checkCode").parent().find("span").text(code);
	
	$("#checkCode").parent().find("a").click(function(){
		code = createCode();
		$("#checkCode").parent().find("span").text(code);
	});
	
	//验证码验证
	$("#checkCode").on({
		"focus":function(){
			$(this).parent().find("p").text("请输入验证码");
			$(this).parent().find("p").css("color","#555");
			$(this).parent().find("i").css({
					"background":'url("../img/correct.png") repeat scroll 0% 0% transparent',
					"display":"none"
				});
		},
		"blur":function(){
			var checkCode = $("#checkCode").parent().find("span").text();
			if($(this).val() == checkCode){
				$(this).parent().find("i").css({
					"background":'url("../img/correct.png") repeat scroll 0% 0% transparent',
					"display":"block"
				});
				$(this).parent().find("p").text("");
				return t3 = true;
			}else{
				$(this).parent().find("p").text("验证码不正确");
				$(this).parent().find("p").css("color","#f00");
				$(this).parent().find("i").css({
					"background":'url("../img/error.png") repeat scroll 0% 0% transparent',
					"display":"block"
				});
			}
		}
	});
	
	t5 = false;
	$("#checkBox").click(function(){
		//alert(3)
		if(t5){
			t5 = false;				
		}else{
			t5 = true;
		}

	});
	//注册
	$("#submit").click(function(e){
		e.preventDefault();
		if(t1 && t2 && t3&& t5){
			//location.href = index.html
			$("#cg").css("display","block");
		}
	})
	
	//注册成功跳转
	$("#cg .zcs button").eq(0).click(function(){
		location.href = "index.html";
	})
	$("#cg .zcs button").eq(1).click(function(){
		$("#cg").css("display","none");
		location.href = "register.html";
	})
	
	
})
