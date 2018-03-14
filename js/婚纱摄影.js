//
$(function(){
	var carousel1Li=$(".carousel1").children("li");
	var nub=1;
	var str="";
	for (var i = 0; i < carousel1Li.length; i++) {
		str+="<li></li>";
		$(".carousel2").html(str);
	}
	$(".section1").on("mouseenter",function(){
		clearInterval(aaa);
	});
	$(".section1").on("mouseleave",function(){
		aaa=setInterval(fn1,2000);
	});
	$(".carousel2").on("click","li",function(){
		clearInterval(aaa);
		nub=$(this).index()+1;
		$(this).css("background-color","red").siblings("li").css("background-color","#CCCCCC");
		$(".carousel1").children("li").eq($(this).index()).animate({"zIndex":1,"opacity":1},1000).siblings("li").animate({"zIndex":0,"opacity":0},1000);
	})
	$(".carousel3").on("click",function(){
		clearInterval(aaa);
		$(".carousel2").children("li").eq(nub-2).css("background-color","red").siblings("li").css("background-color","#CCCCCC")
		$(".carousel1").children("li").eq(nub-2).animate({"zIndex":1,"opacity":1},1000).siblings("li").animate({"zIndex":0,"opacity":0},1000);
		nub--;
		if (nub<0) {
			nub=$(".carousel1").children("li").length-1;
		}
	})
	$(".carousel4").on("click",function(){
		clearInterval(aaa);
		fn1();
	})
	var aaa=setInterval(fn1,2000);
	function fn1(){
		$(".carousel2").children("li").eq(nub).css("background-color","red").siblings("li").css("background-color","#CCCCCC")
		$(".carousel1").children("li").eq(nub).animate({"zIndex":1,"opacity":1},1000).siblings("li").animate({"zIndex":0,"opacity":0},1000);
		nub++;
		if (nub>$(".carousel1").children("li").length-1) {
			nub=0;
		}
	}
	//
	$(".article1").find("li").on("mouseenter",function(){
		$(this).children("div").animate({"opacity":0},100).parent("li").siblings("li").children("div").animate({"opacity":0.5},100);
	})
	$(".article1").on("mouseleave",function(){
		$(".article1").find("div").animate({"opacity":0},100);
	})
	//
	$(".cut2").find("li").on("mouseenter",function(){
		$(this).addClass("li").siblings("li").removeClass("li");
		$(".cut1").children("li").eq($(this).index()).css("z-index",1).siblings("li").css("z-index",0)
	})
	//
	$(".section3").children("li").on("mouseenter",function(){
		$(this).children("img:eq(1)").slideDown(200);
		$(this).children("div").css({"color":"#BD9A7A","background-image":" url(img/camera-2.png)"});
	});
	$(".section3").children("li").on("mouseleave",function(){
		$(this).children("img").eq(1).slideUp(200);
		$(this).children("div").css({"color":"black","background-image":" url(img/camera-1.png)"});
	});
	//
	$(".section4").children("li").on("mouseenter",function(){
		$(this).children("div").css("background-color","#BD9A7A").children().css({"color":"white"});
		$(this).find("span").css({"border-color":"white"});
	});
	$(".section4").children("li").on("mouseleave",function(){
		$(this).children("div").css("background-color","#f0efef").children().css("color","black");
		$(this).find("span").css({"border-color":"#9a9999"});
	});
	$(".section5").children("li").on("mouseenter",function(){
		$(this).children("div").css("background-color","#BD9A7A").children().css("color","white");
		$(this).find("span").css({"border-color":"white"});
	});
	$(".section5").children("li").on("mouseleave",function(){
		$(this).children("div").css("background-color","#f0efef").children().css("color","black");
		$(this).find("span").css({"border-color":"#9a9999"});
	});
	//
	var nub2=0;
	$(".section6").on("mouseenter",function(){
		clearInterval(bbb);
	});
	$(".section6").on("mouseleave",function(){
		bbb=setInterval(fn2,4000);
	});
	$(".cut3").children("li").on("click",function(){
		clearInterval(bbb);
		nub2=$(this).index()+1;
		$(".section6").children("li").eq($(this).index()).animate({"zIndex":1,"opacity":1},1000).siblings("li").animate({"zIndex":0,"opacity":0},1000);
		$(".section6").children("li").eq($(this).index()).find("p").animate({"zIndex":1,"opacity":1},1000)
	});
	var bbb=setInterval(fn2,4000);
	function fn2(){
		$(".section6").children("li").eq(nub2).animate({"zIndex":1,"opacity":1},1000).siblings("li").animate({"zIndex":0,"opacity":0},1000);
		$(".section6").children("li").eq(nub2).find("p").animate({"zIndex":1,"opacity":1},1000);
		nub2++;
		if (nub2>$(".section6").children("li").length-1) {
			nub2=0;
		}
	}
	//
	$(".section8").children("li").on("mouseenter",function(){
		$(this).css("color","#BD9A7A");
	});
	$(".section8").children("li").on("mouseleave",function(){
		$(this).css("color","black");
	});
	//
	$(".article7").children("li").on("mouseenter",function(){
		$(this).css("color","#BD9A7A");
	});
	$(".article7").children("li").on("mouseleave",function(){
		$(this).css("color","black");
	});
	//
	$(".aside1").on("click",function(){
		$('html , body').animate({scrollTop: 0},200);
	})
	$(".aside1").on("mouseenter",function(){
		$(".aside1").children("img:eq(1)").css("z-index",1).siblings("img").css("z-index",0);
	});
	$(".aside1").on("mouseleave",function(){
		$(".aside1").children("img:eq(0)").css("z-index",1).siblings("img").css("z-index",0);
	});
	//
	 $('.name').blur(function () {
	 	var name=$(this).val();
	 	var reg=/^[\u4e00-\u9fa5]{2,4}$/;
	 	if (reg.test(name)===false || name===" ") {
	 		alert("请输入正确用户名");
	 	}else{
	 		$(".sub").on("click",function(){
			 	var m=new XMLHttpRequest();
				m.open('get','01.php?name='+$(".name").val());
				m.send();
				m.onreadystatechange=function(){
				if (m.readyState==4 && m.status==200) {
						alert(m.responseText);
					}
				}
			});
	 	}
	 });
	  $('.tel').blur(function () {
	 	var name=$(this).val();
	 	var reg=/\d{11}/;
	 	if (reg.test(name)) {
	 		
	 	} else{
	 		alert("请输入正确手机号");
	 	}
	 });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})