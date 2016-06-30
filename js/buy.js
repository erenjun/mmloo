addHtml("common/topNav.html","#top_nav");
addHtml("common/footer.html","#footer");
addHtml("../js/common/name.js", "#dl");

$(function(){

	var goods = JSON.parse($.cookie('carts'));
	var html = "";
	var allPay = 0;
	//购物车列表
	for(i in goods){
		html = "<tr id="+goods[i].id+">"
				+"<td><input class='select' type='checkbox' checked='true'/><img src="+goods[i].img+"/></td>"
				+"<td><a href='#'>"+goods[i].name+"</a></td>"
				+"<td style='text-align:center'>￥<b class='one'>"+goods[i].price+"</b></td>"
				+"<td class='gNum' style='text-align:center'><em class='minus'>-</em><input class='count' style='text-align:center;width:30px;height:20px;border:1px solid #666;' type='text' value="+goods[i].num+"><em class='add'>+</em></td>"
				+"<td style='text-align:center'>￥<b class='all'>"+(goods[i].price*goods[i].num)+"</b></td>"
				+"<td style='text-align:center'><span>收藏</span><span class='removeGood'>删除</span></td>"
				+"</tr>";
		$("#tb").append(html);
		allPay = allPay + (goods[i].price*goods[i].num);
	}
	$("#allPay").text(allPay);
	
	var gNums = $(".gNum")
	$(".minus").click(function(e){//减少数量
		e.preventDefault();
		var n = $(this).parent().find(".count").val();
		if(n == 1){
			$(this).parent().find(".count").val(1);
		}else{
			$(this).parent().find(".count").val(parseInt($(this).parent().find(".count").val()) - 1);
		}
		var one = $(this).parent().parent().find(".one").text();
		$(this).parent().parent().find(".all").text($(this).parent().find(".count").val()*one);
		//console.log($(this).parent().parent().find(".one").text())
		var sc = $(this).parent().parent().find(".select").get(0);
		if(sc.checked == true){
			if(n == 1){
				$("#allPay").text(parseInt($("#allPay").text()));
			}else{
				$("#allPay").text(parseInt($("#allPay").text()) - one)
			}
			
		}
		
	})
	$(".add").click(function(e){//增加数量
		e.preventDefault();
		$(this).parent().find(".count").val(parseInt($(this).parent().find(".count").val()) + 1);
		var one = parseInt($(this).parent().parent().find(".one").text());
		$(this).parent().parent().find(".all").text($(this).parent().find(".count").val()*one);
		var sc = $(this).parent().parent().find(".select").get(0);
		if(sc.checked == true){
			$("#allPay").text(parseInt($("#allPay").text()) + one)
		}
		
	})
	
	//全选框
	var flag = true;
	$("#allSelect").click(function(){
		if(flag){		
			$(".select").each(function(){
				this.checked = false;
			});
			flag = false;
		}else{			
			$(".select").each(function(){
				this.checked = true;
			});
			flag = true;
		}
	})
	var checked = 0;
	var nun=0
	$(".select").click(function(){
		var tp;
		var sc;
		
		//console.log(nun++)
		if(checked == 0){
			checked = 1;
	
		 tp = parseInt($("#allPay").text()) - parseInt($(this).parent().parent().find(".all").text())
			$("#allPay").text(tp);
			
		}else{
			checked = 0;

			 tp = parseInt($("#allPay").text()) + parseInt($(this).parent().parent().find(".all").text())
			$("#allPay").text(tp);
		}
		
	 	sc = $(this).parent().parent().parent().parent().find(".select").get();
		for(var i = 0;i<sc.length;i++){
			if(sc[i].checked == false){
				$("#allSelect").get(0).checked = false;
				break;
			}else{
				$("#allSelect").get(0).checked = true;
			}
		}
		
	})
	//删除商品
	$(".removeGood").click(function(){
		$(this).parent().parent().remove();
		$("#allPay").text(parseInt($("#allPay").text())-parseInt($(this).parent().parent().find(".all").text()));
		var goodId = $(this).parent().parent().attr("id");
		//console.log(goods.g1)
		//console.log(222)
		delete goods[goodId];
		//console.log(goods)
		$.cookie("carts", JSON.stringify(goods), {expires:7,path:'/'});
	})
	
	$("#next").click(function(){
		location.href = "toPay.html";
		var allIn = $("#allPay").text();
		$.cookie("allIn",allIn,{expires:7,path:'/'})
	})
	

})
