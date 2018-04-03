'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_MESSAGE = 20;
var FONT_GAP = 15;
var TEXT_HEIGHT = 30 ;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var DISTANCE_BAR = 50;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'black';
  ctx.font = 'bold 16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_HEIGHT, CLOUD_Y + GAP_MESSAGE);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_HEIGHT, CLOUD_Y + GAP_MESSAGE + GAP_MESSAGE);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.font = '16px PT Mono';
    ctx.fillText(players[i], CLOUD_X + DISTANCE_BAR + (DISTANCE_BAR + BAR_WIDTH)*i, CLOUD_HEIGHT - GAP);
  }
  for (i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    }
    else {
  ctx.fillStyle = 'rgba(0, 0, 255, Math.random() + 0.1' }
  ctx.fillRect(CLOUD_X + DISTANCE_BAR + (DISTANCE_BAR + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP, BAR_WIDTH, (BAR_HEIGHT * (times[i] / maxTime)) * -1);
   }
  for (i = 0; i < players.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), CLOUD_X + DISTANCE_BAR + (DISTANCE_BAR + BAR_WIDTH)* i, CLOUD_HEIGHT - FONT_GAP - (BAR_HEIGHT * (times[i] / maxTime)) - GAP_MESSAGE);
  }
};
