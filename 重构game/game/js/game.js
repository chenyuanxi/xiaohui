// 全局变量
var imgIndex =0// 控制图片帧
var aiImgIndex=-1 // 控制ai图片帧

// 键盘事件
var KEY_CODES = { 37:'left', 39:'right',74: 'attack', 13: 'start'}
var keys = {}
var state = true // 控制只触发一次键盘事件
var keyState = true // 控制只触发一次键盘事件


var setupInput = function() {
  window.addEventListener('keydown',function(e) {
    // 改变人物状态
    if (KEY_CODES[event.keyCode]) {
      keys[KEY_CODES[event.keyCode]] = true;
    }
    //攻击、移动状态下执行一次的操作
    if (keyState) {
      if (event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 74 ){
        imgIndex = -1;
        keyState = false;
      }
    }
    // 跳跃状态下执行一次的操作
    if (state) {
      if (event.keyCode == 38){
        keys['up'] = true;
        state = false;
      }
    }
  },false);

  window.addEventListener('keyup',function(e) {
    // 取消人物状态
    if (KEY_CODES[event.keyCode]) {
      keys[KEY_CODES[event.keyCode]] = false;
    }
    state = true;
    keyState = true;
  },false);
};

// 检测人物跳跃状态
var oneOperation = function (player) {
  if (keys['up'] && ! keys['down']) {
    player.up();
    if (player.y < 310) {
      keys['down'] = true;
    }
  }
  if (keys['down']) {
    keys['up'] = false;
    player.down();
    if (player.y == 450) {
      keys['down'] = false;
    }  
  }
}

// 检测人物移动、攻击状态
var operation = function(player) {
  if (keys['right']) {
    player.moveRight();
  } else if (keys['left']){
    player.moveLeft();
  } else if (keys['attack']) {
    player.attack();
  } else {
    player.stop();
  }
}
// 检测ai状态
var aiState = function (ai) {
  ai.moveLeft()
} 

// 单击enter开始游戏
var working=function(){
  setupInput();
  var start = setInterval(() => {
    if (keys['start']) {
      $('#start').css('opacity', '0');
      clearInterval(start);
      gameStart();
    }
  }, 100);
}
working();

// 清空画板
function fillCanvas() {
  ctx.clearRect(0,0,1000,600); 
}
// 游戏开始
var gameStart = function () {
  can = document.getElementById('canvas');
  ctx = can.getContext('2d');
  var player = new Player();
  var ai = new Ai();
  setInterval(() => {
    fillCanvas();
    oneOperation(player);
    operation(player);
    aiState(ai);
    player.draw(imgIndex);
    ai.draw(aiImgIndex);
  }, 50);
}
