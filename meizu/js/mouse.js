var addNavText = document.getElementsByClassName("add-nav-text");
var topText = document.getElementsByClassName("top-color");
var navAddItem=document.getElementsByClassName("navAdd-item");
var personalIcon=document.getElementsByClassName("personal-icon");

var APPdownload = document.getElementById("APPdownload");
var downloadAdd = document.getElementById("downloadAdd");
var searchText = document.getElementById("searchText");
var logo = document.getElementById("logo");
var shopNavAdd = document.getElementById("shopNavAdd");
var headerTop = document.getElementById("headerTop");
var personalCard=document.getElementById("personalCard");
var footerAddItem=document.getElementsByClassName("footerAdd");
var footerAdd=document.getElementById("footer-list-add");
var footerAddList=document.getElementsByClassName("footer-add-item");

//修改headerTop等相关属性
var change=function(){
	searchText.style.border = "1px #999999 solid";
	headerTop.style.backgroundColor = "#fff";
	logo.style.color = "#00beff";
	for (var i = 0; i < personalIcon.length; i++) {
		personalIcon[i].style.color = "#000";
	}
	for (var i = 0; i < topText.length; i++) {
		if (this != topText[i]) {
			topText[i].style.color = "#000";
		}
	}
}
var changeBcak=function(){
	headerTop.style.backgroundColor = "transparent";
	searchText.style.border = "none";
	shopNavAdd.style.transition = "none";
	shopNavAdd.style.height = 0 + "px";
	for (var i = 0; i < personalIcon.length; i++) {
		personalIcon[i].style.color = "#fff";
	}
	for (var i = 0; i < topText.length; i++) {
		topText[i].style.color = "#fff";
	}
	logo.style.color = "#fff";
}
//add-nav-text类鼠标悬浮显示卡片
var overAddNav = function() {
	change();
	shopNavAdd.style.transition = "height 0.5s";
	shopNavAdd.style.height = 208 + "px";
}
//add-nav-text鼠标移除收起卡片
var outAddNav = function() {
	changeBcak();
}
//APPdownload悬浮卡片
var overDownload = function() {
	change();
	downloadAdd.style.transition = "height 0.5s";
	downloadAdd.style.height = 314 + "px";
}
//APPdownload移出卡片
var outDownload = function() {
	changeBcak();
	downloadAdd.style.transition = "none";
	downloadAdd.style.height = 0 + "px";
}
//鼠标悬浮改变颜色
var overChangeColor = function() {
	this.style.color = "#00beff";
}
//鼠标离开回到默认颜色
var outChangeColor = function() {
	this.removeAttribute("style");
}
//切换隐藏同级卡片
var switchCard = function(cardIndex,obj,changeObj) {
	var index=parseInt(this.getAttribute(cardIndex));
	for(var i=0;i<obj.length;i++){
		if(i==index){
			changeObj[i].style.display="block";
		}else{
			changeObj[i].style.display="none";
		}
	}
}
//personalIcon悬浮显示下拉卡片
var personalDisplayCard=function(){
	personalCard.style.display="block"
}
var personalHideCard=function(){
	personalCard.style.display="none"
}

//添加事件
for (var i = 0; i < addNavText.length; i++) {
	addNavText[i].addEventListener("mouseover", overAddNav, false);
	addNavText[i].addEventListener("mouseout", outAddNav, false);
}
for (var i = 0; i < addNavText.length; i++) {
	addNavText[i].addEventListener("mouseover",function(){switchCard.apply(this,["data-index",addNavText,navAddItem])}, false);
}
shopNavAdd.addEventListener("mouseover", overAddNav, false);
shopNavAdd.addEventListener("mouseout", outAddNav, false);

APPdownload.addEventListener("mouseover", overDownload, false);
APPdownload.addEventListener("mouseout", outDownload, false);
downloadAdd.addEventListener("mouseover", overDownload, false);
downloadAdd.addEventListener("mouseout", outDownload, false);

for (var i = 0; i < topText.length; i++) {
	topText[i].addEventListener("mouseover", overChangeColor, false);
	topText[i].addEventListener("mouseout", outChangeColor, false);
}

personalIcon[0].addEventListener("mouseover", personalDisplayCard, false);
personalIcon[0].addEventListener("mouseout", personalHideCard, false);
personalCard.addEventListener("mouseover", personalDisplayCard, false);
personalCard.addEventListener("mouseout", personalHideCard, false);


//footer悬浮
for(var i=0;i<footerAddItem.length;i++){
	footerAddItem[i].setAttribute("footerListIndex",i);
}

for(var i=0;i<footerAddItem.length;i++){
	footerAddItem[i].addEventListener("mouseover",function(){
		footerAdd.style.height=148+"px";
		switchCard.apply(this,["footerListIndex",footerAddItem,footerAddList]);
	},false);
}
for(var i=0;i<footerAddItem.length;i++){
	footerAddItem[i].addEventListener("mouseout",function(){footerAdd.style.height=0+"px";},false);
}