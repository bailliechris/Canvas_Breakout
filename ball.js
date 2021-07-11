//import { getRandomInt, createColour } from "./utilities";

class Ball{
    constructor(width, height, size, speed) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.size = size;
        this.speed = speed;
        this.color = "#FFFFFF"; //createColour();
    /*    this.position = {
            x: getRandomInt(0+size.x, width-size.x),
            y: getRandomInt(0+size.y, width-size.y)
        };*/
        this.position = { x: 10, y: 10 };
    }

    swapSpeed(dir) {
        if (dir === "x") {
            this.speed.x = -this.speed.x;
        }
        if (dir === "y") {
            this.speed.y = -this.speed.y;
        }
        if (dir === "xy") {
            this.speed.x = -this.speed.x;
            this.speed.y = -this.speed.y;
        }
    }

    hitPaddle(y) {
        this.position.y = y;
    }

    // Swap to old collision detection stuff from avs?
    checkCollisions(width, height) {
        if(this.position.x > width-this.size.x) {
            this.speed.x = -this.speed.x;
            this.position.x = width - this.size.x;
        }
        if (this.position.x < this.size.x) {
            this.speed.x = -this.speed.x;
            this.position.x = this.size.x;
        }
        /*
        if (this.position.y >= paddlePosition.y-this.size.y)
        {
            if (this.position.x >= paddlePosition.x && this.position.x <= (paddlePosition.x + paddleSize.w)) {
                this.speed.y = -this.speed.y;
                // Needs changing!
                //this.position.y = height - this.size.y;
                this.position.y = paddlePosition.y - this.size.y;
      
            }
            if(this.position.y > height-this.size.y) {

                return false;
            } 
    
        }*/

        if(this.position.y > height-this.size.y) {
            return false;
        } 

        if (this.position.y < this.size.y) {
            this.speed.y = -this.speed.y;
            this.position.y = this.size.y;
        }

        return true;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size.x, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();

        return ctx;
    }

    move() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
}