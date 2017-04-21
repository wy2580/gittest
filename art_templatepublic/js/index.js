//Fastclick插件初始化
(function(){
	$(function(){
		new FastClick(document.body);
	})
})();
//设备高度
(function(){
	var height1=document.documentElement.clientHeight/100+"rem";
	$("body").css({minHeight:height1});
	$("#scheduleCon").css({minHeight:height1});
	// var height2 = $("body").height();
	// if(height2<height1){ 
	// 	$("body").minHeight(height1);
	$("body").css({backgroundColor:'rgba(31,40,50,.9)'})
	// }
})();
//返回历史记录
(function(){
	$(".back").on("click",function(){
		window.history.back(-1); 
	});
	$(".quexiaoa").on("click",function(){
		window.history.back(-1); 
	});
})();

//首页滑动区域宽度设置
// (function(){
// 	var wid1=3.1*$(".chengjiul li").length+"rem";
// 	$(".chengjiul").width(wid1);
// 	var wid2=(1.9+parseInt($(".chuanduijieshaodiv a").css('marginRight')))*$(".chuanduijieshaodiv a").length+"rem";
// 	$(".chuanduijieshaodiv").width(wid2);
// 	// var wid3=$("#zshinfo div").eq(0).width()*$("#zshinfo div").length;
// })();


// 首页tap切换

(function(){
	$("#saishishijian a").eq(0).css({color:"#55ccff",borderBottom:".04rem solid #55ccff"});
	$("#journeyarrange div").eq(0).css({display:"block"});
	$("#saishishijian a").on("click",function(){
		$("#saishishijian a").css({color:"#fff",borderBottom:"none"});
		$("#journeyarrange div").css({display:"none"});
		var y=$(this).index();
		$(this).css({color:"#55ccff"});
		$(this).css({borderBottom:".04rem solid #55ccff"});
		$("#journeyarrange div").eq(y).css({display:"block"});
	})
})();
// 赛船详解部分tap切换
(function(){
	// $("#zsaishichuanxing a").eq(0).addClass("zchuanxing1");
	$("#zsaishichuanxing a").eq(0).css({color:"#00b1ff",borderBottom:".04rem solid #00b1ff"});
	$("#zshinfo div").eq(0).css({display:"block"});
	$("#zsaishichuanxing a").on("click",function(){
		$("#zsaishichuanxing a").css({color:"#fff",borderBottom:"none"});
		$("#zshinfo div").css({display:"none"});
		var y=$(this).index();
		$(this).css({color:"#00b1ff"});
		$(this).css({borderBottom:".04rem solid #00b1ff"});
		$("#zshinfo div").eq(y).css({display:"block"});

	})
})();
//船队报名系列首页点击事件
(function(){
	$(".zfenlei a").css({color:"#fff",borderBottom:"none"});
	$(".zfenlei a").eq(0).css({color:"#00b1ff",borderBottom:".04rem solid #00b1ff"});
	$(".zfenlei a").on("click",function(){
		$(".zfenlei a").css({color:"#fff",borderBottom:"none"});
		$(this).css({color:"#00b1ff",borderBottom:".04rem solid #00b1ff"});
	})
})();
//船队参赛信息页面提示信息
(function(){
	$(".cdbmalert").fadeOut(1500);
})();
//船队管理close按钮部分
(function(){
	$(".close").on("click",function(){
		$(".cdglclose").css({display:"none"});
	});
	// $(".cdzydate").height()=$(".cdsychuansaixinxi").height();
	var x=$(".cdsychuansaixinxi").height();
	$(".cdzydate1").height(x);
})();


//船队子页和新梦想团队下拉选择框信息
(function(){
	var z=0;

	$(".xiajiantou").each(function(i){
		// console.log(i);
		$(".xialaselect").css({display:"none"});
		$(this).click(function(){
			var x=i;
			z+=1;
	        if(z%2!=0){
				$(".xialaselect").eq(x).css({display:"block"});
				$(".xialaselect").eq(x).children("li.xlselectli").each(function(j){
					$(this).click(function(){
				        // $(".bisainianfen").eq(x).children("input.scinput").val($(this).text());
				        // $(".xmxjuesek").eq(x).children("input.xmxinput").val($(this).text());
				        $(this).parent().parent().children(0).val($(this).text());
						$(".xlselectli").css({color:"#fff"});
						$(this).css({color:"red"});
						$(".xialaselect").eq(x).css({display:"none"});
				     })
				})
			}else{
				$(".xialaselect").eq(x).css({display:"none"});
			};
	     })
	})
})();

//船队子页和新梦想船队页点击添加、删除
(function(){	
	var x=0;
	$(".jianhao").on("click",function(){
		$(this).parent().remove();
	})
	$(".add").on("click","img.xmxjiahao",function(){
		$(this).parent().clone(true).appendTo(".cdbmformsafe");
		$(this).attr("src","images/jianhao.svg");
		$(this).removeClass("xmxjiahao").addClass("jianhao");
		$(".jianhao").on("click",function(){
			$(this).parent().remove();
		})		
	});		
})();

//个人报名主页
(function(){
	var x=$(".grbmzymid").height();
	$(".grbmimga").height(x);
})();
//船队参赛信息
(function(){
	// var dpi = window.devicePixelRatio;//获取屏幕分辨率
	// var width = sysWidth / dpi;//用系统返回宽度除以分辨率。
	var height = document.body.scrollHeight;
	$(".cdcansaibj").height(height)
})();
 
//二期航海网首页事件
(function(){
	$(".indexHeaderli").eq(0).removeClass('indexHeaderli1').addClass('indexHeaderli2');
	$(".indexHeaderli").each(function(){
		var item=$(this);
		item.click(function(){
			var itemx=item.index();
			$(".indexCon .indexConPart").hide();
			$(".indexHeaderUl li").removeClass('indexHeaderli2').addClass('indexHeaderli1');
			item.removeClass('indexHeaderli1').addClass('indexHeaderli2');
			$(".indexCon .indexConPart").eq(itemx).show();
		})
		
	});
	var leftWidth=$(".scheduleConRight").height();
	$(".scheduleConLeft").height(leftWidth);
})(); 
//船队主页宽度适应
// function setWidth(ele){
// 	$(ele).each(function(i){
// 		var x = ($(ele).eq(i).children().width()+10)*$(ele).children().length + "rem";
// 		$(ele).width(x);
// 	});
// }
// setWidth(".cdzychengyuan");
//点击小火箭返回顶部
(function(){
	$(".goback").click(function(){
		// document.documentElement.scrollTop = document.body.scrollTop =0;   js实现
		$('body,html').animate({scrollTop:0},500);   //jquery实现
	})
})();
//隐藏头部报名的小图标
(function(){
	$("#cdbmzhuyetouxiang").hide();
})();
