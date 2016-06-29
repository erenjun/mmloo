//加载HTML文件
	addHtml("common/topImg.html","#top_img");
	addHtml("common/topNav.html","#top_nav");
	addHtml("common/header.html","#header");
	addHtml("common/nav.html","#nav");
	addHtml("common/footer.html","#footer");
	addHtml("../js/common/name.js", "#dl");
	

$(function(){
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

