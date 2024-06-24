// Code goes here

 
var roboturl="wss://nodered.roboticsisfun.org/"+ robotNumber;
 var robotSocket = new WebSocket(roboturl);
 var msg = '';  
 
    
    robotSocket.onmessage =  function(event) {
     
      msg = event.data;
      var robotmsg =  msg.split(':');
      temp=robotmsg[1];
      hum=robotmsg[3];
      var binaryType = robotSocket.binaryType;
       console.log(binaryType);
      console.log(msg);
      document.getElementById("footer").innerHTML ="Robot "+robotNumber+" says: "+ msg ;
    };
    
    // exampleSocket.onopen = function (event) {
    //   exampleSocket.send("reallyreally");
    //   console.log("Open succesfully");
    // };
// ////////////////keep alive
    const ping_interval = 60000; // it's in milliseconds, which equals to 120 seconds
    let interval;


  // to Keep the connection alive
  interval = setInterval(() => {
    const sendMessage = JSON.stringify({ ping: 1 });
   
    robotSocket.send('1');//parameters:color1,color2,color3.color 4. off turn that pixel off
  }, ping_interval);
///////////////////////////////////////
    ``
    robotSocket.onclose = function(event) {
      // By the server/me or both?
      console.log("Connection closed");
    };

