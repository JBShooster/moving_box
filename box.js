window.addEventListener("load", function(){
(function() {

	Dragster          = function() {
    // grab the car element
    car = document.getElementById('dragster');
    // set the starting position of the dragster
    car.style.left = "0px";
    car.style.top = "0px";
  	};

  	Game              = function() {
    // this class manages game state
    // initialize the player dragster
    this.dragster = new Dragster();

    this.attachListeners();
  	};

  	Game.prototype.attachListeners = function() {
    var self = this;
    // listen for user input, specifically
    // for the user pressing the right arrow key
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 38) {
        self.dragster.advanceUp();
      }
     });
	
	window.addEventListener('keyup', function(event) {
      if (event.keyCode === 40) {
        self.dragster.advanceDown();
      }
     });

	window.addEventListener('keyup', function(event) {
      if (event.keyCode === 37) {
        self.dragster.advanceLeft();
      }
     });

    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 39) {
        self.dragster.advanceRight();
      }
    });
	};

  	Dragster.prototype.advanceRight = function() {
    // this should move the car across the screen 1px at a time
    car.style.left = parseInt(car.style.left, 10) + 10 + "px";
  	};

  	Dragster.prototype.advanceLeft = function() {
    // this should move the car across the screen 1px at a time
    car.style.left = parseInt(car.style.left, 10) -10 + "px";
  	};

  	Dragster.prototype.advanceUp = function() {
    // this should move the car across the screen 1px at a time
    car.style.top = parseInt(car.style.top, 10) -10 + "px";
  	};

  	Dragster.prototype.advanceDown = function() {
    // this should move the car across the screen 1px at a time
    car.style.top = parseInt(car.style.top, 10) +10 + "px";
  	};

  //	setInterval(function(event){self.dragster.advance();}, 3000);

  	var g = new Game();

})();
});	






































