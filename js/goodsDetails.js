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
		var goodId = "g00"
		var goodImg = $(".jqzoom img").attr("src");
		var goodName = $(".name h1").text();
		var goodPrice = $(".nsc li i").eq(1).text();
		var num = $("#num").val();
		
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
		
		var lis = $(this).parent().parent().parent().parent()
		console.log(goods);
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

