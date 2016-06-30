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
				$(this).next().addClass("pageOn").siblings().removeClass("pageOn")
			}
			else if(page == 4){
				page = 3;
				$(this).prev().addClass("pageOn").siblings().removeClass("pageOn")
			}else{
				$(this).addClass("pageOn").siblings().removeClass("pageOn")
			}
			URL = "../data/goods"+page+".json";
			toPage(URL);
			
		});
	
	//加入购物车
	$(".more-ms .toCart").on("click","b",function(){
		
		var gb = "<div class=\"goodsBox\"></div>"
		var lis = $(this).parent().parent().parent().parent()
		lis.append(gb);
		//console.log($(this));
		var cLeft = $("#header .cart").offset().left;
		var cTop = $("#header .cart").offset().top;
		var tLeft = lis.find(".goodsBox").offset().left;
		var tTop = lis.find(".goodsBox").offset().top;
		$(".goodsBox").stop().animate({
			"top":cTop-tTop,
			"left":cLeft-tLeft,
			"width":1,
			"height":1,
			"z-index":999
		},1000,function(){
			$(".goodsBox").css("display","none");
		});
		$(".ps").css({
			"border":"1px solid #898989",
				"padding":"1px",
			"z-index": 8
		});
		$(".ps").find(".img dd").css({
			"top":10,
			"z-index": 8
		});
		$(".ps").find(".more-ms").css({
			"height":56,
			"background":"#fff",
			"z-index": 8
		});
		
		
		var goodId = lis.attr("id");
		var goodImg = lis.find(".goodImg").attr("src");
		var goodName = lis.find(".goodName").text();
		var goodPrice = lis.find(".goodPrice").text().slice(1);
		
		var cartHtml = "";
		var goods = $.cookie('carts') ? JSON.parse($.cookie('carts')) : {};
				if(goodId in goods){
					goods[goodId].num++;
				} else {
					goods[goodId] = {
						id : goodId,
						img:goodImg,
						name : goodName,
						price : goodPrice,
						num : 1
					}
				}
		$.cookie("carts", JSON.stringify(goods), {expires:7,path:'/'});
		//console.log($.cookie("carts"))
		//购物车里的商品
		cartHtml = "<tr>"
					+"<td>"+lis.find(".img dt").html()+"</td>"
				+"<tr>"
			
		$(".inCartGoods .loading").remove();				
//		$(".inCartGoods table").append(cartHtml);
		
		var goods = JSON.parse($.cookie('carts'));
		var html = "";
		var allPay = 0;
		//购物车列表
		for(i in goods){
			html = "<tr id="+goods[i].id+">"
					+"<td><img style='width:40px;height:40px;' src="+goods[i].img+"/></td>"
					+"<td><a href='goodsDetails'>"+goods[i].name+"</a></td>"
					+"<td style='text-align:center'>￥<b class='one'>"+goods[i].price+"x"+goods[i].num+"</b></td>"
					+"<td style='text-align:center'><b style='cursor:pointer;' id='removeGood'>删除</b></td>"
					+"</tr>";
		$(".inCartGoods table").append(html);
			allPay = allPay + (goods[i].price*goods[i].num);
		}
		
	})
	//删除商品
	$("#removeGood").click(function(){
		alert(1);
		$(this).parent().parent().remove();
		//$("#allPay").text(parseInt($("#allPay").text())-parseInt($(this).parent().parent().find(".all").text()));
		var goodId = $(this).parent().parent().attr("id");
		//console.log(goods.g1)
		//console.log(222)
		delete goods[goodId];
		//console.log(goods)
		$.cookie("carts", JSON.stringify(goods), {expires:7,path:'/'});
	})

	
	//吸顶效果
	
	//var fixTop = $(".l-t").offset().top;
	$(window).scroll(function() {
		
		var scrollTop = $(window).scrollTop();
		
		//console.log(fixTop+"---"+scrollTop)
		if(scrollTop >= 289) {
			$(".navBox").css({
				position: "fixed", 
				"top": 0,
				"left":250,
				"z-index":21
			});
			$(".all-category").css({
				position: "fixed", 
				"top": 0,
				"left":38,
				"z-index":21
			});
		} else {
			$(".navBox").css("position", "static");
			$(".all-category").css("position", "static");
		}
	})
		
		
		
		
		
})
//分页函数
function toPage(URL){
	$.ajax({
		type:"get",
		url:URL,
		async:false,
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
				html +=	"<li id=\"g"+goods[i].id+"\" class=\"ps\" style=\"left:"+left+"px;top:"+top+"px\">"
							+"<div class=\"img\">"
								+"<dl>"
									+"<dt>"
										+"<a href='goodsDetails.html'>"
											+"<img class='goodImg' src="+goods[i].img+" />"
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
									+"<a class='goodName' href=\"goodsDetails.html\">奇酷旗舰版全网通（8692-A00） 玫瑰金"
										+"<span></span>"
									+"</a>"
								+"</li>"
								+"<li>"
									+"<span class='goodPrice'>￥"+goods[i].price+"</span>"
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
												+"<li class=\"toCart\">"
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
							"z-index": 10,
							"overflow":"visible"
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