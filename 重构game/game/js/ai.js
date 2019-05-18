function Ai () {
  this.x = 800;
  this.y = 458;
  // this.w = 150;
  // this.h = 90;
  // this.dx = 150;
  // this.dy =0;
  // this.dw = 150;
  // this.dh = 90;
  this.img = new Image();
  this.init = function (dx, dy, w, h, dw, dh, imgSrc) {
    this.dx = dx;
    this.dy =dy;
    this.w = w;
    this.h = h;
    this.dw = dw;
    this.dh = dh;
    this.img.src = imgSrc;
  }
  this.moveRight = function () {
    this.init(169 ,0 ,100 ,90 ,100 ,90 , 'img/Minotaur_right.gif')
    this.controlAiImageIndex(8);
    if (this.x < 900) {
      this.x += 4;      
    }
  }
  this.moveLeft = function () {
    this.init(163 ,0 ,100 ,90 ,100 ,90 , 'img/Minotaur_left.gif')
    this.controlAiImageIndex(8);
    if (this.x > 0) {
      this.x -= 4;
    }
  }
  this.up = function () {
    if (this.y > 300) {
      this.y -= 15;
    }
  }
  this.down = function () {
    if (this.y < 458) {
      this.y += 15;
    } else if (this.y > 458) {
      this.y = 458;
    }
  } 
  // this.attack = function () {
  //   this.init(108 ,96 ,111 ,0 ,111 ,96 , 'img/Skeleton-Attack2.gif')
  //   this.controlImageIndex(13);
  // }
  // this.stop = function () {
  //   this.init(60 ,90 ,60 ,0 ,60 ,90 , 'img/Skeleton-Walk.gif')
  // }
}
Ai.prototype = new Character();
