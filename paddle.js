class Paddle{
    constructor(canvasWidth, canvasHeight, w, h) {
        this.width = w;
        this.height = h;
        this.position = {
            x: (canvasWidth/2 - (w-2)),
            y: canvasHeight- 60
        }
        this.rightPressed = false;
        this.leftPressed = false;
    }

    setupPaddleListeners() {
        document.addEventListener("keydown", (e) => {
            if(e.key == "Right" || e.key == "ArrowRight") {
                this.rightPressed = true;
            }
            else if(e.key == "Left" || e.key == "ArrowLeft") {
                this.leftPressed = true;
            }
        }, false);
        document.addEventListener("keyup", (e) => {
            if(e.key == "Right" || e.key == "ArrowRight") {
                this.rightPressed = false;
            }
            else if(e.key == "Left" || e.key == "ArrowLeft") {
                this.leftPressed = false;
            }
        }, false);
    }

    move(width) {
        if(this.rightPressed) {
            this.position.x += 10;
            if (this.position.x + this.width > width){
                this.position.x = width - this.width;
            }
        }
        else if(this.leftPressed) {
            this.position.x -= 10;
            if (this.position.x < 0){
                this.position.x = 0;
            }
        }
    }

    // Takes ball position as object {x, y}
    checkBallCollision(ball) {
        if (ball.y >= this.position.y - this.height) {
            if (ball.x >= this.position.x && ball.x <= (this.position.x + this.width)) {
                //this.speed.y = -this.speed.y;
                // Needs changing!
                //this.position.y = height - this.size.y;
                
                // Hit the paddle!
                return "y";
            }
            return false;
        }
        return false;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.width, this.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

        return ctx;
    }
}