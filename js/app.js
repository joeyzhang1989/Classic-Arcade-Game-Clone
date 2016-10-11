// Enemies our player must avoid
var Enemy = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // Multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
   if (this.x < 505) {
        if (this.y < 100) {
            this.x += 200 * dt;
        }
        if (this.y < 200) {
            this.x += 300 * dt;
        }
        if (this.y >= 200) {
            this.x += 400 * dt;
        }
   }
   else {
    this.x = 0;
   }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Gem object for the player to collect
var Gem = function (x,y) {
    this.x = x;
    this.y = y;
    this.sprites = ["images/Gem-Blue.png","images/Gem-Green.png","images/Gem-Orange.png"];
};

// Render the gem on the canvas accroding to the different position
Gem.prototype.render = function() {
    var i  = Math.floor(Math.random() * 3);
        console.log(i);
    ctx.drawImage(Resources.get(this.sprites[i]), this.x, this.y);
};

//Update the Gem position due to the certain time interval
Gem.prototype.update = function (dt) {

};
// Player character who tries to avoid the enemies to reach the water
var Player = function (x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
    this.xNow = x;
    this.yNow = y;
};

//Update the player position 
Player.prototype.update = function () {
    this.xNow = this.x;
    this.yNow = this.y;
};
//Draw the Player on the screen
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.xNow, this.yNow);
};


//Handle the keyboard inputs from the item of the array allowedKeys[e.keyCode]
Player.prototype.handleInput = function (key) {
    this.key = key;
    // player left move
    if (this.key === "left") {
        if (this.x - 98 > 0) {
            this.x -= 98;
        }
    } 
    // player right move
    if  (this.key === "right") {
        if (this.x + 98 < 460) {
            this.x += 98;  
        }
    } 
    // player up move
    if (this.key === "up") {
        if (this.y - 92 > 0) {
             this.y -= 90;
        }
    } 
    //player down move
    if (this.key === "down") {
        if (this.y + 92 < 480) {
             this.y += 90;
        }
    }
};

// Now instantiate enemies' objects.
var bugFirst = new Enemy(0,65);
var bugSecond = new Enemy(0,140);
var bugThird = new Enemy(0,220);

// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies.push(bugFirst,bugSecond,bugThird);

// Now instantiate enemies' objects.
var firstGem = new Gem(200,65);
var secondGem = new Gem(100,140);
var thirdGem = new Gem(200,220);
// Place all gem objects in an array called allGems
var allGems = [];
allGems.push(firstGem,secondGem,thirdGem);

// Place the player object in a variable called player
var player = new Player(200,400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
     player.handleInput(allowedKeys[e.keyCode]);
});
