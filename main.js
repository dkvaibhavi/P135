
function setup() {
    canvas = createCanvas(700,600);
    canvas.position(600 , 70)
    video = createCapture(VIDEO);
    video.size(500 , 500);
    background("pink");
    poseNet= ml5.poseNet(video , modalLoded)
    poseNet.on('pose' , gotPoses);
}
function modalLoded() {
    console.log("Modal is ready");
}

function gotPoses(results , error)
{
    console.log(results)
}

