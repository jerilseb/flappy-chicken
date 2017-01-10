let canvas, 
	context, 
	WIDTH = window.innerWidth, 
	HEIGHT = window.innerHeight,
    maxJump = 2, 
    initial_speed = 8, 
    speed = initial_speed, 
    currentState, 
    rank, 
    img, 
    soundEnabled = true,
    states = {
        start: 0,
        playing: 1,
        lost: 2
    };

if (WIDTH >= 600) {
    WIDTH = 600;
    HEIGHT = 550;
}


var LEFT_COLLISION_TOLERANCE = 50;
var RIGHT_COLLISION_TOLERANCE = 25;

var NUM_OBSTACLES = 8;
var OBSTACLE_WIDTHS = [87, 119, 124, 101, 101, 110, 97, 165];
var OBSTACLE_HEIGHTS = [93, 155, 78, 101, 101, 120, 78, 65];
var OBSTACLE_PATHS = [
	"src/sprites/Sign_2.png",
	"src/sprites/tree2.png",
	"src/sprites/Stone.png",
    "src/sprites/Crate.png",
	"src/sprites/IceBox.png",
    "src/sprites/SnowMan.png",
    "src/sprites/Crystal.png",
	"src/sprites/Igloo.png"
];