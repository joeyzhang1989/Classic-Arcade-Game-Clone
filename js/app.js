// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
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

// Player character who tries to avoid the enemies to reach the water
var Player = function (x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

//Update the player position 
Player.prototype.update = function (dt) {

};
//Draw the Player on the screen
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Handle the keyboard inputs from the item of the array allowedKeys[e.keyCode]
Player.prototype.handleInput = function (key) {
    this.key = key;
    if (this.key = 'left') {
        this.x -= 99;
    } 
    if (this.key = 'right') {
        this.x +=99;
    } 
    if (this.key = 'up') {
        this.y += 171;
    } 
    if (this.key = 'down') {
        this.y -= 171;
    }
};
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
var bugFirst = new Enemy(0,65);
var bugSecond = new Enemy(0,140);
var bugThird = new Enemy(0,220);

// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies.push(bugFirst,bugSecond,bugThird);
// Place the player object in a variable called player
var player = new Player(200,420);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

     player.handleInput(allowedKeys[e.keyCode]);
});
