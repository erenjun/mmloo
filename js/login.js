addHtml("../html/common/topImg.html","#top_img");
addHtml("../html/common/footer.html","#footer");

$(function(){
	
	$("#userName").on({
		"focus":function(){
			$(this).css({
				"border":"1px solid #f49922"
			});
		},
		"blur":function(){
			$(this).css({
				"blur":"1px solid #d8d8d8"
			});
		}
	});
	$("#password").on({
		"focus":function(){
			$(this).css({
				"border":"1px solid #f49922"
			});
		},
		"blur":function(){
			$(this).css({
				"blur":"1px solid #d8d8d8"
			});
		}
	});
	$("#loginBtn").click(function(e){
		e.preventDefault();
		$.ajax({
			type:"get",
			url:"../data/user.json",
			async:true,
			success:function(data){
				var users = data;
				var userName = $("#userName").val();
				var pwd = $("#password").val();
				//console.log(users.length)
				for(var i in users){
					console.log(users[i]);
					if(userName == users[i].name && pwd == users[i].mm){
						location.href = "index.html";
						$.cookie("user",userName,{expires: 7, path: "/"});
						return true;
					}else{
						if(users[i].id == 1){
							alert("用户名与密码不正确");
							return false;
						}
						
					}
				}
			}
		});
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
