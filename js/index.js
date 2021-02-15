$(document).ready(function(){
	var i = 0;
	var i2 = 0;
	var interval = "";
	$("#main_imgdiv2 img").click(function(){
		$(this).addClass("active");
		$("#main_imgdiv2 img.active").removeClass("active");
	});
	$(window).scroll(function(){
		$("#link_div a").blur();
		var scrolltop2 = $("#main2").position().top;
		var scrolltop3 = $("#main3").position().top;
		var section = $("section").position().top;

		var scroll = $(window).scrollTop();

		if($(window).scrollTop()>$(document).innerHeight()/2){
			$("#up").show();
		}
		else{
			$("#up").hide();
		}
		if($(window).width()>1024){

			if(scroll<scrolltop2-94){
				$("#link_div a").removeClass("active");
				$("#link_div a").eq(0).addClass("active");
			}
			else if(scroll>=scrolltop2-94 && scroll<section-94){
				$("#link_div a").removeClass("active");
				$("#link_div a").eq(1).addClass("active");
			}
			else if(scroll>=scrolltop3-100){
				$("#link_div a").removeClass("active");
				$("#link_div a").eq(2).addClass("active");
			}
		}
		else{
			if(scroll<scrolltop2-115){
				$("#link_div a").removeClass("active");
				$("#link_div a").eq(0).addClass("active");
			}
			else if(scroll>=scrolltop2-115 && scroll<section-115){
				$("#link_div a").removeClass("active");
				$("#link_div a").eq(1).addClass("active");
			}
			else if(scroll>=scrolltop3-120){
				$("#link_div a").removeClass("active");
				$("#link_div a").eq(2).addClass("active");
			}
		}
	});	
	if($(window).scrollTop()>$(document).innerHeight()/2){
		$("#up").show();
	}
	else{
		$("#up").hide();
	}
	// $(".indicator span").click(function(){
	// 	i = $(this).index();
	// 	$(".slides").hide();
	// 	$(".slides").eq(i).show();
	// 	$(".indicator span").css("background","transparent");
	// 	$(this).css("background","white");
	// });
	$("#up").click(function(){
		$("html, body").animate({scrollTop:0});
	})
	$("#link_div a").click(function(){
		var index =$(this).index();	
		if($(window).width()>1024){

			if(index==0){
				$("html, body").animate({scrollTop:0});
			}
			else if(index==1){
				var scrolltop = $("#main2").position().top;
				$("html, body").animate({scrollTop:scrolltop-94});
			}
			else if(index==2){
				var scrolltop = $("#main3").position().top;
				$("html, body").animate({scrollTop:scrolltop-94});
			}
		}
		else{
			if(index==0){
				$("html, body").animate({scrollTop:0});
			}
			else if(index==1){
				var scrolltop = $("#main2").position().top;
				$("html, body").animate({scrollTop:scrolltop-115});
			}
			else if(index==2){
				var scrolltop = $("#main3").position().top;
				$("html, body").animate({scrollTop:scrolltop-115});
			}
		}
	});

});
$(document).ready(function(){
	index = 0;

	height = $("#main_imgdiv").innerHeight();
	width = $("#main_imgdiv").innerWidth();

	length = $("#main_imgdiv img").length;
	position = 0;
	var interval;

	if($(window).width()>1024){
		changeActiveLarge();
		$("#main_imgdiv").mouseover(function(){
			interval = setInterval(function(){
				changeActiveLarge();	
			},2000);
		});
		$("#main_imgdiv").mouseout(function(){
			clearInterval(interval);
		});
	}
	else{
		changeActiveSmall()
		$("#main_imgdiv").mouseover(function(){
			interval = setInterval(function(){
				changeActiveSmall();	
			},2000);
		});
		$("#main_imgdiv").mouseout(function(){
			clearInterval(interval);
		});
	}
});
	

function changeActiveLarge(){
	$("#main_imgdiv img.active").removeClass("active");
	index++;
	if(index>=length)
		index = 0;
	$("#main_imgdiv img").eq(index).addClass("active");

	var imgHeight = $("#main_imgdiv img").eq(index).outerHeight();
	var top = $("#main_imgdiv img").eq(index).position().top;
	position = top - (height-imgHeight)/2 ;

	$("#main_imgdiv>div").animate({top: -position});
}
function changeActiveSmall(){
	$("#main_imgdiv img.active").removeClass("active");
	index++;
	if(index>=length)
		index = 0;
	$("#main_imgdiv img").eq(index).addClass("active");

	var imgWidth = $("#main_imgdiv img").eq(index).outerWidth();
	var left = $("#main_imgdiv img").eq(index).position().left;
	position = left - (width-imgWidth)/1.5 ;

	$("#main_imgdiv>div").animate({left: -position});
}
