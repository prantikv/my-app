	var urlStr=window.location.search.substring(1);
	var beginStr=window.location.search.substring(1).indexOf("%27")+3;
	var endStr=window.location.search.substring(1).lastIndexOf("%27");
	
	var lenStr=endStr-beginStr;
	var fileName=urlStr.substr(beginStr,lenStr);
	//console.log(fileName);
		
		
   // function getCtx(id){
   	// var canvas = document.getElementById(id);
  	// var context = canvas.getContext('2d');
  	// console.log(canvas);
  	// //console.log($('#'+id+''));
  	// return context;
   // }
      
    
  function canvasSizer(width){
  //	if(width<=700){
  	var context= $("#myCanvas2")[0].getContext('2d');
  	 console.log("recived width"+width);
	context.canvas.height = (3*width)/4;
  	$("#container").css("height",context.canvas.height+"px");
	 // console.log("div height="+$("#container").height());
  	console.log("calculated width="+(3*width)/4);
  	// console.log("canvas height="+context.canvas.height);
//  	}
  }
   
   function resizeCanvas(imageObj) {
	// var imageObj=x;
   	// var context=$("#myCanvas")[0].getContext('2d');
   	// imageObj.src = '_reso/_image/'+fileName;
   	// windowWidth = window.innerWidth;
//    	
   	// context.canvas.height = (3*windowWidth)/4;
//    	
//    	
	// context.drawImage(imageObj.data.msg, 0, 0,context.canvas.width,context.canvas.height);
		// console.log("div height="+$("#container").height());
//     
 	// canvasSizer(windowWidth);
   	// textWritter("top text","bottom text");
   //	console.log(imageObj);
drawcanvas(imageObj.data.msg);

	}
  
 
   function drawcanvas(imageObj){
   	// var imageObj=x;
	var context=$("#myCanvas")[0].getContext('2d');
  	imageObj.src = '_reso/_image/'+fileName;
  		// context.canvas.height = 3*context.canvas.width/4;
  		// $("#container").css("height",(3*imageObj.height)/4+"px");
  		// console.log("canvas height= "+context.canvas.height);
  		// console.log("image height= "+imageObj.height);
			$("#myCanvas,#container,#myCanvas2").width(window.innerWidth);
			$("#myCanvas,#container,#myCanvas2").height((3*window.innerWidth)/4);
			context.canvas.width=$("#myCanvas").width();
			context.canvas.height=$("#myCanvas").height();
			
			var canWidth=$("#myCanvas").width();
			var canHeight=$("#myCanvas").height();
  			imageObj.onload = function() {
  			context.drawImage(imageObj, 0, 0,canWidth,canHeight);
     	//context.drawImage(imageObj, 0, 0,context.canvas.width,(3*context.canvas.width)/4);
    	
  		};
	
   	
	}
      
        
    function textWritter(tt,bt){
  		var context= $("#myCanvas2")[0].getContext('2d');
  		
  		var topTxt=$("#toptext").val();
  		var bottomTxt=$("#bottomtext").val();
  		
  		topTxt =(topTxt.length==0||topTxt===undefined)?"top text":topTxt;
  		bottomTxt =(bottomTxt.length==0||bottomTxt===undefined)?"bottom text":bottomTxt;
  	//	console.log(topTxt);
  		 		
  		context.clearRect (0,0,context.canvas.width,context.canvas.height);
  			
    	context.strokeStyle = "#FFffff";
    	context.fillStyle = "#FFffff";
    	//context.fillStyle="white";
    	context.font="50px verdana";
    	context.textBaseline="top";
    	context.textAlign = "center";
    	//console.log(context.canvas.width);
    	//console.log(context.canvas.height);
    	
    	var startPointx1=(context.canvas.width*5)/100;
    	var startPointy1=(context.canvas.height*5)/100;
    	var centerx=context.canvas.width/2;
  		
  		var endPointx=(context.canvas.width*90)/100;
    	var endPointy=(context.canvas.height*90)/100
  		//context.strokeText(bottomTxt,100,100);
  		
  		context.fillText(topTxt,centerx,startPointy1,endPointx,startPointy1,endPointx);
  		
  		context.fillText(bottomTxt,centerx,endPointy,endPointx,startPointy1,endPointx);
  		
	  	//context.fillRect(startPointx1,startPointy1,endPointx,endPointy);
 		
}
  
$("#bottomtext,#toptext").on("keyup",textWritter);
 
    
      
$(document).on('pagebeforeshow','#created', function () {
	var image = new Image();
	rawData=document.getElementById('myCanvas2');
	console.log(rawData);
	//image.src = rawData;
	//$("#imgHolder").html(rawData.toDataURL());
  		image.onload=function()
  		{
  		//document.getElementById("#imgHolder").appendChild(image);
		$("#imgHolder").html(image);
  		};
  	image.src=rawData.toDataURL();
	});

   
       
$("document").ready(function(){	
	var imageObj = new Image();
	drawcanvas(imageObj);
	//window.addEventListener("resize", resizeCanvas(imageObj));
	$( window ).resize({msg: imageObj},resizeCanvas);
});