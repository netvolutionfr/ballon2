var x=0;
var y=0;
var speedy=2;
var speedx=2;

var raquettex = 0;
var largeur = 30;
var hauteur = 10;

var score = 0;

function setup() {
    createCanvas(640, 360);
    raquettex = width / 2;
}

function draw() {
    background(0);

    ellipse(x, y, 10, 10);

    rect(mouseX - largeur, height - hauteur - 5, 2 * largeur, hauteur);

    textSize(32);
    fill(255);
    text(score, 10, 30);

    y = y + speedy;
    x = x + speedx;

    if (y > height-5-hauteur) {
        if ( mouseX-largeur<x && x<mouseX+largeur) {
            speedy = -speedy;
            score = score+1;
        } else {
            y=0;
            speedy = speedy+1;
            speedx = random(-3,3);
        }
    }
    if (y < 0) {
        speedy = -speedy;
    }

    if (x > width) {
        speedx = -speedx;
    }
    if (x < 0) {
        speedx = -speedx;
    }

}