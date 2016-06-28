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
		$(".box").html($(this).html()+"<div class=\"fd\"></div>");
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
	$('.jzoom').jzoom({bgColor: "#222"});
	//放大镜
//	$(".box").on({
//		"mouseover":function(){
//			$(".fd").css({
//				"display":"block",
//				"top"
//			})
//		}
//	})

})
