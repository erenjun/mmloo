
//加载HTML文件
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
