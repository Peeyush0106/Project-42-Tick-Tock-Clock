var mouse;
var count = 0;
var timePos;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    rectMode(CENTER);
    timePos = [
        { x: 285, y: 60 },
        { x: 340, y: 115 },
        { x: 360, y: 200 },
        { x: 340, y: 285 },
        { x: 285, y: 350 },
        { x: 190, y: 375 },
        { x: 100, y: 350 },
        { x: 45, y: 285 },
        { x: 25, y: 200 },
        { x: 45, y: 115 },
        { x: 110, y: 60 },
        { x: 185, y: 40 },
    ]
}

function draw() {
    background(0);
    count += 1;
    mouse = {
        mouseX,
        mouseY
    };
    textStyle(BOLD);

    push();
    strokeWeight(8.345);
    translate(200, 200);
    rotate(-90);
    noFill();

    stroke("yellow");
    ellipse(0, 0, 380);
    stroke("orange");
    ellipse(0, 0, 300);

    // Arcs drawing
    let secAng = map(second(), 0, 60, 0, 360);
    let millisAng = map(millis(), 0, 100000, 0, 360);
    stroke("red");
    arc(0, 0, 280, 280, 0, secAng);
    stroke("lightblue");
    push();
    strokeWeight(25.345);
    arc(0, 0, 340, 340, 0, millisAng * 10);
    pop();

    let minAng = 1;
    if (minute() !== 0) {
        minAng = map(minute(), 0, 60, 0, 360);
    }
    stroke(0, 255, 0);
    arc(0, 0, 260, 260, 0, minAng);

    let hrAng = map(hour() % 12, 0, 12, 0, 360);
    stroke("blue");
    arc(0, 0, 240, 240, 0, hrAng);

    // Clock hands drawing
    // Second hand
    push();
    strokeWeight(3);
    rotate(secAng);
    stroke("red");
    line(0, 0, 110, 0);
    pop();

    // Minute hand
    push();
    strokeWeight(5);
    rotate(minAng);
    stroke(0, 255, 0);
    line(0, 0, 85, 0);
    pop();

    // Hour hand
    push();
    rotate(hrAng);
    stroke("blue");
    line(0, 0, 50, 0);
    pop();

    // Central hand joining point of the clock
    stroke("white");
    point(0, 0);
    pop();

    push();
    fill("white");
    textSize(20);
    for (var i = 0; i < timePos.length; i++) {
        if (i + 1 === hour() % 12) {
            fill("yellow");
        }
        else {
            fill(50, 50, 50);
        }
        text(i + 1, timePos[i].x, timePos[i].y);
    }
    pop();
    showDigitalTime();
}

function showDigitalTime() {
    // Setting all the values of hour, minute, and seconds
    var hourTime, minuteTime, secondTime
    if (hour() > 12) hourTime = hour() % 12
    minuteTime = minute();
    secondTime = second();

    if (hourTime < 10) hourTime = "0" + hourTime;
    if (minuteTime < 10) minuteTime = "0" + minuteTime;
    if (secondTime < 10) secondTime = "0" + secondTime;

    // Displaying the digitial time at the middle
    fill("yellow");
    textSize(22);
    text(hourTime + ":" + minuteTime + ":" + secondTime, 156, 250);
}