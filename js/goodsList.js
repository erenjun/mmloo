//加载HTML文件
	addHtml("common/topImg.html","#top_img");
	addHtml("common/topNav.html","#top_nav");
	addHtml("common/header.html","#header");
	addHtml("common/nav.html","#nav");
	addHtml("common/footer.html","#footer");
	addHtml("../js/common/name.js", "#dl");


$(function(){
	var URL = "../data/goods1.json"
	toPage(URL);
	
	//分页事件
	$(".page ul").on("click", "li",function(){
			var page = $(this).index();
			if(page == 0){
				page = 1;
			}
			if(page == 4){
				page = 3;
			}
			URL = "../data/goods"+page+".json";
			toPage(URL);
		});
})

function toPage(URL){
	$.ajax({
		type:"get",
		url:URL,
		async:true,
		success:function(data){
			//console.log(data);
			//alert(1)
			var goods = data;
			var html = "";
			var left = -250;
			var top = 0;
			for(var i in goods){
				left = left +250;
				if(left >= 800){
					top = top +350;
					left = 0;
				}
				html +=	"<li class=\"ps\" style=\"left:"+left+"px;top:"+top+"px\">"
							+"<div class=\"img\">"
								+"<dl>"
									+"<dt>"
										+"<a href='#'>"
											+"<img src="+goods[i].img+" />"
										+"</a>"
									+"</dt>"
									+"<dd>"
										+"<img src=\"../img/good2.jpg\"/>"
										+"<img src=\"../img/good21.jpg\"/>"
										+"<img src=\"../img/good22.jpg\"/>"
									+"</dd>"
								+"</dl>"
							+"</div>"
							+"<div class='more-ms'>"
							+"<ul>"
								+"<li>"
									+"<a href=\"#\">奇酷旗舰版全网通（8692-A00） 玫瑰金"
										+"<span></span>"
									+"</a>"
								+"</li>"
								+"<li>"
									+"<span>￥2089.00</span>"
									+"<i>￥2889.00</i>"
									+"<em>"
									+"<img src=\"../img/star-on.png\"/>"
												+		"<img src=\"../img/star-on.png\"/>"
												+		"<img src=\"../img/star-on.png\"/>"
												+		"<img src=\"../img/star-on.png\"/>"
												+		"<img src=\"../img/star-on.png\"/>"
												+	"</em>"
												+"</li>"
												+"<li>"
												+	"<div class=\"kf clear\">"
												+		"<span >"
												+			"<a href=\"#\">30</a>"
												+			"<strong>用户评论</strong>"
												+		"</span>"
												+		"<span>"
												+			"<a href=\"#\"><img src=\"../img/qq.png\"/></a>"
												+			"<strong>在线客服</strong>"
												+		"</span>"
												+		"<span>"
												+			"<a href=\"#\">30</a>"
												+			"<strong>在线客服</strong>"
												+		"</span>"
												+	"</div>"
												+"</li>"
												+"<li>"
												+	"<h3>"
												+		"<a href=\"#\">官方店铺</a>"
												+	"</h3>"
												+"</li>"
												+"<li>"
													+"<b>加入购物车</b>"
												+"</li>"
											+"</ul>"
										+"</div>"
									+"</li>"
						
			}
			
			$("#goods").html(html);			
			
			//hover 事件
			$(".ps").on({
					"mouseover":function(){
						$(this).css({
							"border":"2px solid #f00",
							"padding":"0",
							"background":"#fff",
							"z-index": 10
						});
						$(this).find(".img dd").css({
							"top":0,
							"z-index": 10
						});
						$(this).find(".more-ms").css({
							"height":188,
							"background":"#fff",
							"z-index": 10
						});
					},
					"mouseout":function(){
						$(this).css({
							"border":"1px solid #898989",
							"padding":"1px",
							"z-index": 8
						});
						$(this).find(".img dd").css({
							"top":10,
							"z-index": 8
						});
						$(this).find(".more-ms").css({
							"height":56,
							"background":"#fff",
							"z-index": 8
						});
					}
			})
		}
	});
			

}