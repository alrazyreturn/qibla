/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
		
		
		 app.orintation();
		 app.geodirection();
     alert("welcome3");
	// app.calcagin2(29.96,30.91);
	    app.orintation2();		
    },
	
	 changeAngle:function  () {
    var canvas = document.getElementById('logobg2');
	//var ang = document.getElementById('angle');
    var ctx = canvas.getContext('2d');
    var img = new Image();

    var ang = document.getElementById('angle').value; //angle
    var fps = 1000 / 25; //number of frames per sec
    img.onload = function () { //on image load do the following stuff
        canvas.width = this.width << 1; //double the canvas width
        canvas.height = this.height << 1; //double the canvas height
        var cache = this; //cache the local copy of image element for future reference
       
            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(cache.width, cache.height); //let's translate
            ctx.rotate(Math.PI / 180 * ang); //increment the angle and rotate the image 
            ctx.drawImage(img, -cache.width / 2, -cache.height /2); //draw the image ;)
            ctx.restore(); //restore the state of canvas
      
    };

    img.src = 'img/qibla3.png'; //img
} ,
	
		 changeAngle2:function  (angle) {
			 //angle=90;
    var canvas = document.getElementById('logobg2');
	 
	//var ang = document.getElementById('angle');
    var ctx = canvas.getContext('2d');
	   
    var img = new Image();
	var img2=new Image();
    
    var ang = 360-angle; //angle
    var fps = 1000 / 25; //number of frames per sec
    img.onload = function () { //on image load do the following stuff
	 
        canvas.width = this.width << 1; //double the canvas width
        canvas.height = this.height << 1; //double the canvas height
        var cache = this; //cache the local copy of image element for future reference
       
            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(cache.width, cache.height); //let's translate
            ctx.rotate(Math.PI / 180 * ang); //increment the angle and rotate the image 
            ctx.drawImage(img, -cache.width / 2, -cache.height /2); //draw the image ;)
		 
          ctx.drawImage(img2, -cache.width / 2, -cache.height /2); 
	   img2.style.transform ="rotate(130deg)";
			ctx.restore(); //restore the state of canvas
      
    };
	
	
	img2.class="world";
	/*img2.onload = function () { //on image load do the following stuff
        canvas.width = this.width << 1; //double the canvas width
        canvas.height = this.height << 1; //double the canvas height
        var cache = this; //cache the local copy of image element for future reference
       
            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(cache.width, cache.height); //let's translate
            ctx.rotate(Math.PI / 180 * ang); //increment the angle and rotate the image 
            ctx.drawImage(img2, -cache.width / 2, -cache.height /2); //draw the image ;)
              
			//ctx.restore(); //restore the state of canvas
      
    };*/

    img.src = 'img/qibla3.png'; //img
	img2.src="img/arrow.png";
	//canvas.style.alignmentAdjust="center";
	
	document.getElementById("heading").innerHTML="<h1>"+angle+"</h1>";
} ,
	
	orintation2:function ()
	{
		
		function onSuccess(heading) {
    var element = document.getElementById('heading');
     element.innerHTML = 'Heading: ' + heading.magneticHeading;
	 app.changeAngle2( heading.magneticHeading);
};

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};

var options = {
    frequency: 10000
}; // Update every 3 seconds

var watchID = navigator.compass.watchHeading(onSuccess, onError, options);

	},
		orintation:function (){
function onSuccess(heading) {
    alert('Heading: ' + heading.magneticHeading);
	document.getElementById("heading").innerHTML="<h1>"+heading.magneticHeading+"</h1>";
};

function onError(error) {
    alert('CompassError: ' + error.code);
};

navigator.compass.getCurrentHeading(onSuccess, onError);
	},
	
	
	calculateAngle:function(l,q)
	{
		tanq= (sin(39.83-l)/(cos(39.83-l)*sin(q)-.3925*cos(q)));
		angle= atan(tanq);
	},
	
	calcagin2:function(latit,logtit)
	{
		
		  var l= document.getElementById("lati").value; //67;//position.coords.latitude;
		  var q=  document.getElementById("long").value;//25;//position.coords.longitude;
	   tanq= (Math.sin((39.83-l)*Math.PI/180)/((Math.cos((39.83-l)*Math.PI/180)*Math.sin(q*Math.PI/180))-(.3925*Math.cos(q*Math.PI/180))));
		var Ld= logtit;// document.getElementById("long").value;//
		var Lm=39.75; 
		var Fd= latit;//document.getElementById("lati").value;//
		var Fm=21.45;
		var up=Math.sin((Ld-Lm)*Math.PI/180);
		
		//alert("up="+up);
		
		 var down1 =  Math.cos(Fd*Math.PI/180) * Math.tan(Fm*Math.PI/180);
		//var down1= Math.cos(Fd*Math.PI/180);
		//alert("down1 ="+down1);
		//alert("helo");
		var ang2=Ld-Lm;
		var down2=Math.sin(Fd*Math.PI/180)*(Math.cos(ang2*Math.PI/180));
		//alert("down2 ="+down2);
		  tanq=up /(down1-down2);
		  //alert(tanq);
		 // alert("welcome1");
		  angle= Math.atan(tanq)*180/Math.PI;
		 // alert(angle); 
		   if (Fd > 21.423333) {
            angle += 180;
        }
		  alert(angle);
		 // alert("hesamam");
		  document.getElementById("anglevlue").innerHTML="<h1>"+angle+"</h1>";
	},
	
	
	calcagin:function()
	{
		
		  var l= document.getElementById("lati").value; //67;//position.coords.latitude;
		  var q=  document.getElementById("long").value;//25;//position.coords.longitude;
	   tanq= (Math.sin((39.83-l)*Math.PI/180)/((Math.cos((39.83-l)*Math.PI/180)*Math.sin(q*Math.PI/180))-(.3925*Math.cos(q*Math.PI/180))));
		var Ld=  document.getElementById("long").value;//
		var Lm=39.75; 
		var Fd= document.getElementById("lati").value;//
		var Fm=21.45;
		var up=Math.sin((Ld-Lm)*Math.PI/180);
		
		//alert("up="+up);
		
		 var down1 =  Math.cos(Fd*Math.PI/180) * Math.tan(Fm*Math.PI/180);
		//var down1= Math.cos(Fd*Math.PI/180);
		//alert("down1 ="+down1);
		//alert("helo");
		var ang2=Ld-Lm;
		var down2=Math.sin(Fd*Math.PI/180)*(Math.cos(ang2*Math.PI/180));
		//alert("down2 ="+down2);
		  tanq=up /(down1-down2);
		  //alert(tanq);
		 // alert("welcome1");
		  angle= Math.atan(tanq)*180/Math.PI;
		 // alert(angle); 
		   if (Fd > 21.423333) {
            angle += 180;
        }
		  alert(angle);
		  alert("hesamam");
		  document.getElementById("anglevlue").innerHTML=angle;
	},
	
		geodirection:function (){
			alert("Welcome");
	
	// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
		  
		 /* var l= document.getElementById("lati").value; //67;//position.coords.latitude;
		  var q=document.getElementById("long").value;//25;//position.coords.longitude;
		  tanq= (Math.sin((39.83-l)*Math.PI/180)/((Math.cos((39.83-l)*Math.PI/180)*Math.sin(q*Math.PI/180))-(.3925*Math.cos(q*Math.PI/180))));
		  alert(tanq);
		  alert("welcome1");
		  angle= Math.atan(tanq);
		  alert(angle); 
		  alert(angle*180/Math.PI);
		document.getElementById("anglevlue").innerHTML=angle;*/
		
		app.calcagin2(position.coords.latitude,position.coords.longitude);
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
	},
    // Update DOM on a Received Event
   /* receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }*/
};
