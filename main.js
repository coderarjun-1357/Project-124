function setup() {
video = createCapture(VIDEO);
video.size(400, 400);
video.position(10, 50);

canvas = createCanvas(800,400);
canvas.position(430,130);

poseNet = ml5.poseNet(video, modelDone);
poseNet.on('pose', gotposes);
}

function modelDone() {
console.log("Posenet Is Initialized and Loaded");
}

function gotposes(error, results) {
    if (error) {
        console.log(error);
    }

}