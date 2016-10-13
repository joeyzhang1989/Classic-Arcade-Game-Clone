#Classic Arcade Game Clone

##Project Overview

Project #3 of Udacity's [Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The task was to recreate the classic arcade game [Frogger]with provided visual assets and a game loop engine by

**1.**Implementing the player and enemy entities using **Pseudo classical Classes Pattern**
**2.** Adding the correspoding code to support the additional functions

##How to use

###Locally

**1.** Clone this repo:

```
$ git clone https://github.com/joeyzhang1989/Classic-Arcade-Game-Clone.git
````

**2.** Serve the application:

```
$ python -m SimpleHTTPServer
```
You can use the Python SimpleHTTPServer to serve this webpage game on your local machine.
**3.** Open the application:

```
$ open "http://localhost:8000"
```

##Example
*Pseudo classical Classes Pattern
```javascript
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
var Enemy = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
};
```
##License
This project is a public domain work, dedicated using
[MIT](https://opensource.org/licenses/MIT). Feel free to do
whatever you want with it.


