var canvas = new fabric.Canvas('myCanvas');

var block_img_width = 30;
var block_img_height = 30;

var player_x = 10;
var player_y = 10;
var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    }
    );
}
function new_Image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_img_width);
        block_image_object.scaleToHeight(block_img_height);

        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '80') {
        console.log("P and shiftKey is pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        console.log("M and shiftKey is pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if (keyPressed == '38') {
        console.log("UP");
        up();
    }

    if (keyPressed == '40') {
        console.log("DOWN");
        down();
    }

    if (keyPressed == '39') {
        console.log("RIGHT");
        right();
    }

    if (keyPressed == '37') {
        console.log("LEFT");
        left();
    }

    if(keyPressed == '87'){
        console.log("w");
        new_Image('wall.jpg');
    }

    if(keyPressed == '71'){
        console.log("g");
        new_Image('ground.png');
    }

    if(keyPressed == '76'){
        console.log("l");
        new_Image('light_green.png');
    }

    if(keyPressed == '84'){
        console.log("t");
        new_Image('trunk.jpg');
    }

    if(keyPressed == '82'){
        console.log("r");
        new_Image('roof.jpg');
    }

    if(keyPressed == '89'){
        console.log("y");
        new_Image('yellow_wall.png');
    }

    if(keyPressed == '68'){
        console.log("d");
        new_Image('dark_green.png');
    }

    if(keyPressed == '85'){
        console.log("u");
        new_Image('unique.png');
    }

    if(keyPressed == '67'){
        console.log("c");
        new_Image('cloud.jpg');
    }
}

function up(){
    if(player_y>=0){
        player_y = player_y - block_img_height;
        console.log("block_height"+block_img_height);
        console.log("player_x =" +player_x + "player_y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y = player_y + block_img_height;
        console.log("block_height" + block_img_height);
        console.log("player_x =" + player_x + "player_y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x = player_x -block_img_width;
        console.log("block_width" + block_img_width);
        console.log("player_x =" + player_x + "player_y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x<=700){
        player_x = player_x + block_img_width;
        console.log("block_width" + block_img_width);
        console.log("player_x =" + player_x + "player_y =" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function controls(){
    window.alert("Use the following keys to draw. t for trunk \n d for dark green \n l for light green \n w for wall \n r for rock \n u for unique \n c for cloud \n g for ground \n y for yellow wall");
}