//加载HTML文件
	addHtml("common/topImg.html","#top_img");
	addHtml("common/topNav.html","#top_nav");
	addHtml("common/header.html","#header");
	addHtml("common/nav.html","#nav");
	addHtml("common/footer.html","#footer");
	addHtml("../js/common/name.js", "#dl");
	

$(function(){
	$(".smallBox ul").on("mouseover","li",function(){
		$(this).addClass("show").siblings().removeClass("show");
		//$(".box").html($(this).html()+"<div class=\"fd\"></div>");
		var imgURL = $(this).find("img").attr("src");
		console.log(imgURL)
		$(".box img").attr("src",imgURL);
		$(".bigBox img").attr("src",imgURL);
	});
	//吸顶
	$(window).scroll(function() {
		
		var scrollTop = $(window).scrollTop();
		
		//console.log(fixTop+"---"+scrollTop)
		if(scrollTop >= 955) {
			$(".r-t").css({
				position: "fixed", 
				"top": 0,
				"left":343,
				"z-index":21
			});
		} else {
			$(".r-t").css("position", "static");
		}
	})
	
//放大镜
	$(".box").click(function(){
		$(".bigBox").css("display","block");
		$(".bigBox img").css("left",400)
	})
	var cb = true;
	$(".bigBox img").click(function(){
		if(cb){
			cb = false;
			$(this).css({
				width:800,
				height:800,
				left:"50%",
				top:"50%",
				marginLeft:-400,
				marginTop:-400,
			})
//		}else{
//			cb = true;
//			$(this).css({
//				width:400,
//				height:400
//			})
		}	
	})
	
	$(".bigBox img").on("mousedown",function(e){
		var currentY = e.offsetY;
		var currentX = e.offsetX;
		//console.log(currentX);
		//e.preventDefault();
		$(".bigBox").on("mousemove",function(e){
			//var mt = e.clientY - e.offsetY+"%"
			e.preventDefault();
			$(".bigBox img").css({
				top:e.clientY - currentY,
				left:e.clientX - currentX,
			})
		console.log(e.clientX+"=="+e.clientY+">>"+e.offsetX+"--"+e.offsetY)
		//console.log(e.offsetX+"--"+e.offsetY)
		})
		
		$(".bigBox img").mouseup(function(e){
			$(".bigBox").off("mousemove");
			//$(".bigBox").off("mousemove");
		})
	})
	
	$(".bigBox i").on({
		"click":function(){
			$(".bigBox").css("display","none");
			$(".bigBox img").css({
				"left":400,
				"width":400,
				"height":400,
				"top":0,
				"margin":"auto"
			})
			cb = true;
		}
	})
	
	
	///加减数量
	$("#jia").click(function(e){
		e.preventDefault();
		$("#num").val(parseInt($("#num").val())+1)
	});
	$("#jian").click(function(e){
		e.preventDefault();
		$("#num").val(parseInt($("#num").val())-1);
		if(parseInt($("#num").val()) <= 1){
			$("#num").val(1);
		}
	})
	$("#tocart").click(function(e){
		e.preventDefault()
		$("#topay").css("display","block");
		var img = $(".show img").attr("src");
		var a = $(".name h1").text();
		var price = $(".nsc li i").eq(1).text();
		var num = $("#num").val();
		
		var goodInfo = [];
		goodInfo.push(img);
		goodInfo.push(a);
		goodInfo.push(price);
		goodInfo.push(num);
		
		$.cookie("cart", goodInfo,{expires: 7, path: "/"});
		console.log($.cookie("cart"))
	})
	$("#guanbi").click(function(){
		$("#topay").css("display","none");
	})
	$("#toSee").click(function(){
		location.href = "buy.html";
	});
	$("#toShop").click(function(){
		$("#topay").css("display","none");
	})
 })

