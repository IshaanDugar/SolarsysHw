var sun, mercury, venus, earth, mars;
var jupiter, satrun, uranus, neptune;

var background_img;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;

function preload(){
    background_img = loadImage("pics/spbg.png");
}

function setup() {
createCanvas(1500, 1200);

sun = createSprite(0, 0, 100, 100);
sun.draw = function() { ellipse(0,0,200,200) }
sun.setCollider("circle", 0, 0, 110);
//sun.debug = true;

mercury = createSprite(125, 80);
mercury.draw = function() { ellipse(0,0,10,10) }
mercury.setCollider("circle", 0, 0, 7);
//mercury.debug = true;

venus = createSprite(175, 40);
venus.draw = function() { ellipse(0,0,25,25) }
venus.setCollider("circle", 0, 0, 13);
//venus.debug = true;

earth = createSprite(225, -150);
earth.draw = function() { ellipse(0,0,50,50) }
earth.setCollider("circle", 0, 0, 25);
//earth.debug = true;

mars = createSprite(270, 220);
mars.draw = function() { ellipse(0,0,45,45) }
mars.setCollider("circle", 0, 0, 23);
//mars.debug = true;

jupiter = createSprite(-300, 210);
jupiter.draw = function() { ellipse(0,0,120,120) }
jupiter.setCollider("circle", 0, 0, 60);
//jupiter.debug = true;

saturn = createSprite(340, -310);
saturn.draw = function() { ellipse(0,0,85,85) }
saturn.setCollider("circle", 0, 0, 43);
//saturn.debug = true;

uranus = createSprite(400, 350);
uranus.draw = function() { ellipse(0,0,65,65) }
uranus.setCollider("circle", 0, 0, 33);
//uranus.debug = true;

neptune = createSprite(-440, -320);
neptune.draw = function() { ellipse(0,0,70,70) }
neptune.setCollider("circle", 0, 0, 35);
//neptune.debug = true;
}

function draw() {
background(background_img);


angleMode(DEGREES);
translate(width / 2, height / 2);
rotate(angle);


if (sun.collide(mercury)) {
mercury.destroy();
}

if (sun.collide(venus)) {
    venus.destroy();
    }
if (sun.collide(earth)) {
    earth.destroy();
   }

if (sun.collide(mars)) {
    mars.destroy();
}

if (sun.collide(jupiter)) {
    jupiter.destroy();
   }

if (sun.collide(saturn)) {
    saturn.destroy();
   }
 
if (sun.collide(uranus)) {
    uranus.destroy();
    }

if (sun.collide(neptune)) {
    neptune.destroy();
    }

angle = angle + anglespeed;
if (frameCount % 2 === 0) {
sun.scale = sun.scale + 0.002;
}
drawSprites();
}