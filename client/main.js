import {Meteor} from 'meteor/meteor'
import { render } from 'react-dom'
import App from '../components/app.js'
import React from 'react'
Meteor.startup(function () {
  render(<App />, document.getElementById('reacttarget'))



/* ---- stats.js config ---- */

// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function() {
//   stats.begin();
//   stats.end();
//   if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//     count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//   }
//   requestAnimationFrame(update);
// };
// requestAnimationFrame(update);




  // var canvas = $("#snake")[0];
  // var ctx = canvas.getContext("2d");
  // var w = $("#snake").width();
  // var h = $("#snake").height();
  // var c = document.getElementById("snake");
  // var bg = new Image;
  // var colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'white'];
  // var img = new Image;
  // img.src = 'http://orig13.deviantart.net/ea94/f/2014/324/0/4/digital_art_texture_172_by_mercurycode-d7ls8zq.jpg';
  // var arrow = new Image;
  // arrow.src = './arrow.png'

  // //Lets save the cell width in a variable for easy control
  // var cw = 10;
  // var d;
  // var food;
  // var score;
  // var highscore = 0;

  // var snake_array; //an array of cells to make up the snake

  // function init() {
  //   d = 'right';

  //   create_snake();
  //   create_food();
  //   score = 0
  //   if (typeof game_loop != "undefined") clearInterval(game_loop);
  //   game_loop = setInterval(paint, 60);


  // }

  // init();

  // //Lets create the snake now
  // function create_snake() {
  //   var length = 5; //Length of the snake
  //   snake_array = []; //Empty array to start with
  //   for (var i = length - 1; i >= 0; i--) {
  //     //This will create a horizontal snake starting from the top left
  //     snake_array.push({
  //       x: i,
  //       y: 0
  //     });
  //   }
  // }

  // function create_food() {
  //   food = {
  //     x: Math.round(Math.random() * (w - cw) / cw),
  //     y: Math.round(Math.random() * (h - cw) / cw),
  //   };

  // }

  // //Lets paint the snake now
  // function paint() {
  //   //To avoid the snake trail we need to p
  //   //Lets paint the canvas now
  //   ctx.fillStyle = "black";
  //   ctx.drawImage(img, 0, 0, w, h);
  //   //ctx.fillRect(0, 0, w, h);
  //   // ctx.strokeStyle = "black";
  //   ctx.strokeRect(0, 0, w, h);
  //   //The movement code for the snake to come here.
  //   //The logic is simple
  //   //Pop out the tail cell and place it infront of the head cell
  //   var nx = snake_array[0].x;
  //   var ny = snake_array[0].y;
  //   //These were the position of the head cell.
  //   //We will increment it to get the new head position
  //   if (d == "right") nx++;
  //   else if (d == "left") nx--;
  //   else if (d == "up") ny--;
  //   else if (d == "down") ny++;

  //   //Restarts the game if head hits the wall
  //   if (nx == -1 || ny == -1 || nx == w / cw || ny == h / cw || check_collision(nx, ny, snake_array)) {
  //     if (highscore < score) {
  //       highscore = score;
  //     }
  //     //restart game
  //     init();
  //     return;
  //   }

  //   /////////////
  //   //Coding AI//
  //   /////////////


  
  //   if (nx > 150) {
  //     d = "down" 

  //   }
  //   if (ny > 35){
  //      d = "left"
  //   }
  //   if (nx == 9 && ny < 10) {
  //     d = "right"
  //     addSnake()  
  // }
  //   if (ny == 36 && nx < 10){
  //      d = "up"
  //     }

    




  //   function addSnake() {
  //     var tail = {
  //       x: nx,
  //       y: ny
  //     };
  //     snake_array.unshift(tail);
  //   }





  //   //Coding the snake eating the food
  //   if (nx == food.x && ny == food.y) {
  //     var tail = {
  //       x: nx,
  //       y: ny
  //     };
  //     snake_array.unshift(tail);
  //     create_food();
  //     score++

  //   }

  //   //This code propels the snake thru the canvas
  //   var tail = snake_array.pop(); //pops out the last cell
  //   tail.x = nx;
  //   tail.y = ny;
  //   snake_array.unshift(tail); //puts back the tail as the first cell

  //   //This code paints the snake and paints the food
  //   for (var i = 0; i < snake_array.length; i++) {
  //     var c = snake_array[i];
  //     //Lets paint 10px wide cells
  //     paint_cell(c.x, c.y);
  //   }
  //   paint_cell(food.x, food.y);
  //   //score display
  //   scorespawn(score);



  // }

  // //Checks to see if snake hits itself
  // function check_collision(x, y, array) {
  //   for (i = 0; i < array.length; i++) {
  //     if (array[i].x == x && array[i].y == y) {
  //       return true;
  //     }

  //   }
  // }



  // function pauseGame() {
  //   game_loop = clearTimeout(game_loop);
  // }



  // function scorespawn(score) {
  //   var score_text = "Score:" + score;
  //   var highscore_text = "Highscore:" + highscore;
  //   ctx.font = "16px Verdana";
  //   var gradient = ctx.createLinearGradient(0, 0, w, 0);
  //   var posColored = ((score_text.length + colorArray.length) / (score_text.length * colorArray.length)) / colorArray.length;
  //   var value = 0;
  //   for (var i = 0; i < colorArray.length; ++i) {
  //     value += posColored;
  //     gradient.addColorStop(value.toString(), colorArray[i]);
  //   }

  //   ctx.strokeStyle = "white";

  // }


  // //Function used to paint on the canvas
  // function paint_cell(x, y) {
  //   var gradient = ctx.createLinearGradient(0, 0, w, 0);
  //   var value = 1 / colorArray.length;
  //   var nvalue = 0;

  //   for (var i = 0; i < colorArray.length; ++i) {
  //     nvalue += value;
  //     gradient.addColorStop(nvalue, colorArray[i]);

  //   }
  //   // Fill with gradient
  //   ctx.strokeStyle = 'black';
  //   ctx.fillStyle = gradient;
  //   ctx.strokeRect(x * cw, y * cw, cw, cw);
  //   ctx.fillRect(x * cw, y * cw, cw, cw);
  //   ctx.strokeStyle = gradient;
  //   ctx.strokeRect(x * cw, y * cw, cw, cw);
  // }

  // // lets add the keyboard shortcuts now
  // $(document).keydown(function (e) {
  //   var key = e.which;
  //   //We will add another clause to prevent reverse gear
  //   if (key == "37" && d != "right") d = "left";
  //   else if (key == "38" && d != "down") d = "up";
  //   else if (key == "39" && d != "left") d = "right";
  //   else if (key == "40" && d != "up") d = "down";
  // })



  // window.addEventListener("keydown", function (e) {
  //   // space and arrow keys
  //   if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
  //     e.preventDefault();
  //   }
  // }, false);


  $(function() {
        
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "triangle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
  })


})