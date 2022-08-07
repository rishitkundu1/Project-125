leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
      video = createCapture(VIDEO);
      video.size(500, 400);
      video.position(100, 150);

      canvas = createCanvas(500, 400)
      canvas.position(700, 150);

      poseNet = ml5.poseNet(video, modelLoaded); 
      poseNet.on('pose', gotPoses);
}
function draw(){
      background('#969A97');
      textSize(difference);
      fill("red");
      text("Rishit", 50, 350);
}
function modelLoaded(){
      console.log("PoseNet Is Initialized!");
}
function gotPoses(results){
      if(results.length > 0){
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
      }
}