function Sprite(x, y, width, height, path) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.path = path;

    this.draw = function (context, xCanvas, yCanvas) {
        this.image.src = this.path;
        context.drawImage(this.image, this.x, this.y, this.width, this.height, xCanvas, yCanvas, this.width, this.height);
    }
}

let background_sprite = new Sprite(0, 0, 1008, 500, "src/sprites/background.png"), 
    menu_sprite = new Sprite(0, 0, 212, 66, "src/sprites/main-menu.png"),
    sand = new Sprite(0, 0, 128, 128, "src/sprites/land.png"),
    chicken_sprite = [], 
    collider = [];

for (let i=0; i<NUM_OBSTACLES; i++) {
    collider[i] = new Sprite(0, 0, OBSTACLE_WIDTHS[i], OBSTACLE_HEIGHTS[i], OBSTACLE_PATHS[i]);
}

chicken_sprite[0] = new Sprite(0, 0, 96, 65, "src/sprites/chicken.png");
chicken_sprite[1] = new Sprite(0, 0, 96, 65, "src/sprites/chicken2.png");
chicken_sprite[2] = new Sprite(0, 0, 96, 65, "src/sprites/chicken-hit.png");
