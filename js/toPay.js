addHtml("common/topNav.html","#top_nav");
addHtml("common/footer.html","#footer");
addHtml("../js/common/name.js", "#dl");

$(function(){
	//$.cookie("allIn")
	
	$("#pf").text($.cookie("allIn"));
	$(".pBtn a").click(function(e){
		
		e.preventDefault();
		$("#success").css("display","block")
	})
	$("#success .sc span").click(function(){
		//alert(1)
		location.href = "index.html";
		$("#success").css("display","none")
		
	})
	
})
