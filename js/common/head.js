$(function(){
	addHtml("common/topImg.html","#top_img");
	addHtml("common/topNav.html","#top_nav");
	addHtml("common/header.html","#header");
	addHtml("common/nav.html","#nav");
	addHtml("common/footer.html","#footer");
})

function addHtml(url,target){
	$.ajax({
		type:"get",
		url:url,
		async:true,
		success:function(data){
			$(target).html(data);
		}
	})
}
