let obstacles = {
    _obs: [],
    widths: OBSTACLE_WIDTHS,
    heights: OBSTACLE_HEIGHTS,
    timeToInsert: 0,

    insert: function () {
        this._obs.push({
            x: WIDTH,
            number: Math.floor(NUM_OBSTACLES * Math.random()),
            width: this.widths[this.number],
            height: this.heights[this.number]
        });
        this.timeToInsert = 50 + Math.floor(91 * Math.random());
    },

    update: function () {
        if (this.timeToInsert == 0)
            this.insert();
        else
            this.timeToInsert--;

        for (let i = 0, size = this._obs.length; i < size; i++) {
            let obs = this._obs[i];
            obs.x -= speed;
            // Collision
            if ( (chicken.x + RIGHT_COLLISION_TOLERANCE) < (obs.x + this.widths[obs.number]) && 
                 (chicken.x + chicken.width) >= (obs.x + LEFT_COLLISION_TOLERANCE) && 
                 (chicken.y + chicken.height) >= (ground.y - this.heights[obs.number]) ) {

                    currentState = states.lost;
                    if (soundEnabled) {
                        sounds.lostSound();
                    }
                    chicken.collided();
            }
            else if (obs.x <= -obs.x + -250) {
                // Score increment
                if (soundEnabled) {
                    sounds.scoreSound();
                }
                chicken.score++;
                // Remove obstacle from canvas
                this._obs.splice(i, 1);
                size--;
                i--;
            }
        }
    },

    clean: function () {
        this._obs = [];
    },

    draw: function () {
        for (let i = 0, size = this._obs.length; i < size; i++) {
            let obs = this._obs[i];
            collider[obs.number].draw(context, obs.x, ground.y - this.heights[obs.number]);
        }
    }
}
