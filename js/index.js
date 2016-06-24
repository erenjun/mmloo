$(function(){
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
	$(".t-nav li").on({
		"mouseover":function(){
			$(this).addClass("t-navOn").siblings().removeClass("t-navOn");
			$(".m-r > div").eq($(this).index()).addClass("listOn").siblings().removeClass("listOn");
		}
	})
})
