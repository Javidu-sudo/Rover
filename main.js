canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

rover_width = 100
rover_height = 60

background_img = "mars.jpg"
rover_img = "rover.png"
roverX = 10
roverY = 10
 function add(){
     background_imgTag = new Image()
     background_imgTag.onload = uploadbackground
     background_imgTag.src = background_img

     rover_imgTag = new Image()
     rover_imgTag.onload = uploadrover
    rover_imgTag.src = rover_img
 }
 function uploadbackground(){
     ctx.drawImage (background_imgTag,0,0,canvas.width,canvas.height);
 }
 function uploadrover(){
    ctx.drawImage (rover_imgTag,roverX,roverY,rover_width,rover_height);
}
window.addEventListener("keydown",myKeydown)
function myKeydown(e){
    keyPresd=e.keyCode
if(keyPresd == '40'){
    down();
    console.log("down")
}
if(keyPresd == '38'){
    up();
    console.log("up")
}
if(keyPresd == '37'){
    left();
    console.log("left")
}
if(keyPresd == '39'){
    right();
    console.log("right");
}


}
function up(){
    if(roverY>0){
        roverY = roverY-10
        uploadbackground()
        uploadrover()
    }
}
function down(){
    if(roverY<=500){
roverY=roverY+10
uploadbackground()
uploadrover()
    }
}
function left(){
    if(roverX>0){
        roverX=roverX-10
        uploadbackground()
uploadrover()
    }
}
function right(){
    if(roverX<700){
        roverX=roverX+10
        uploadbackground()
uploadrover()
    }
}