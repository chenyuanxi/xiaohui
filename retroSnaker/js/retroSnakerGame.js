var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;
var borderSize = 10;

//game over
var gameOver=function(){
	clearInterval(intervalId);
	ctx.font="40px Courier";
	ctx.textAlign="center";
	ctx.fillText("game over",width/2,height/2);
};

//create 
var Block = function(col, row) {
	this.col = col;
	this.row = row;
}
//draw evironment
drawEvironment = function(color) {
	ctx.fillStyle = color;
	ctx.fillRect(0, 0, borderSize, height);
	ctx.fillRect(width - borderSize, 0, borderSize, height);
	ctx.fillRect(0, 0, width, borderSize);
	ctx.fillRect(0, height - borderSize, width, borderSize);
}
//draw square
Block.prototype.drawSquare = function(color) {
	ctx.fillStyle = color;
	ctx.fillRect(this.col * borderSize, this.row * borderSize, borderSize, borderSize);
}
//draw circle
Block.prototype.drawCircle = function(color) {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(this.col * borderSize + borderSize / 2, this.row * borderSize + borderSize / 2, borderSize / 2, 0, 2 * Math.PI,
		false);
	ctx.fill();
};
//judge  whether to eat or not
Block.prototype.equal = function(otherBlock) {
	return this.col === otherBlock.col && this.row === otherBlock.row;;
};
//create snake Object
var Snake = function() {
	this.segments = [
		new Block(5, 3),
		new Block(4, 3),
		new Block(3, 3)
	];
	this.direction = "right";
	this.nextDirection = "right"
};
//draw snake
Snake.prototype.drawSnake = function() {
	for (var i = 0; i < this.segments.length; i++) {
		this.segments[i].drawSquare("blue");
	};
};
//set sanke move
Snake.prototype.moveSnake=function(){
	var head=this.segments[0];
	var newHead;
	this.direction=this.nextDirection;
	
	if(this.direction==="right"){
		newHead=new Block(head.col+1,head.row);
	}else if(this.direction==="left"){
		newHead=new Block(head.col-1,head.row);
	}else if(this.direction==="up"){
		newHead=new Block(head.col,head.row-1);
	}else if(this.direction==="down"){
		newHead=new Block(head.col,head.row+1);
	}
	if(this.checkCollision(newHead)){
		gameOver();
		return;
	}
	this.segments.unshift(newHead);
	if(newHead.equal(apple.position)){
		console.log(newHead.equal(apple.position));
		apple.moveApple();
	}else{
		this.segments.pop();  
	}
};
//judge the collision
Snake.prototype.checkCollision=function(head){
	var wallCollision=(head.col===0)||(head.row===0)||(head.col===width/borderSize-1)||(head.row===height/borderSize-1);
	var selfCollision=false;
	for(var i=0;i<this.segments.length;i++){
		if(head.equal(this.segments[i])){
			selfCollision=true;
		}
	}
	return wallCollision||selfCollision;
};
//set keyboard event
Snake.prototype.setDirection=function(newDirection){
	if(this.direction==="right"&&newDirection=="left"){
		return;
	}else if(this.direction==="left"&&newDirection=="right"){
		return;
	}else if(this.direction==="down"&&newDirection=="up"){
		return;
	}else if(this.direction==="up"&&newDirection=="down"){
		return;
	}
	this.nextDirection=newDirection;
};
//create apple
var Apple=function(){
	this.position=new Block(10,10);
};
Apple.prototype.drawApple=function(){
	this.position.drawCircle("red");
};
Apple.prototype.moveApple=function(){
	var randomCol=Math.floor(Math.random()*(width/borderSize-2)+1);
	var randomRow=Math.floor(Math.random()*(height/borderSize-2)+1);
	this.position=new Block(randomCol,randomRow);
};


var snake=new Snake();
var apple=new Apple();

var intervalId=setInterval(
	function(){
		ctx.clearRect(0,0,width,height);
		snake.moveSnake();
		snake.drawSnake();
		apple.drawApple();
		drawEvironment("cyan");
	},100
);
var directions={
	37:"left",
	38:"up",
	39:"right",
	40:"down"
}
$("body").keydown(function(event){
	var newDirection=directions[event.keyCode];
	if(newDirection!==undefined){
		snake.setDirection(newDirection);
	}
});