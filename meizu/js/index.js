// 添加背景图片
var addBackground=function(src,obj,x,y,xStep,yStep){
	var str;
	for(var i=0;i<obj.length;i++){
		str="url("+src+") no-repeat"+" "+x+"px"+" "+y+"px";
		obj[i].style.background=str;
		x+=xStep;
		y+=yStep;
	}
}
var mobileImg=document.getElementsByClassName("mobile-img");
var headsetImg=document.getElementsByClassName("headset-img");
var partImg=document.getElementsByClassName("part-img");
var lifeImg=document.getElementsByClassName("life-img");
addBackground("img/navMobile.png",mobileImg,0,0,-152,0);
addBackground("img/navHeadset.png",headsetImg,0,0,-152,0);
addBackground("img/navPart.png",partImg,14,0,-152,0);
addBackground("img/navLife.png",lifeImg,0,0,-152,0);

//轮播图banner
var dotList=document.getElementsByClassName("dot-list-item");
var banner=document.getElementById("bannerImg");

for(var i=0;i<dotList.length;i++){
	dotList[i].setAttribute("banner-index",i);
}
//根据index切换图片
var changeLeft=function(cIndex){
	banner.style.transition="left 0.5s";
	if(cIndex==0){
		banner.style.transition="none";
	}
	banner.style.left=-cIndex *100+"%";
}
//改变list样式
var changeListStyle=function(){
	this.style.backgroundColor="transparent";
	this.style.border="1px #fff solid";
	for(var i=0;i<dotList.length;i++){
		if(this!=dotList[i]){
			dotList[i].removeAttribute("style");
		}
	}
}

//全局变量index
var index=0;
//点击list切换图片
var listClick=function(){
	var listIndex=this.getAttribute("banner-index");
	changeLeft(listIndex);
	changeListStyle.apply(this);
	index=listIndex
}

for(var i=0;i<dotList.length;i++){
	dotList[i].addEventListener("click",listClick,true);
}
//图片轮播
var wheelPlay=function(){
	setInterval(function(){
		if(index<6){
			changeListStyle.apply(dotList[index]);
		}else{
			changeListStyle.apply(dotList[0]);
		}
		changeLeft(index);
		index++;
		if(index==7){
			index=0;
		}
	},3000);
}
wheelPlay();
