function Player () {
  this.x = 0;
  this.y = 450;
  // this.w = 60;
  // this.h = 90;
  // this.dx = 60;
  // this.dy =0;
  // this.dw = 60;
  // this.dh = 90;
  this.img = new Image();
  // this.init = function (w, h, dx, dy, dw, dh, imgSrc) {
  //   this.w = w;
  //   this.h = h;
  //   this.dx = dx;
  //   this.dy =dy;
  //   this.dw = dw;
  //   this.dh = dh;
  //   this.img.src = imgSrc;
  // }
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
    this.init(60 ,0 , 60 ,90 ,60 ,90 , 'img/Skeleton-Walk.gif')
    this.controlImageIndex(13);
    if (this.x < 900) {
      this.x += 4;
    }
  }
  this.moveLeft = function () {
    this.init(60 ,0 ,58 ,90 ,60 ,90 , 'img/Skeleton-Walk2.gif')
    this.controlImageIndex(13);
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
    if (this.y < 450) {
      this.y += 15;
    } else if (this.y > 450) {
      this.y = 450;
    }
  } 
  this.attack = function () {
    this.init(111 ,0 ,109 ,96 ,119 ,98 , 'img/Skeleton-Attack2.gif')
    this.controlImageIndex(13);
  }
  this.stop = function () {
    this.init(60 ,0 ,60 ,90 ,60 ,90 , 'img/Skeleton-Walk.gif')
  }
}
Player.prototype = new Character();
