addHtml("common/topNav.html","#top_nav");
addHtml("common/footer.html","#footer");
addHtml("../js/common/name.js", "#dl");

$(function(){

	var goods = JSON.parse($.cookie('carts'));
	var html = "";
	var allPay = 0;
	//购物车列表
	for(i in goods){
		html = "<tr>"
				+"<td><input type='checkbox'/><img src="+goods[i].img+"/></td>"
				+"<td><a href='#'>"+goods[i].name+"</a></td>"
				+"<td style='text-align:center'>￥"+goods[i].price+"</td>"
				+"<td style='text-align:center'><em>-</em><input style='text-align:center;width:30px;height:20px;border:1px solid #666;' type='text' value="+goods[i].num+"><em>+</em></td>"
				+"<td style='text-align:center'>￥"+(goods[i].price*goods[i].num)+"</td>"
				+"<td style='text-align:center'><span>收藏</span><span>删除</span></td>"
				+"</tr>";
	$("#tb").append(html);
		allPay = allPay + (goods[i].price*goods[i].num);
	}
	var allPay = 
	$("#allPay").text(allPay);
})
