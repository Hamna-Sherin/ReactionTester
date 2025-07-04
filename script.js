// variable declaration starting timer
var start= new Date().getTime();

// function for random color generation
function randomColor(){
    var digits = "0123456789ABCDEF"
    var color = "#"
    for(var i=0; i<6; i++){
        color += digits[Math.floor(Math.random()*16)]
    }
    document.getElementById("box").style.backgroundColor= color
}

// function for random position
function move(){
    var left;
    var right;
    var wh;
    left= Math.random()*300;
    right= Math.random()*300;
    wh= ((Math.random()*400)+100);
    document.getElementById("box").style.left= left +"px";
    document.getElementById("box").style.right= right+"px";
    document.getElementById("box").style.width= wh+"px";
    document.getElementById("box").style.height= wh+"px";
    document.getElementById("box").style.display= "block";
    start= new Date().getTime();
}

// defining onclick funtion
document.getElementById("box").onclick= function(){
    document.getElementById("box").style.display= "none";
    var end= new Date().getTime();
    var timeTaken= (end-start)/1000;
    alert(timeTaken);
    move();
    randomColor();
}
