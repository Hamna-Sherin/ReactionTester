var start= new Date().getTime()
document.getElementById("box").onclick=function(){

    // computing time taken for a click
    var end= new Date().getTime()
    var timeTaken= (end-start)/1000
    alert("clicked in " + timeTaken+ " s")

    // generating a random color
    var digits = "0123456789ABCDEF"
    var color = "#"
    for(var i=0; i<6; i++){
        color += digits[Math.floor(Math.random()*16)]
    }
    document.getElementById("box").style.backgroundColor= color

    // resetting timer after a click
    start= new Date().getTime()
}