var nB2 = 123;
var nC3 = 130;
var nD3 = 146;
var nE3 = 164;

var nF3 = 174;
var nG3 = 196;
var nA3 = 220;
var nB3 = 246;

var leftButtonX;
var leftButtonY;
var rightButtonX;
var rightButtonY;

var distLeftBt;
var distRightBt;

var notes = [
  nB2,
  nC3,
  nD3,
  nE3,
  nF3,
  nG3,
  nA3,
  nB3
];
var oscName = ["Q\nB2", "W\nC3", "E\nD3", "R\nE3"];

rCircle = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];
tRadius = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
];

var oscF3,
  oscG3,
  oscA3,
  oscB3,
  oscB2,
  oscC3,
  oscD3,
  oscE3;

var playing = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
];

var textColor = "#000000";
var leftBtColor = 180;
var rightBtColor = 200;

var synthState = 0;
var rate = 0.1;

function setup() {
  createCanvas(400, 200);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);

  leftButtonX = (0.5 * width) - 30;
  leftButtonY = 0.675 * height;
  rightButtonX = (0.5 * width) + 25;
  rightButtonY = 0.675 * height;

  oscB2 = new p5.Oscillator();
  oscB2.setType('triangle');
  oscB2.freq(notes[0]);
  oscB2.amp(0);
  oscB2.start();

  oscC3 = new p5.Oscillator();
  oscC3.setType('triangle');
  oscC3.freq(notes[1]);
  oscC3.amp(0);
  oscC3.start();

  oscD3 = new p5.Oscillator();
  oscD3.setType('triangle');
  oscD3.freq(notes[2]);
  oscD3.amp(0);
  oscD3.start();

  oscE3 = new p5.Oscillator();
  oscE3.setType('triangle');
  oscE3.freq(notes[3]);
  oscE3.amp(0);
  oscE3.start();
}

function draw() {
  noStroke();
  background(250);

  rCircle[0] = tRadius[0] * rate + rCircle[0] * (1 - rate);
  rCircle[1] = tRadius[1] * rate + rCircle[1] * (1 - rate);
  rCircle[2] = tRadius[2] * rate + rCircle[2] * (1 - rate);
  rCircle[3] = tRadius[3] * rate + rCircle[3] * (1 - rate);

  if (playing[0]) {
    fill("#6BA2C6");
    ellipse(width / 8 + width / 4 * 0, height / 4, rCircle[0]);
  } else {
    fill("#6BA2C6");
    ellipse(width / 8 + width / 4 * 0, height / 4, rCircle[0]);
  }

  if (playing[1]) {
    fill("#EC774C");
    ellipse(width / 8 + width / 4 * 1, height / 4, rCircle[1]);
  } else {
    fill("#EC774C");
    ellipse(width / 8 + width / 4 * 1, height / 4, rCircle[1]);
  }

  if (playing[2]) {
    fill("#5991D3");
    ellipse(width / 8 + width / 4 * 2, height / 4, rCircle[2]);
  } else {
    fill("#5991D3");
    ellipse(width / 8 + width / 4 * 2, height / 4, rCircle[2]);
  }

  if (playing[3]) {
    fill("#F04D4A");
    ellipse(width / 8 + width / 4 * 3, height / 4, rCircle[3]);
  } else {
    fill("#F04D4A");
    ellipse(width / 8 + width / 4 * 3, height / 4, rCircle[3]);
  }

  push();
  fill(leftBtColor);
  ellipse(leftButtonX, leftButtonY + 2, 35);
  ellipse(rightButtonX, rightButtonY + 2, 35);
  fill(leftBtColor);
  ellipse(leftButtonX, leftButtonY, 35);
  fill(rightBtColor);
  ellipse(rightButtonX, rightButtonY, 35);
  pop();

  push();
  fill(textColor);
  text(oscName[0], 2 + width / 4 * 0, height / 4 - 8, width / 4, height / 2);
  text(oscName[1], 2 + width / 4 * 1, height / 4 - 8, width / 4, height / 2);
  text(oscName[2], 2 + width / 4 * 2, height / 4 - 8, width / 4, height / 2);
  text(oscName[3], 2 + width / 4 * 3, height / 4 - 8, width / 4, height / 2);
  text("<", leftButtonX - 23, leftButtonY - 8, width / 8, height / 4);
  text(">", rightButtonX - 23, rightButtonY - 8, width / 8, height / 4);
  // text("D\nA3", 2 + width / 4 * 2, 3 * height / 4 - 8, width / 4, height/2);
  // text("F\nB3", 2 + width / 4 * 3, 3 * height / 4 - 8, width / 4, height/2);
  pop();

}

function mousePressed() {
  distLeftBt = dist(leftButtonX, leftButtonY, mouseX, mouseY);
  distRightBt = dist(rightButtonX, rightButtonY, mouseX, mouseY);

  if (distLeftBt <= 35 / 2 && synthState == 1) {
    // print("clicked left button.");
    oscB2.freq(notes[0]);
    oscC3.freq(notes[1]);
    oscD3.freq(notes[2]);
    oscE3.freq(notes[3]);
    synthState = 0;
    oscName[0] = "Q\nB2";
    oscName[1] = "W\nC3";
    oscName[2] = "E\nD3";
    oscName[3] = "R\nE3";
    leftBtColor = 180;
    rightBtColor = 200;
  }

  if (distRightBt <= 35 / 2 && synthState == 0) {
    // print("clicked right button.");
    oscB2.freq(notes[4]);
    oscC3.freq(notes[5]);
    oscD3.freq(notes[6]);
    oscE3.freq(notes[7]);
    synthState = 1;
    oscName[0] = "Q\nF3";
    oscName[1] = "W\nG3";
    oscName[2] = "E\nA3";
    oscName[3] = "R\nB3";
    leftBtColor = 200;
    rightBtColor = 180;
  }

}

function keyPressed() {
  print("got key press for ", key);
  var osc;

  if (key == 'Q') {
    osc = oscB2;
    playing[0] = true;
    // rCircle[2] = height;
    tRadius[0] = height / 2;
  } else if (key == 'W') {
    osc = oscC3;
    playing[1] = true;
    // rCircle[2] = height;
    tRadius[1] = height / 2;
  } else if (key == 'E') {
    osc = oscD3;
    playing[2] = true;
    // rCircle[2] = height;
    tRadius[2] = height / 2;
  } else if (key == 'R') {
    osc = oscE3;
    playing[3] = true;
    // rCircle[2] = height;
    tRadius[3] = height / 2;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    // playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;

  if (key == 'Q') {
    osc = oscB2;
    playing[0] = false;
    // rCircle[2] = height;
    tRadius[0] = 0;
  } else if (key == 'W') {
    osc = oscC3;
    playing[1] = false;
    // rCircle[2] = height;
    tRadius[1] = 0;
  } else if (key == 'E') {
    osc = oscD3;
    playing[2] = false;
    // rCircle[2] = height;
    tRadius[2] = 0;
  } else if (key == 'R') {
    osc = oscE3;
    playing[3] = false;
    // rCircle[2] = height;
    tRadius[3] = 0;
  }
  if (osc) {
    osc.amp(0, 0.5);
    //playing = false;
  }
}
