let rSlider, gSlider, bSlider;
let selectedColor, brushWeight, backgroundColor;
let points;

function setup() {
  createCanvas(700, 500)
  backgroundColor = color(256);
  background(backgroundColor);
  brushWeight = 5;
  selectedColor = createColorPicker('#ff0000');
  points = [];
}

function draw() {
  fill(color(selectedColor.color()));
  strokeWeight(0);
  if (mouseIsPressed) {
    currentPoint = {
      coordinateX: mouseX,
      coordinateY: mouseY,
      color: selectedColor.color(),
      weight: brushWeight
    }
    paintPoint(currentPoint);
    storePoint(currentPoint);
  }
}

function paintPoint(point) {
  fill(point.color);
  ellipse(point.coordinateX, point.coordinateY, point.weight, point.weight);
}

function storePoint(point) {
  points.push(point);
}

function keyPressed() {
  if (key == '+') brushWeight += 5;
  else if (key == "-") brushWeight -= 5;
  else if (key == "C" || key == "c") clean();
  else if (key == "B" || key == "b") paintBackground();
}

function clean() {
  background(backgroundColor);
  points = [];
}

function paintBackground() {
  backgroundColor = selectedColor.color();
  background(color(backgroundColor));
  paintPoints();
}

function paintPoints() {
  Object.keys(points).forEach(key => paintPoint(points[key]));
}