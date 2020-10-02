nose_x= 0;
nose_y= 0;
right_wrist_x= 0;
left_wrist_x= 0;
right_wrist_x= 0;
difference= 0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#00fff7');
    stroke('red');
    fill('deeppink');
    rect(nose_x, nose_y, difference, difference);
    

}

function modelLoaded(){
    console.log('PoseNet is initialized!!!');
}

function gotPoses(results){
    if(results.length> 0){
        console.log(results);
        nose_x= results[0].pose.nose.x;
        nose_y= results[0].pose.nose.y;
        right_wrist_x= results[0].pose.rightWrist.x;
        left_wrist_x= results[0].pose.leftWrist.x;
        difference= floor(right_wrist_x-left_wrist_x);
    }
}