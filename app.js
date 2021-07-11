let canvas = document.getElementById("myCanvas");
let ball = new Ball(canvas.width, canvas.height, { x: 5, y: 5 }, { x: 10, y: 10 });
let paddle = new Paddle(canvas.width, canvas.height, 80, 10);
let ctx = canvas.getContext("2d");
let grid = [];

function createSquares() {
    let x, y = 0;
    let color = "#dddddd";
    let width = 40;
    let height = 20;
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            x = (canvas.width / 10) + (i * width) + 5;
            y = 80;
        }
        else {
            x = (canvas.width / 10) + (i * width) + 5;
            y = 40;            
        }

        let square = new Brick(x, y, width, height, color);

        grid.push(square);
    }
}

function main() {
    paddle.setupPaddleListeners();
    createSquares();
    
    let game = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let continueGame = ball.checkCollisions(canvas.width, canvas.height);
        let paddleHit = paddle.checkBallCollision(ball.position);
        if (paddleHit) {
            ball.swapSpeed(paddleHit);
        }
        ball.move();
        paddle.move(canvas.width);
        
        if (!continueGame) {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(game); // Stop updating!
        }

        //ctx = grid.forEach((square) => square.draw(ctx));
        for (let i = 0; i < grid.length; i++){
            let hit = grid[i].checkCollisions(ball.position);
            if (hit) {
                ball.swapSpeed(hit);
            }
            ctx = grid[i].draw(ctx);
        }
        ctx = paddle.draw(ctx);
        ctx = ball.draw(ctx);
    }, 100);
    
}

main();