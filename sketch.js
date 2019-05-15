var leftWhisker1 = 270;
var leftWhisker2 = 300;
var rightWhisker1 = 280;
var rightWhisker2 = 300;
var LeftPupil = 200;
var RightPupil = 304;

var faceColor = '#CED3DC';

function setup () {
    var canvas = createCanvas (500,500);
    canvas.parent('sketch-holder');
    
}
function draw () {
 background ("#646881");


    // left ear
    fill ("#CED3DC")
    triangle (160,200,180,100,220,200);
    
    // right ear
    fill ("#CED3DC")
    triangle (280, 175, 320, 100, 340, 220);
    
    //head
    fill(faceColor);
    ellipse(width/2,height/2,200,200);    
    
    //nose
    fill("#EB9486");
    triangle (width/2,height/2,width/2+20,height/2+20,width/2-20,height/2+20);
    
    // left eye
    fill("#BDBF09")
    ellipse (200,215,30)

    // right eye  
    ellipse (300,215,30);
    
    // Left Pupil
    fill('black')
    ellipse (200, LeftPupil, 10);
    
    // Right Pupil
    ellipse(RightPupil, 220, 10);
    

    // Left Whisker
    line (150,leftWhisker1,210,280)
    line (165,leftWhisker2,215,300)
    
    //Right Whiskers
    line (280,280,345,rightWhisker1)

    line (290,304,330,rightWhisker2)

    //mouth
    fill ("#F5EFED")
    ellipse (250,300,20,20)
    
    
    if(mouseIsPressed) {
        

        
        var randomLeftWhisker1 = random(260, 290)
        var randomLeftWhisker2 = random(300, 320)
        var randomRightWhisker1 = random (280,300)
        var randomRightWhisker2 = random (300,320)
        var randomLeftPupil = random (200,215)
        var randomRightPupil = random (304,310)
        
        
        leftWhisker1 = randomLeftWhisker1
        leftWhisker2 = randomLeftWhisker2
        rightWhisker1 = randomRightWhisker1
        rightWhisker2 = randomRightWhisker2
        LeftPupil = randomLeftPupil
        RightPupil= randomRightPupil

    }
    
}


function mousePressed() {
    
    var bw = random(0,255);

    
    faceColor = bw;


}

















