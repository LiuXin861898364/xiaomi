;(function($){
			var index=0,
			len=$("#banner li").length,
			ulobj=$("#banner>ul"),
			spanobj=$("#icon>span");
			
			function change(){
				if(index>=len-1){
					index=0;
					ulobj.css({"margin-left":0});
				}
				index++;
				chimg(index);
			}
			
		    set=setInterval(change,2000);
			$("#banner").swipeLeft(function(){
				clearInterval(set);
				change();
				chimg(index);
				set=setInterval(change,2000);
			}).swipeRight(function(){
				clearInterval(set);
				index--;
				if(index<0){
					index=len-1;
					var s='-'+100*index+'%';
					ulobj.css({"margin-left":s});
				}
				chimg(index);
				set=setInterval(change,2000);
			})
			function chimg(index){
				var mar='-'+100*index+'%';
				ulobj.animate({marginLeft:mar},1000);
				spanobj.eq(index).addClass("on").siblings().removeClass("on");
				if(index==len-1){
					spanobj.eq(0).addClass("on").siblings().removeClass("on");
				}
			}	
})(Zepto)