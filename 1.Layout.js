 ////////////////////////////////////////////////////////
 addEventListener('load', function() {
   var newButton = document.createElement('button');
   //////////Change properties below////////////////
   newButton.innerHTML = 'Line Follow'; //replace with text of your button
   newButton.onclick = function() {
     //////////place the corrosponding function below here/
robotSocket.send('lineFollow,right,500,5000,0,0');//paramters:side of line, speed, time in ms

    ////////place the corrosponding function above here/
   };
   newButton.style.backgroundColor = 'green';
   newButton.style.width = '30%';
   newButton.style.borderRadius = '50px';
   newButton.style.border = '5px outset gray';
   ///////////Change properties above///////////
   newButton.className = 'btn';
   document.getElementById('Tasks').appendChild(newButton);
 });
   
 ///////////////////////////////////////////////////////

 ////////////////////////////////////////////////////////
 addEventListener('load', function() {
   var newButton = document.createElement('button');
   //////////Change properties below////////////////
   newButton.innerHTML = 'Stop'; //replace with text of your button
   newButton.onclick = function() {
     //////////place the corrosponding function below here/
 robotSocket.send('motorMove,0,1,0,0,0'); //parameters are: left direction, right direction, speed
 
    ////////place the corrosponding function above here/
   };
   newButton.style.backgroundColor = 'orange';
   newButton.style.width = '30%';
   newButton.style.borderRadius = '50px';
   newButton.style.border = '5px outset gray';
   ///////////Change properties above///////////
   newButton.className = 'btn';
   document.getElementById('Tasks').appendChild(newButton);
 });
   
 ///////////////////////////////////////////////////////

 ////////////////////////////////////////////////////////
 addEventListener('load', function() {
   var newButton = document.createElement('button');
   //////////Change properties below////////////////
   newButton.innerHTML = 'spin'; //replace with text of your button
   newButton.onclick = function() {
     //////////place the corrosponding function below here/
 
 robotSocket.send('motorMove,1,1,800,800,0'); //parameters are: left direction, right direction, left speed, right speed
    ////////place the corrosponding function above here/
   };
   newButton.style.backgroundColor = 'red';
   newButton.style.width = '30%';
   newButton.style.borderRadius = '50px';
   newButton.style.border = '5px outset gray';
   ///////////Change properties above///////////
   newButton.className = 'btn';
   document.getElementById('Tasks').appendChild(newButton);
 });
   
 ///////////////////////////////////////////////////////


 ////////////////////////////////////////////////////////
 addEventListener('load', function() {
   var newButton = document.createElement('button');
   //////////Change properties below////////////////
   newButton.innerHTML = 'temp'; //replace with text of your button
   newButton.onclick = function() {
     //////////place the corrosponding function below here/
   robotSocket.send('tempHum,0,0,0,0,0');//returns a message with temp & hum
  
    ////////place the corrosponding function above here/
   };
   newButton.style.backgroundColor = 'black';
   newButton.style.width = '30%';
   newButton.style.borderRadius = '50px';
   newButton.style.border = '5px outset gray';
   ///////////Change properties above///////////
   newButton.className = 'btn';
   document.getElementById('Tasks').appendChild(newButton);
 });
   
 ///////////////////////////////////////////////////////


////////////////////////////////////////////////////////
addEventListener('load', function() {
  var newButton = document.createElement('button');
  //////////Change properties below////////////////
  newButton.innerHTML = 'pixels'; //replace with text of your button
  newButton.onclick = function() {
    //////////place the corrosponding function below here/

robotSocket.send('pixelmulti,off,60,200,300,0');//parameters:color1,color2,color3.color 4. off turn that pixel off
   ////////place the corrosponding function above here/
  };
  newButton.style.backgroundColor = 'lime';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  newButton.style.color = 'black';
  ///////////Change properties above///////////
  newButton.className = 'btn';
  document.getElementById('Tasks').appendChild(newButton);
});
  
///////////////////////////////////////////////////////


////////////////////////////////////////////////////////
addEventListener('load', function() {
  var newButton = document.createElement('button');
  //////////Change properties below////////////////
  newButton.innerHTML = 'Pixels Off'; //replace with text of your button
  newButton.onclick = function() {
    //////////place the corrosponding function below here/

robotSocket.send('pixelsOff,0,0,0,0,0');//turns all pixels off
   ////////place the corrosponding function above here/
  };
  newButton.style.backgroundColor = 'tomato';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  ///////////Change properties above///////////
  newButton.className = 'btn';
  document.getElementById('Tasks').appendChild(newButton);
});
  
///////////////////////////////////////////////////////


////////////////////////////////////////////////////////
addEventListener('load', function() {
  var newButton = document.createElement('button');
  //////////Change properties below////////////////
  newButton.innerHTML = 'tweet'; //replace with text of your button
  newButton.onclick = function() {
    //////////place the corrosponding function below here/
 
    tempThenTweet('text before the temp and hum'); //this will read the temp & hum then tweet 

   ////////place the corrosponding function above here/
  };
  newButton.style.backgroundColor = 'blue';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  ///////////Change properties above///////////
  newButton.className = 'btn';
  document.getElementById('Tasks').appendChild(newButton);
});
  
///////////////////////////////////////////////////////

////////////////////////////////////////////////////////
addEventListener('load', function() {
  var newButton = document.createElement('button');
  //////////Change properties below////////////////
  newButton.innerHTML = 'lester'; //replace with text of your button
  newButton.onclick = function() {
    //////////place the corrosponding function below here/
  robotSocket.send('lester,tie/0/0/0/0/0');
     
      
   ////////place the corrosponding function above here/
  };
  newButton.style.backgroundColor = 'seagreen';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  ///////////Change properties above///////////
  newButton.className = 'btn';
  document.getElementById('Tasks').appendChild(newButton);
});
  
///////////////////////////////////////////////////////








