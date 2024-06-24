////////////////////////////////////////////////////////
addEventListener('load', function() {
    var poseButton = document.createElement('button');
    //////////Change properties below////////////////
    poseButton.innerHTML = 'Pose'; //replace with text of your button
    poseButton.onclick = function() {
      //////////place the corrosponding function below here/
  
      startPose();
     ////////place the corrosponding function above here/
    };
    poseButton.style.backgroundColor = 'red';
    poseButton.style.width = '30%';
    poseButton.style.borderRadius = '50px';
    poseButton.style.border = '5px outset gray';
    ///////////Change properties above///////////
    poseButton.className = 'btn';
    document.getElementById('buttonContainer').appendChild(poseButton);
  });
    
  ///////////////////////////////////////////////////////
  
  
  ////////////////////////////////////////////////////////
  addEventListener('load', function() {
    var audioButton = document.createElement('button');
    ////newButton//////Change properties below////////////////
    audioButton.innerHTML = 'Sound'; //replace with text of your button
    audioButton.onclick = function() {
      //////////place the corrosponding function below here/
  
      startAudio();
     ////////place the corrosponding function above here/
    };
    audioButton.style.backgroundColor = 'green';
    audioButton.style.width = '30%';
    audioButton.style.borderRadius = '50px';
    audioButton.style.border = '5px outset gray';
    ///////////Change properties above///////////
    audioButton.className = 'btn';
    document.getElementById('buttonContainer').appendChild(audioButton);
  });
    
  ///////////////////////////////////////////////////////
  
  ////////////////////////////////////////////////////////
  addEventListener('load', function() {
    var imageButton = document.createElement('button');
    ////newButton//////Change properties below////////////////
    imageButton.innerHTML = 'Image'; //replace with text of your button
    imageButton.onclick = function() {
      //////////place the corrosponding function below here/
  
  
  startImage();
     ////////place the corrosponding function above here/
    };
    imageButton.style.backgroundColor = 'blue';
    imageButton.style.width = '30%';
    imageButton.style.borderRadius = '50px';
    imageButton.style.border = '5px outset gray';
    ///////////Change properties above///////////
    imageButton.className = 'btn';
    document.getElementById('buttonContainer').appendChild(imageButton);
  });
    
  
function startImage(){
    document.getElementById("buttonContainer").style.visibility = "hidden";   
// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = imgURL;

let model, webcam, labelContainer, maxPredictions;
init();
// Load the image model and setup the webcam
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        
        labelContainer.childNodes[i].innerHTML = classPrediction;
teachableData[i]=prediction[i].probability.toFixed(2);
document.getElementById("footer").innerHTML = teachableData; ;
updateRobotImage();
    }
}
}




function startAudio(){
    document.getElementById("buttonContainer").style.visibility = "hidden";
    // more documentation available at
    // https://github.com/tensorflow/tfjs-models/tree/master/speech-commands

    // the link to your model provided by Teachable Machine export panel
    const URL = soundURL;

    async function createModel() {
        const checkpointURL = URL + "model.json"; // model topology
        const metadataURL = URL + "metadata.json"; // model metadata

        const recognizer = speechCommands.create(
            "BROWSER_FFT", // fourier transform type, not useful to change
            undefined, // speech commands vocabulary feature, not useful for your models
            checkpointURL,
            metadataURL);

        // check that model and metadata are loaded via HTTPS requests.
        await recognizer.ensureModelLoaded();

        return recognizer;
    }
init();
    async function init() {
        const recognizer = await createModel();
        const classLabels = recognizer.wordLabels(); // get class labels
        const labelContainer = document.getElementById("label-container");
        for (let i = 0; i < classLabels.length; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }

        // listen() takes two arguments:
        // 1. A callback function that is invoked anytime a word is recognized.
        // 2. A configuration object with adjustable fields
        recognizer.listen(result => {
            const scores = result.scores; // probability of prediction for each class
            // render the probability scores per class
            for (let i = 0; i < classLabels.length; i++) {
                const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
                labelContainer.childNodes[i].innerHTML = classPrediction;
                teachableData[i]=result.scores[i].toFixed(2);
                document.getElementById("footer").innerHTML = teachableData; ;
                updateRobotSound();
            }
        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
        });

        // Stop the recognition in 5 seconds.
        // setTimeout(() => recognizer.stopListening(), 5000);
    }
}



function startPose(){
    document.getElementById("buttonContainer").style.visibility = "hidden";
    const URL = poseURL;
    let model, webcam, ctx, labelContainer, maxPredictions;
init();
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // Note: the pose library adds a tmPose object to your window (window.tmPose)
        model = await tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const size = 200;
        const flip = true; // whether to flip the webcam
        webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        window.requestAnimationFrame(loop);

        // append/get elements to the DOM
        const canvas = document.getElementById("canvas");
        canvas.width = size; canvas.height = size;
        ctx = canvas.getContext("2d");
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { // and class labels
            labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function loop(timestamp) {
        webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        // Prediction #1: run input through posenet
        // estimatePose can take in an image, video or canvas html element
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        // Prediction 2: run input through teachable machine classification model
        const prediction = await model.predict(posenetOutput);

        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
            teachableData[i]=prediction[i].probability.toFixed(2);
document.getElementById("footer").innerHTML = teachableData; ;
updateRobotPose();
        }

        // finally draw the poses
        drawPose(pose);
    }

    function drawPose(pose) {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            // draw the keypoints and skeleton
            if (pose) {
                const minPartConfidence = 0.5;
                tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    }
}
