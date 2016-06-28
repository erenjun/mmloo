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
	
//	var defaultOptions = {
//              width: 800,
//              height: 800,
//              position: "right",
//              offsetX: 20,
//              offsetY: 0,
//              opacity: 0.6,
//              bgColor: "#fff",
//              loading: "Loading..."
//          };
//	$('.jzoom').jzoom(defaultOptions);
	//放大镜
//	$(".box").on({
//		"mouseover":function(){
////			$(".fd").css({
////				"display":"block",
////		
////			})
//
//		
//		},
//		"mousemove":function(){
//			
//		},
//		"mouseout":function(){
//			
//		}
//	})
$(".box").append($("<div class='fd'></div>"));
$(".box").mouseover(function(e){
	var lwidth=parseFloat(8/3);
	
	$(document).mousemove(function(e){
		$(this).find(".fd").css({
			left:e.offsetX+"px",
			top:e.offsetY+"px"
		})
		console.log(e.offsetX);
	})
	
})

})
