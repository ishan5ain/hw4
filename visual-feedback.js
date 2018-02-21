var nB2 = 123;
var nC3 = 130;
var nD3 = 146;
var nE3 = 164;

var nF3 = 174;
var nG3 = 196;
var nA3 = 220;
var nB3 = 246;

var notes = [nB2, nC3, nD3, nE3, nF3, nG3, nA3, nB3];

rate = 0.1;
rCircle = [0, 0, 0, 0, 0, 0, 0, 0];
tRadius = [0, 0, 0, 0, 0, 0, 0, 0];

var oscF3,
  oscG3,
  oscA3,
  oscB3,
  oscB2,
  oscC3,
  oscD3,
  oscE3;

var playing = [false, false, false, false, false, false, false, false];

var textColor = "#000000";

function setup() {
  createCanvas(400, 200);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);

  // oscF3 = new p5.Oscillator();
  // oscF3.setType('triangle');
  // oscF3.freq(notes[4]);
  // oscF3.amp(0);
  // oscF3.start();
  //
  // oscG3 = new p5.Oscillator();
  // oscG3.setType('triangle');
  // oscG3.freq(notes[5]);
  // oscG3.amp(0);
  // oscG3.start();
  //
  // oscA3 = new p5.Oscillator();
  // oscA3.setType('triangle');
  // oscA3.freq(notes[6]);
  // oscA3.amp(0);
  // oscA3.start();
  //
  // oscB3 = new p5.Oscillator();
  // oscB3.setType('triangle');
  // oscB3.freq(notes[7]);
  // oscB3.amp(0);
  // oscB3.start();

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
  // rCircle[4] = tRadius[4] * rate + rCircle[4] * (1 - rate);
  // rCircle[5] = tRadius[5] * rate + rCircle[5] * (1 - rate);
  // rCircle[6] = tRadius[6] * rate + rCircle[6] * (1 - rate);
  // rCircle[7] = tRadius[7] * rate + rCircle[7] * (1 - rate);

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

  if (playing[4]) {
    fill("#F04D4A");
    ellipse(width / 8 + width / 4 * 0, 3 * height / 4, rCircle[4]);
  } else {
    fill("#F04D4A");
    ellipse(width / 8 + width / 4 * 0, 3 * height / 4, rCircle[4]);
  }

  if (playing[5]) {
    fill("#F04D4A");
    ellipse(width / 8 + width / 4 * 1, 3 * height / 4, rCircle[5]);
  } else {
    fill("#F04D4A");
    ellipse(width / 8 + width / 4 * 1, 3 * height / 4, rCircle[5]);
  }

  if (playing[6]) {
    fill("#F04D4A");
    ellipse(width / 8 + width / 4 * 2, 3 * height / 4, rCircle[6]);
  } else {
    fill("#F04D4A");
    ellipse(width / 8 + width / 4 * 2, 3 * height / 4, rCircle[6]);
  }

  if (playing[7]) {
    fill("#F04D4A");
    ellipse(width / 8 + width / 4 * 3, 3 * height / 4, rCircle[7]);
  } else {
    fill("#F04D4A");
    ellipse(width / 8 + width / 4 * 3, 3 * height / 4, rCircle[7]);
  }

  push();
  fill(textColor);
  text("Q\nB2", 2 + width / 4 * 0, height / 4 - 8, width / 4, height/2);
  text("W\nC3", 2 + width / 4 * 1, height / 4 - 8, width / 4, height/2);
  text("E\nD3", 2 + width / 4 * 2, height / 4 - 8, width / 4, height/2);
  text("R\nE3", 2 + width / 4 * 3, height / 4 - 8, width / 4, height/2);
  // text("A\nF3", 2 + width / 4 * 0, 3 * height / 4 - 8, width / 4, height/2);
  // text("S\nG3", 2 + width / 4 * 1, 3 * height / 4 - 8, width / 4, height/2);
  // text("D\nA3", 2 + width / 4 * 2, 3 * height / 4 - 8, width / 4, height/2);
  // text("F\nB3", 2 + width / 4 * 3, 3 * height / 4 - 8, width / 4, height/2);
  pop();
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  // if (key == 'A') {
  //   osc = oscF3;
  //   playing[4] = true;
  //   // rCircle[0] = height;
  //   tRadius[4] = height/2;
  // } else if (key == 'S') {
  //   osc = oscG3;
  //   playing[5] = true;
  //   // rCircle[1] = height;
  //   tRadius[5] = height/2;
  // } else if (key == 'D') {
  //   osc = oscA3;
  //   playing[6] = true;
  //   // rCircle[2] = height;
  //   tRadius[6] = height/2;
  // } else if (key == 'F') {
  //   osc = oscB3;
  //   playing[7] = true;
  //   // rCircle[3] = height;
  //   tRadius[7] = height/2;
  //} else
  if (key == 'Q') {
    osc = oscB2;
    playing[0] = true;
    // rCircle[2] = height;
    tRadius[0] = height/2;
  } else if (key == 'W') {
    osc = oscC3;
    playing[1] = true;
    // rCircle[2] = height;
    tRadius[1] = height/2;
  } else if (key == 'E') {
    osc = oscD3;
    playing[2] = true;
    // rCircle[2] = height;
    tRadius[2] = height/2;
  } else if (key == 'R') {
    osc = oscE3;
    playing[3] = true;
    // rCircle[2] = height;
    tRadius[3] = height/2;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    // playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  // if (key == 'A') {
  //   osc = oscF3;
  //   playing[4] = false;
  //   //rCircle[0] = 0;
  //   tRadius[4] = 0;
  // } else if (key == 'S') {
  //   osc = oscG3;
  //   playing[5] = false;
  //   // rCircle[1] = 0;
  //   tRadius[5] = 0;
  // } else if (key == 'D') {
  //   osc = oscA3;
  //   playing[6] = false;
  //   // rCircle[2] = 0;
  //   tRadius[6] = 0;
  // } else if (key == 'F') {
  //   osc = oscB3;
  //   playing[7] = false;
  //   // rCircle[3] = 0;
  //   tRadius[7] = 0;
  //}else
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
