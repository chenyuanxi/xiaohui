function Character () {}
Character.prototype.draw = function (index) {
  ctx.drawImage(this.img, this.dx * index, this.dy, this.w, this.h, this.x, this.y, this.dw, this.dh);
}
Character.prototype.controlImageIndex = function (number) {
  imgIndex++;
  if (imgIndex == number) {
    imgIndex = 0;      
  }
}
Character.prototype.controlAiImageIndex = function (number) {
  aiImgIndex++;
  if (aiImgIndex == number) {
    aiImgIndex = 0;      
  }
}
