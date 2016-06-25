//加载HTML文件
	addHtml("common/topImg.html","#top_img");
	addHtml("common/topNav.html","#top_nav");
	addHtml("common/header.html","#header");
	addHtml("common/nav.html","#nav");
	addHtml("common/footer.html","#footer");

$(function(){
	//轮播图
	$(".slideImg").on({
		"mouseover":function(){
			$(".toLeft").css("display","block");
			$(".toRight").css("display","block");
			stopAutoPlay();
		},
		"mouseout":function(){
			$(".toLeft").css("display","none");
			$(".toRight").css("display","none");
			autoPlay();
		}
	})
	//左右滑动点击事件
	var count =0;
	$(".toLeft").on({
		"mouseover":function(){
			$(".toLeft").css({
					"display":"block",
					"opacity":0.6
				});
			$(".toRight").css("display","block");
			stopAutoPlay();
		},
		"mouseout":function(){
			$(".toLeft").css({
				"opacity":0.3,
				"display":"none"
			});
			$(".toRight").css("display","none");
			autoPlay();
		},
		"click":function(){			
			count--;
			if(count == -1){
				count = 5;
			}
			$(".slideImg").find("li").eq(count).siblings().removeClass("z_index");
			$(".slideImg").find("li").eq(count).animate({
				"z-index":7,
				"opacity":1
			},500);
			$(".slideImg").find("li").eq(count).siblings().animate({
				"z-index":1,
				"opacity":0.1
			},500);
			$(".fSpan span").eq(count).addClass("spanOn");
			$(".fSpan span").eq(count).siblings().removeClass("spanOn");
		}
	});
	$(".toRight").on({
		"mouseover":function(){
			$(".toRight").css({
					"display":"block",
					"opacity":0.6
				});
			$(".toLeft").css("display","block");
			stopAutoPlay();
		},
		"mouseout":function(){
			$(".toRight").css({
				"opacity":0.3,
				"display":"none"
			});
			$(".toLeft").css("display","none");
			autoPlay();
		},
		"click":function(){			
			count++;
			if(count == 6){
				count = 0;
			}
			$(".slideImg").find("li").eq(count).siblings().removeClass("z_index");
			$(".slideImg").find("li").eq(count).animate({
				"z-index":7,
				"opacity":1
			},500);
			$(".slideImg").find("li").eq(count).siblings().animate({
				"z-index":1,
				"opacity":0.1
			},500);	
			$(".fSpan span").eq(count).addClass("spanOn");
			$(".fSpan span").eq(count).siblings().removeClass("spanOn");
		}
	});
	
	//span点击事件
	$(".fSpan").on("click","span",function(){
		count = $(this).index();
		$(this).addClass("spanOn").siblings().removeClass("spanOn");
		$(".slideImg").find("li").eq($(this).index()).siblings().removeClass("z_index");
			$(".slideImg").find("li").eq($(this).index()).animate({
				"z-index":7,
				"opacity":1
			},500);
			$(".slideImg").find("li").eq($(this).index()).siblings().animate({
				"z-index":1,
				"opacity":0.1
			},500);	
			stopAutoPlay();
	});
	$(".fSpan > span").on({
		"mouseover":function(){
			stopAutoPlay();
			$(".toLeft").css("display","block");
			$(".toRight").css("display","block");
			
		},
		"mouseout":function(){
			autoPlay();
			$(".toLeft").css("display","none");
			$(".toRight").css("display","none");
		}
	})
	//自动轮播
	var timer;
	function autoPlay(){
		clearInterval(timer);
		timer = setInterval(function(){
			$(".toRight").trigger("click");
		},5000)
	}
	function stopAutoPlay(){
		clearInterval(timer);
	}
	autoPlay();
	//hover时图片上移
	$(".sale .sale-t .t-img li").on({
		"mouseover":function(){
			$(this).find("img").stop().animate({
				"top":"-5px"
			},10);
		},
		"mouseout":function(){
			$(this).find("img").stop().animate({
				"top":"0px"
			},10);
		}
	});
	
	//show框的
	//hover时图片右移
	$(".list1 li").find("img").on({
		"mouseover":function(){
			$(this).stop().animate({
				"left":"-22px"
			},200)
		},
		"mouseout":function(){
			$(this).stop().animate({
				"left":"-52px"
			},200)
		}
	});
	
	//hover时图片上移
	$(".m-r div dl dt").find("img").on({
		"mouseover":function(){
			$(this).stop().animate({
				"top":"-8px"
			},200)
		},
		"mouseout":function(){
			$(this).stop().animate({
				"top":"-0px"
			},200)
		}
	});
	//hover时切换
	tab(".phone");
	tab(".computer");
	tab(".foods");
	tab(".oa");
	tab(".music");
	tab(".fresh");
	//切换封装
	function tab(className){
		$(className + " .t-nav li").on({
			"mouseover":function(){
				$(this).addClass("t-navOn").siblings().removeClass("t-navOn");
				$(className + " .m-r > div").eq($(this).index()).addClass("listOn").siblings().removeClass("listOn");
			}
		});
	}
	
	
	//楼梯效果
	var flag = false;
	$("#stair li").on("click",function(){
		flag = true;
		$(this).find("span").addClass("stairOn").parent().siblings().find("span").removeClass("stairOn");
		var _top = $(".show > div").eq($(this).index()).offset().top;
		$("html body").stop().animate({
			"scrollTop":_top
		},1000,function(){
			flag = false;
		});
		
	});
	$(window).scroll(function(){
		if(!flag){
			var _scrollTop = $(window).scrollTop();
			
			$(".show > div").each(function(){
				if(_scrollTop >= $(this).offset().top - $(this).outerHeight()/2){
					$("#stair li").eq($(this).index()).find("span").addClass("stairOn").parent().siblings().find("span").removeClass("stairOn");
				}
			});
		}
		if($(window).scrollTop() >= $(".show > div").eq(0).offset().top - $(this).outerHeight()){
				$("#stair").css("display","block");
		}else{
			$("#stair").css("display","none");
		}
//		console.log($(window).scrollTop()+"---"+$(".show > div").eq(0).offset().top);
	})
	
})
