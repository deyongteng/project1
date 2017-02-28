function animationD(){
	$(".use").eq(2).append("<div class='animatiBox'></div>");
	$('.animatiBox').append(animati);
	//第一屏
	$('.Modular').eq(0).css("top","0");
	//生成第一层背景
	var str="";
	var bg1=animation.bg;
	str+="<ul class='bgBox'>";
		for (var i = 0; i < bg1.length; i++) {
			str+="<li class='bg"+(i+1)+"Box'>";
			str+="<img src='"+bg1[i]+"'/>";
			str+="</li>";
		}
	str+="</ul>";
	$('.Modular').eq(0).append(str);
	
	//生成倒计时
	var time1=animation.time;
	$('.Modular').eq(0).append("<ul class='time'></ul>");
	var timeHtml="";
	for (var i = 0; i < time1.length; i++) {
		timeHtml+="<li class='timeSpan'><img src='"+time1[i]+"' /></li>";
	}
	$(".time").append(timeHtml);
	var timeSpan=document.getElementsByClassName("timeSpan");
	var time=document.querySelector(".time");
	
	$('.timeSpan').eq(0).show();
		$(".bgBox").hide();
		$(".time").hide();
		
		
	//动画函数（背景加倒计时）	
	function daojishi(){
		$(".bgBox").show();
		$(".time").show();
		TweenMax.staggerFrom(".time", 1, {scale:0.5, opacity:0,  ease:Elastic.easeOut});
		var num=0;
		var timeVal=setInterval(function(){
			++num;
			if(num===2){
				clearInterval(timeVal);
			}
			for (var i = 0; i < timeSpan.length; i++) {
				$('.timeSpan').hide();
			}
			TweenMax.staggerFrom(".time", 1, {scale:0.5, opacity:0,  ease:Elastic.easeOut});
			$('.timeSpan').eq(num).show();
		},1000);
	}
	
	//爆炸效果出场
		//碎片
		var shuiP="";
		var fragment1=animation.fragment;
		shuiP+="<ul class='burstBox'>";
			for (var i = 0; i < fragment1.length; i++) {
				shuiP+="<li class='burst"+(i+1)+"Box'>";
				shuiP+="<img src='"+fragment1[i]+"'/>";
				shuiP+="</li>";
			}
		shuiP+="</ul>";
		$('.Modular').eq(0).append(shuiP);
		
		//地球
		var earth1=animation.earth;
		$('.Modular').eq(0).append("<div class='nameEarth'><img src='"+earth1[0]+"'/></div>");
		var nameEarth1=document.querySelector(".nameEarth");
		
		$(".burstBox").hide();
		$(".nameEarth").hide();
		
		
		//动画函数（地球加碎片）
		function suipian(){
			$(".bg5Box").hide();
			$(".time").hide();
			$(".burstBox").show();
			$(".nameEarth").show();
			TweenMax.staggerFrom(".burstBox", 1, {scale:0.5, opacity:0, delay:0.2, ease:Elastic.easeOut});
			css(nameEarth1,"scale",0.6);
			MTween({
				el:nameEarth1,
				target:{scale:108},
				time:500,
				type:"linear"
			});
			yundong();
		}
		
		//第一屏主题登场
		var title1=animation.title1;
		var title2=animation.title;
		var titleHtml="";
		titleHtml+="<div class='titeBox'>";
		for (var i = 0; i < title1.length; i++) {
			titleHtml+="<div class='tite"+(i+1)+"Box'><img src='"+title1[i]+"'></div>";
		};
		titleHtml+="<ul class='textImg'>";
		for (var i = 0; i < title2.length; i++) {
			if(i===2){
				titleHtml+="<li class='tite"+(i+3)+"Box'><span>"+title2[i]+"</span></li>";
			}else{
				titleHtml+="<li class='tite"+(i+3)+"Box'><img src='"+title2[i]+"'></li>";
			};
		};
		titleHtml+="</ul>";
		titleHtml+="</div>";
		
		$('.Modular').eq(0).append(titleHtml);
		$(".titeBox").hide();
		
		
		function yundong(){
				$(".titeBox").show();
				TweenMax.staggerFrom(".tite1Box", 0.8, {y:-200, scale:0.5, opacity:0, delay:1, ease:Elastic.easeOut});
			TweenMax.staggerFrom(".tite2Box", 0.8, {y:-200, scale:0.5, opacity:0, delay:1, ease:Elastic.easeOut});
			TweenMax.staggerFrom(".textImg", 0.8, {y:800, scale:0.5, opacity:0, delay:1, ease:Elastic.easeOut});
			TweenMax.staggerFrom(".tite5Box", 1, {y:-80, scale:0.8, opacity:0, delay:1.8, ease:Elastic.liner});
			var burstBox=document.querySelector(".burstBox");
			css(burstBox,"opacity",100);
			MTween({
				el:burstBox,
				target:{opacity:0},
				time:2000,
				type:"linear"
			});
			setTimeout(function(){
				$(".tite6Box").css("-webkit-animation-play-state","running");
			},2500)
		}
//第一屏动画函数
		diYiPing()
		function diYiPing(){
			daojishi();
			setTimeout(function(){
				suipian();
			},3000);
		}
	//第二屏
//	diErP();
//	function diErP(){
		var str2="";
		var bg2=animation.img2;
		var bg2TextBox=animation.img2Text;
		str2+="<ul class='bgBox2'>";
			for (var i = 0; i < bg2.length; i++) {
				str2+="<li class='bg2_"+(i+1)+"Box'>";
				str2+="<img src='"+bg2[i]+"'/>";
				str2+="</li>";
			}
		str2+="</ul>";
		$('.Modular').eq(1).append(str2);
		$(".bgBox2").append(titleHTML2);//头部文字与中间文字的框架（引用了html.js文件）；
		$(".top2").html(bg2TextBox[0]);
		console.log(bg2TextBox[0])
		var bg2Text=animation.img2Text;
		var pHtml="";
		for (var i = 1; i < bg2Text.length; i++) {
			pHtml+="<span class='text"+(i+1)+"'>"+bg2Text[i]+"</span>";
		}
		$(".textContent").append(pHtml);
		TweenMax.staggerFrom(".top1", 0.8, {z:-100, scale:0.6, opacity:0, delay:0.8, ease:Elastic.liner});
		TweenMax.staggerFrom(".top2", 0.8, {z:100, scale:2, opacity:0, delay:0.5, ease:Elastic.liner});
		TweenMax.staggerFrom(".top3", 0.8, {z:-100, scale:0.6, opacity:0, delay:0.8, ease:Elastic.liner});
		TweenMax.staggerFrom(".textContent", 3, {z:-100, scale:0.6, opacity:0, delay:0.5, ease:Elastic.easeOut});
		TweenMax.staggerFrom(".bg2_4Box", 2, {y:1000, scale:1, opacity:0, delay:0.5, ease:Elastic.liner});
		
//	}
////上下滑动事件
//	var height;
//	var setValueY="";
//	var getY="";
//	var hdY="";
//	var Modular0=document.getElementsByClassName("Modular")[0];
//	setTimeout(function(){
//		height=Modular0.offsetHeight;
//		return height;
//	},50);
//	var getStartY="";
//	var getChaZ="";
//	var getChaZiY="";
//	$(".animatiBox").on("touchstart",function(ev){
//		getStartY=ev.changedTouches[0].pageY;
//		getChaZiY=css(Modular0,"translateY");
//	});
//	$(".animatiBox").on("touchmove",function(ev){
//		var getMoveY="";
//		getMoveY=ev.changedTouches[0].pageY;
//		
//		setValueY=getMoveY-getStartY;
//		
//		hdY=getChaZiY+setValueY;
//		css(Modular0,"translateY",hdY);
//		if(hdY<10){
//			
//		}
//	});
//	$(".animatiBox").on("touchend",function(){
//		if(hdY>10){
//			hdY=height;
//				MTween({
//				el:Modular0,
//				target:{translateY:hdY},
//				time:300,
//				type:"linear"
//			});
//		}else if(hdY<10){
//			diErP();
////			$(".Modular").eq(0).hide();
//			hdY=height;
//				MTween({
//				el:Modular0,
//				target:{translateY:-hdY},
//				time:300,
//				type:"linear"
//			});
//		}
//	});
}
