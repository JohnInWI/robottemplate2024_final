var myVar = 0;
var teachable=[];


window.onload = function(){
  
 showHide(defaultScreen);

 document.getElementById("lay1").onclick = function() {showHide(1)};
document.getElementById("lay2").onclick = function() {showHide(2)};
document.getElementById("lay3").onclick = function() {showHide(3)};
document.getElementById("lay4").onclick = function() {showHide(4)};
document.getElementById("lay5").onclick = function() {showHide(5)};

};

 


function showHide(layoutNum) {
  var lay1 = document.getElementById("layout1");
  var lay2= document.getElementById("Tasks");
 var lay3 = document.getElementById("teachable");
 var lay4 = document.getElementById("joystick");
 var lay5 = document.getElementById("QRcode");
 var mainContainer = document.getElementById("mainContainer");
var theHeader = document.getElementById("theHeader");


    closeSidebar();
    if (layoutNum==1){
      clearInterval(myVar);
      mainContainer.style.display="block";
theHeader.style.display="block";
     lay1.style.display = "block";
 lay2.style.display = "none";
  lay3.style.display = "none";
    lay4.style.display = "none";
    lay5.style.display = "none";
}
else if (layoutNum==2) {
  clearInterval(myVar);
        mainContainer.style.display="block";
theHeader.style.display="block";
    //tasksLayout();
  lay1.style.display = "none";
 lay2.style.display = "block";
  lay3.style.display = "none";
     lay4.style.display = "none";
     lay5.style.display = "none";
   
}
else if (layoutNum==3) {
  clearInterval(myVar);
        mainContainer.style.display="block";
theHeader.style.display="block";
  lay1.style.display = "none";
 lay2.style.display = "none";
 lay3.style.display = "block";
    lay4.style.display = "none";
    lay5.style.display = "none";
}
else if (layoutNum==4) {
   lay1.style.display = 'none';
    lay2.style.display = 'none';
    lay3.style.display = 'none';
    lay5.style.display = 'none';
    lay4.style.display = 'block';
    mainContainer.style.display = 'none';
    theHeader.style.display = 'none';
    myJoy();
}
else if (layoutNum==5) {
  clearInterval(myVar);
  lay1.style.display = "none";
 lay2.style.display = "none";
 lay3.style.display = "none";
 lay5.style.display = "block";
    lay4.style.display = "none";
mainContainer.style.display="block";
theHeader.style.display="block";
}


}

//create com test buton
     addEventListener( 'load',  function(){ var newButton = document.createElement('button');
    newButton.className ='btn';
    newButton.textAlign= 'center';
    newButton.innerHTML = 'Test Comm';
    newButton.style.backgroundColor = "red";
    newButton.style.width = "70%";
    newButton.style.borderRadius= "50px";
    newButton.style.border="3px groove gray";
 
    newButton.onclick = function(){
    robotSocket.send("comm,0,0,0,0,0");
        };
    document.getElementById("layout1").appendChild(newButton); }  );
  
  
  //com test
  
  //DELAY FUNCTION
  function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
}

function myJoy(){
var joystick	= new VirtualJoystick({
				container	: document.getElementById('joyarea'),
				mouseSupport	: true,
				limitStickTravel  :true,
        // useCssTransform :true,
			
			});
			joystick.addEventListener('touchStart', function(){
				console.log('down')
			})
			joystick.addEventListener('touchEnd', function(){
				console.log('up')
			})
myVar = setInterval(function(){ myTimer() }, 100);
			 function myTimer(){
        window.joyx=Math.round(joystick.deltaX()) ;  
        window.joyy=Math.round(joystick.deltaY()) ;  
				var outputEl	= document.getElementById('coords');
				outputEl.innerHTML	= '<b>Joy:</b> '
					+ ' X:'+joyx
					+ ' Y:'+joyy
          joystickCode();         
					

			}
			


}

function smarties_1()    //name your function by replacing " NameOfYourFunction"
{   
 //the code you want to execute with this function goes between these braces
 robotSocket.send('turbine1,dumpServo/0/0/0/0/0'); //change number after 1st slash for position
 
wait(1000); //the parameter is wait time in millseconds
robotSocket.send('turbine1,dumpServo/90/0/0/0/0'); //change number after 1st slash for position
 
 
}
function smarties_2()    //name your function by replacing " NameOfYourFunction"
{   
 //the code you want to execute with this function goes between these braces
 robotSocket.send('turbine2,dumpServo/0/0/0/0/0'); //change number after 1st slash for position
 
wait(1000); //the parameter is wait time in millseconds
robotSocket.send('turbine2,dumpServo/90/0/0/0/0'); //change number after 1st slash for position
 
 
}


function tweet(tweetMsg){
  var d = new Date();
     var n = d.toLocaleTimeString();
     var myTweet="tweet,"+tweetMsg+" "+n;
robotSocket.send(myTweet);

}


function tempThenTweet(theTweet) //name your function by replacing " NameOfYourFunction"
{   
   robotSocket.send('tempHum,0,0,0,0,0');//returns a message with temp & hum
async function f() {

 let promise = new Promise((resolve, reject) => {
   setTimeout(() => resolve("done!"), 1000)
 });

 let result = await promise; // wait till the promise resolves (*)

 
 tweet(theTweet+" the temperature is: "+temp+ "The humidity is: "+hum);
}

f();

}
  	

  





  
  
  
  
 