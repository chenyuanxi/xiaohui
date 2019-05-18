var can, ctx, w, h;
var kflag = false;
var isSkill2=true;
var left=left2=right=right2=attack=attack2=fire=ice=0;
//技能次数
var skillTime=3;
// 血包
var bloodX=Math.floor(Math.random() * 600+200);
var bloodY=0;
//定时器
var t;
var skill;
var skill2;
//控制游戏开始
var start;
//控制血条
var blood1 = $('#bloodCover1');
var blood2 = $('#bloodCover2');
var count1 = parseInt(blood1.css('width'));
var count2 = parseInt(blood2.css('width'));
//获取按键值
var key;
//绘制小人图片的参数
var px, py, pw, ph, p_dx, p_dy, p_dw, p_dy;
var px2, py2, pw2, ph2, p_dx2, p_dy2, p_dw2, p_dy2, random = 0;
var dir = 'stop';
var glassPic = new Image();
var personPic1 = new Image();
var personPic2 = new Image();
var fireSkillImg = new Image();
var iceSkillImg = new Image();
var bloodPackage = new Image();
var direction = 'stop';
var personW, personH;
var padLeft = 0;
var padTop = 0;
var glassWidth = 1000;
var glassHeight = 630;

function updatePage() {
	setInterval(function () {
		random = Math.floor(Math.random() * 10)
	}, 1000);
	t = setInterval(function () {
		fillCanvas();
		drawGlass();
		drawPerson1();
		drawPerson2(random);
		drawBloodPackage();
	}, 1000/16);
}
function initPersonPicPosition() {
	px = 0;
	py = 450;
	pw = 60;
	ph = 90;
	p_dw = 60;
	p_dh = 90;
	p_dy = 0;
	px2 = 800;
	py2 = 450;
	pw2 = 150;
	ph2 = 90;
	p_dw2 = 150;
	p_dh2 = 90;
	p_dy2 = 0;
	glassPic.src = 'img/bg.jpg';
	personPic1.src = 'img/Skeleton-Walk.gif';
	personPic2.src = 'img/Minotaur_right.gif';
	fireSkillImg.src='img/skill.png';
	iceSkillImg.src = 'img/skill2.gif';		
	bloodPackage.src ='img/bloodPackage.gif';
}
function drawGlass() {
	ctx.drawImage(glassPic, padLeft, padTop, glassWidth, glassHeight);
}
function fillCanvas() {
	ctx.fillStyle = "#393550";
	ctx.fillRect(0, 0, w, h);
}

function drawPerson1() {
	if (dir == 'left') {
		personPic1.src = 'img/Skeleton-Walk2.gif';
		if (px == 0) {
			ctx.drawImage(personPic1, 60 * (left++), p_dy, p_dw, p_dh, px, py, pw, ph);
		} else if(px > 0){
			ctx.drawImage(personPic1, 60 * (left++), p_dy, p_dw, p_dh, px -= 4, py, pw, ph);
		}
		if(left == 13){left = 0;}	
	} else if (dir == 'right') {
		personPic1.src = 'img/Skeleton-Walk.gif';
		if (px == 920||Math.abs(px - px2) < 20) {
			ctx.drawImage(personPic1, 60 * (right++), p_dy, p_dw, p_dh, px, py, pw, ph);
		} else if(px<920){
			ctx.drawImage(personPic1, 60 * (right++), p_dy, p_dw, p_dh, px += 4, py, pw, ph);
		}
		if (right == 13) { right = 0; }
	} else if (dir == 'stop') {
		personPic1.src = 'img/Skeleton-Walk.gif';
		if (py != 450) {
			py += 10;
		}
		ctx.drawImage(personPic1, 0, p_dy, p_dw, p_dh, px, py, pw, ph);
	} else if (dir == 'up') {
		personPic1.src = 'img/Skeleton-Attack.gif';
		ctx.drawImage(personPic1, 0, p_dy, p_dw, p_dh, px, py -= 10, pw, ph);
		if (py == 300) {
			dir = 'stop';
		}
	} else if (dir = 'attack') {
		personPic1.src = 'img/Skeleton-Attack.gif';
		ctx.drawImage(personPic1, 105 * (attack--), p_dy, 104, p_dh, px, py, 104, ph);
		if (attack < 0) { attack = 17; };
		if (Math.abs(px - px2) < 50) {
			if (count2 != 0) {
				px2+=10;
				count2 -= 1;
				blood2.css('width', count2 + 'px');
			}
		}
		if (count2 < 0) {
			gameOver();
		}
	}
}
function drawPerson2(random) {
	if(skill){
		personPic2.src = 'img/Minotaur_left.gif';			
		if (px2 == 0||Math.abs(px - px2) < 20) {
			ctx.drawImage(personPic2, 161* left2, p_dy2, p_dw2, p_dh2, px2, py2, pw2, ph2);
		} else {
			ctx.drawImage(personPic2, 161* left2, p_dy2, p_dw2, p_dh2, px2 -= 4, py2, pw2, ph2);
		}
		left2++;
		if (left2 == 7) { left2 = 0; }
		return;
	}
	switch (random) {
		case 0:
			personPic2.src = 'img/Minotaur_right.gif';			
			if (px2 >= 850) {
				ctx.drawImage(personPic2, 170 * right2, p_dy2, p_dw2, p_dh2, px2, py2, pw2, ph2);
			} else {
				ctx.drawImage(personPic2, 170 * right2, p_dy2, p_dw2, p_dh2, px2 += 4, py2, pw2, ph2);
			}
			right2++;
			if (right2 ==7 ) { right2 = 0; }
			break;
		case 1:
			personPic2.src = 'img/Minotaur_left.gif';			
			if (px2 == 0||Math.abs(px - px2) < 20) {
				ctx.drawImage(personPic2, 161* left2, p_dy2, p_dw2, p_dh2, px2, py2, pw2, ph2);
			} else {
				ctx.drawImage(personPic2, 161* left2, p_dy2, p_dw2, p_dh2, px2 -= 4, py2, pw2, ph2);
			}
			left2++;
			if (left2 == 7) { left2 = 0; }
			break;
		case 2:
		case 3:
		case 4:
		case 5:
			if(isSkill2){
				Skill2();
				isSkill2=false;
			}
			personPic2.src = 'img/Minotaur_left.gif';			
			ctx.drawImage(personPic2, 0, p_dy2, p_dw2, p_dh2, px2, py2, pw2, ph2);
			break;
		case 6:
		case 7:
		case 8:
			personPic2.src = 'img/Minotaur_attack2.gif';			
			ctx.drawImage(personPic2, 159 *attack2, p_dy2, p_dw2, p_dh2, px2, py2, pw2, ph2);
			attack2++;
			if (attack2 == 8) { attack2 = 0; }
			if (Math.abs(px - px2) < 50) {
				if(px>0){
					px-=10;
				}
				count1 -= 1;
				blood1.css('width', count1 + 'px');
			}
			if (count1 < 0) {
				gameOver();
			}
			break;
		default:
			personPic2.src = 'img/Minotaur_left.gif';			
			ctx.drawImage(personPic2, 0, p_dy2, p_dw2, p_dh2, px2, py2, pw2, ph2);
			break;
	}
}

// 技能
function Skill(){
	$('#fire'+skillTime).css('display', 'none');
	var x=px,y=py;
	fire=0;
	skill=setInterval(() => {
		if(x==1000){
			clearInterval(skill)
			skill=null;
		}
		ctx.drawImage(fireSkillImg, 100 *(fire++), p_dy2,100, 95, x+=10, y,100, 95);
		if (fire > 8) { fire = 0; }
		if (Math.abs(x - px2) < 10&&py2>420) {
			if (count2 != 0) {
				px2+=30;
				count2 -= 30;
				blood2.css('width', count2 + 'px');
			}
			clearInterval(skill)
			skill=null;
		}
		if (count2 < 0) {
			gameOver();
		}
	}, 20);
}
function Skill2(){
	var x2=px2,y2=py2;
	ice=0;
	skill2=setInterval(() => {
		if(x2<0){
			clearInterval(skill2)
			skill2=null;
			isSkill2=true;
		}
		ctx.drawImage(iceSkillImg, 91 *ice, p_dy2,91, 95, x2-=10, y2,91, 95);
		ice++;
		if (ice > 8) { ice = 0; }
		if (Math.abs(x2 - px) < 10&&py>440) {
			if (count1 != 0) {
				if(px>0){
					px-=20;
				}
				count1 -= 30;
				blood1.css('width', count1 + 'px');
				
			}
			clearInterval(skill2)
			skill2=null;
			isSkill2=true;
		}
		if (count1 < 0) {
			gameOver();
		}
	}, 20);
}
// 血包
function drawBloodPackage (){
	ctx.drawImage(bloodPackage,bloodX, bloodY,30, 30);
	if(bloodY<500){
		bloodY+=2;
	}else {
		bloodY=500;
	}
	if(Math.abs(px - bloodX) < 20&&bloodY>450){
		if (count1 != 200) {
			count1 += 20;
			blood1.css('width', count1 + 'px');
			bloodY=-100;
			bloodX=Math.floor(Math.random() * 600+200);
		}
	}
	if(Math.abs(px2 - bloodX) < 20&&bloodY>450){
		if (count2 != 200) {
			count2 += 20;
			blood2.css('width', count2 + 'px');
			bloodY=-100;
			bloodX=Math.floor(Math.random() * 600+200);
		}
	}
}
function gameStart() {
	can = document.getElementById('canvas');
	ctx = can.getContext('2d');
	w = can.width;
	h = can.height;
	// personW = personPic.width;
	// personH = personPic.height;
	initPersonPicPosition();
	updatePage();
}
function gameOver() {
	clearInterval(t);
	$('#stop').css('z-index', '10');
	if (count2 < 0) {
		$('#stop-text').text('你赢了');
	} else {
		$('#stop-text').text('你输了');
	}
}
gameStart();


(function keyControl() {
	$(document).keydown(function (e) {
		key = e.which;
		if(py == 450){
			if (key == 37) {
				dir = 'left';
			} else if (key == 39) {
				dir = 'right';
			} else if (key == 74) {
				dir = 'attack';
			} else if (key == 13) {
				$('#start').css('opacity', '0');
				start = true;
			}
		}
		if (kflag) {
			e.preventDefault();
		} else {
			kflag = true;
			if (e.which == 38) {
				if (py == 450) {
					dir = 'up';
				}
			}else if(e.which == 75){
				if(skillTime==0){
					return;
				}
				if(!skill){
					Skill();
					skillTime--;
				}
			}
		}	
	});
	$(document).keyup(function (e) {
		kflag = false;
		if (py == 450) {
			dir = 'stop';
		}
	});
})();