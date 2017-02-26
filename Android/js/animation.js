function animationD(){
	$(".use").eq(2).append("<div class='animatiBox'></div>");
		diYiP();
	function diYiP(){
		var animati="<div class='Modular'></div>"
		$('.animatiBox').append(animati);
		//生成第一个bg
		var str="";
		var bg1=animation.bg;
		str+="<ul class='bgBox'>";
			for (var i = 0; i < bg1.length; i++) {
				str+="<li class='bg"+(i+1)+"Box'>";
				str+="<img src='"+bg1[i]+"'/>";
				str+="</li>";
			}
		str+="</ul>";
		$('.Modular').append(str);
		
		//生成倒计时
		var time1=animation.time;
		$('.Modular').append("<ul class='time'></ul>");
		var timeHtml="";
		for (var i = 0; i < time1.length; i++) {
			timeHtml+="<li class='timeSpan'><img src='"+time1[i]+"' /></li>";
		}
		$(".time").append(timeHtml);
		var timeSpan=document.getElementsByClassName("timeSpan");
		var time=document.querySelector(".time");
		
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
		
		//爆炸效果出场
		setTimeout(function(){
			yanc();
		},3000)
//		yanc();
		function yanc(){
			$(".bg5Box").hide();
			$(".time").hide();
			var shuiP="";
			var fragment1=animation.fragment;
			shuiP+="<ul class='burstBox'>";
				for (var i = 0; i < fragment1.length; i++) {
					shuiP+="<li class='burst"+(i+1)+"Box'>";
					shuiP+="<img src='"+fragment1[i]+"'/>";
					shuiP+="</li>";
				}
			shuiP+="</ul>";
			$('.Modular').append(shuiP);
			TweenMax.staggerFrom(".burstBox", 1, {scale:0.5, opacity:0, delay:0.2, ease:Elastic.easeOut});
			var earth1=animation.earth;
			$('.Modular').append("<div class='nameEarth'><img src='"+earth1[0]+"'/></div>");
			var nameEarth1=document.querySelector(".nameEarth");
			css(nameEarth1,"scale",0.6);
			MTween({
				el:nameEarth1,
				target:{scale:80},
				time:500,
				type:"linear"
			})
			
		}
		$('.Modular').eq(0).show();
	}
}
