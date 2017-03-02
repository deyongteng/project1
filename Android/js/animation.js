function animationD(){
	$(".use").eq(2).append("<div class='animatiBox'></div>");
	$('.animatiBox').append(animati);

	window.addEventListener("load", function() {
			var documentH=document.documentElement.offsetHeight;
			var documentW=document.documentElement.offsetWidth;
			var setHeight;
			var setWidth;
			if(documentH>568){
				setHeight=documentH-568;
				console.log(setHeight)
				$('#interface').css("margin","auto 0");
				$('animatiBox').css("margin","auto 0");
			}
			if(documentH<568){
				setHeight=568-documentH;
				console.log(setHeight)
				$('#interface').css("bottom",-setHeight);
				$('animatiBox').css("bottom",-setHeight);
			}
			if(documentW>320){
				setWidth=(documentW-320)/2;
				$('animatiBox').css("width","320px");
				$('animatiBox').css("padding","0"+ setWidth);
			}
	},{
		passive:false
	});
	//第一屏
	//生成第一层背景
	var diYiPingHtml="";
	var bg1=animation.bg;
	diYiPingHtml+="<ul class='bgBox'>";
		for (var i = 0; i < bg1.length; i++) {
			diYiPingHtml+="<li class='bg"+(i+1)+"Box'>";
			diYiPingHtml+="<img src='"+bg1[i]+"'/>";
			diYiPingHtml+="</li>";
		}
	diYiPingHtml+="</ul>";
	var jQ_Modular=$('.Modular');//每一屏的最大父级，使用这个变量可以节省获取元素
	jQ_Modular.eq(0).append(diYiPingHtml);
	//动画函数（背景加倒计时）	
	function daojishi(){
		//生成倒计时
		$(".bg5Box").show();
		var time1=animation.time;
		jQ_Modular.eq(0).append("<ul class='time'></ul>");
		var timeHtml="";
		for (var i = 0; i < time1.length; i++) {
			timeHtml+="<li class='timeSpan'><img src='"+time1[i]+"' /></li>";
		}
		$(".time").append(timeHtml);
		var timeSpan=document.getElementsByClassName("timeSpan");
		$('.timeSpan').eq(0).show();
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
		$(".bgBox").show();
		$(".time").show();
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
	jQ_Modular.eq(0).append(shuiP);
	
	//地球
	var earth1=animation.earth;
	jQ_Modular.eq(0).append("<div class='nameEarth'><img src='"+earth1[0]+"'/></div>");
	var nameEarth1=document.querySelector(".nameEarth");
	var burstBox=document.querySelector(".burstBox");
	css(burstBox,"opacity",0);
	css(burstBox,"scale",90);
	$(".nameEarth").hide();
	//动画函数（地球加碎片）
	function suipian(){
		$(".time").html("");
		var burstBox=document.querySelector(".burstBox");
		css(burstBox,"opacity",100);
		css(burstBox,"scale",100);
		TweenMax.staggerFrom(".burstBox", 1, {scale:0.5, opacity:0, delay:0.2, ease:Elastic.easeOut});
		css(nameEarth1,"scale",0.6);
		MTween({
			el:nameEarth1,
			target:{scale:108},
			time:500,
			type:"linear"
		});
		yundong();//运动函数（主场动画）
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
	
	jQ_Modular.eq(0).append(titleHtml);
	$(".titeBox").hide();
	
	//运动函数（主场动画）
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
		$(".tite6Box").css("-webkit-animation-play-state","paused");
		$(".tite6Box").css("animation-play-state","paused");
		setTimeout(function(){
			$(".tite6Box").css("-webkit-animation-play-state","running");
			$(".tite6Box").css("animation-play-state","running");
		},2000);
	}
	//第一屏总动画函数；
	diYiPing();
	function diYiPing(){
		daojishi();
		$(".titeBox").hide();
		$(".nameEarth").hide();
		setTimeout(function(){
			suipian();
			$(".titeBox").show();
			$(".time").html("");
			$(".bg5Box").hide();
			$(".nameEarth").show();
		},3000);
	}
	
//第二屏
	var diErPingHtml="";
	var bg2=animation.img2;
	var bg2TextBox=animation.img2Text;
	diErPingHtml+="<ul class='bgBox2'>";
		for (var i = 0; i < bg2.length; i++) {
			diErPingHtml+="<li class='bg2_"+(i+1)+"Box'>";
			diErPingHtml+="<img src='"+bg2[i]+"'/>";
			diErPingHtml+="</li>";
		}
	diErPingHtml+="</ul>";
	jQ_Modular.eq(1).append(diErPingHtml);
	$(".bgBox2").append(titleHTML2);//头部文字与中间文字的框架（引用了html.js文件）；
	$(".top2").html(bg2TextBox[0]);
	var bg2Text=animation.img2Text;
	var pHtml="";
	for (var i = 1; i < bg2Text.length; i++) {
		pHtml+="<span class='text"+(i+1)+"'>"+bg2Text[i]+"</span>";
	}
	$(".textContent").append(pHtml);
	
	//第二屏动画函数（头部、中间、底部动画）
	function diErPingDh(){
		TweenMax.staggerFrom(".top1", 0.8, {z:-100, scale:0.6, opacity:0, delay:0.8, ease:Elastic.liner});
		TweenMax.staggerFrom(".top2", 0.8, {z:100, scale:2, opacity:0, delay:0.5, ease:Elastic.liner});
		TweenMax.staggerFrom(".top3", 0.8, {z:-100, scale:0.6, opacity:0, delay:0.8, ease:Elastic.liner});
		TweenMax.staggerFrom(".textContent", 3, {z:-100, scale:0.6, opacity:0, delay:1.5, ease:Elastic.easeOut});
		TweenMax.staggerFrom(".bg2_4Box", 0.8, {y:1000, scale:1, opacity:0, delay:0.5, ease:Elastic.liner});
	}

 	//第三屏
 	var diSanPing=animation.img3;
 	var nameLin=animation.name;
 	var diSanPingHtml="";
 	diSanPingHtml+="<ul class='bgBox3'>";
 	for (var i = 0; i < diSanPing.length; i++) {
 		 if(i===8){
 			diSanPingHtml+="<li class='bg3_"+(i+1)+"Box'>";
 			diSanPingHtml+="<span>"+diSanPing[i]+"</span>";
 			diSanPingHtml+="</li>";
 		}else  if(i===6){
 			diSanPingHtml+="<li class='bg3_"+(i+1)+"Box'>";
 			diSanPingHtml+="<span>"+diSanPing[i]+"</span>";
 			diSanPingHtml+="</li>";
 		}else if(i===5){
 			diSanPingHtml+="<li class='bg3_"+(i+1)+"Box'></li>";
 		}else{
 			diSanPingHtml+="<li class='bg3_"+(i+1)+"Box'>";
	 		diSanPingHtml+="<img src='"+diSanPing[i]+"'/>";
	 		diSanPingHtml+="</li>";
 		}
 	}
 	//个人照片 （考虑到移动端定位的差距，临时方法：三合一）；
 	diSanPingHtml+="<li class='bg3_10Box'>";
 	diSanPingHtml+="<span><img src='"+nameLin[0]+"'/></span>";
	diSanPingHtml+="<span><img src='"+nameLin[1]+"'/></span>";
	diSanPingHtml+="<div><span>"+nameLin[2]+"<span></div>";
 	diSanPingHtml+="</li>";
 	
 	diSanPingHtml+="</ul>";
 	jQ_Modular.eq(2).append(diSanPingHtml);
	$(".bg3_6Box").append(svgHtml)
	jQ_Modular.eq(2).hide();
//上下滑动事件
	
	var setValueY="";
	var getY="";
	var hdY="";
	var animatiBox=document.querySelector(".animatiBox");
	
	var jQ_animatiBox=$(".animatiBox");
	var getStartY="";
	var getChaZ="";
	var getChaZiY="";
	var jQ_Modular0=$(".Modular").eq(0)
	var jQ_Modular1=$(".Modular").eq(1)
	jQ_Modular0.css("zIndex",2);
	jQ_Modular1.css("zIndex",1);
	
	jQ_animatiBox.on("touchstart",function(ev){
		height=document.getElementById("interface").offsetHeight;
		getStartY=ev.changedTouches[0].pageY;
	});
	var onoff=true;
	jQ_animatiBox.on("touchmove",function(ev){
		var getMoveY="";
		getMoveY=ev.changedTouches[0].pageY;
		setValueY=getMoveY-getStartY;
		if(setValueY<0){
			jQ_Modular0.css("zIndex",1);
			jQ_Modular1.css("zIndex",2);
			jQ_Modular1.css("top","100%");
			jQ_Modular1.css("top",setValueY+height);
			if(onoff){
				diErPingDh();	//第二屏总动画函数；
				onoff=false;
			}
			
		}
		if(setValueY>0){
			jQ_Modular1.css("zIndex",1);
			jQ_Modular0.css("zIndex",2);
			jQ_Modular1.css("top","0");
			jQ_Modular0.css("top",setValueY-height);
			if(onoff){
				diYiPing();//第一屏总动画函数；
				onoff=false;
			}
		}
		
	});
	jQ_animatiBox.on("touchend",function(){
		onoff=true;
		if(setValueY<10){
			jQ_Modular1.animate({
				top:0
			},500,function(){
				jQ_Modular0.css("top",-height);
			});
		}else{
			jQ_Modular0.animate({
				top:0
			},500,function(){
				jQ_Modular1.css("top",height);
			});
		}
	});
}
