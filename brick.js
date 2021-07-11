class Brick{
    constructor(x, y, width, height, color) {
        this.position = {
            x: x,
            y: y
        };
        this.width = width;
        this.height = height;
        this.color = color;
        this.hit = false;
    }

    // Take ball position as {x, y}
    checkCollisions(ball) {
        if (!this.hit) {
            if (ball.x > this.position.x && ball.x < (this.position.x + this.width)) {
                if (ball.y > this.position.y && ball.y < (this.position.y + this.height)) {
                    this.hit = true;
                    console.log("Hit a brick");
                    return "xy";
                }
            }
        }
        return false;
    }

    draw(ctx) {
        if (!this.hit) {
            ctx.beginPath();
            ctx.rect(this.position.x, this.position.y, this.width, this.height);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();            
        }
        return ctx;        
    }
}