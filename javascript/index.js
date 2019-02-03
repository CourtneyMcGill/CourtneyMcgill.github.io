// Get the DOM object to change color.
//var x = document.getElementById("Name");
const x = document.querySelector('#Name');
console.log("x is:", x);
// Chose our starting colors and cooresponding RBG values.
var first_color = '#'+Math.floor(Math.random()*16777215).toString(16);
var first_red = parseInt(first_color.slice(1, 3),16);
var first_blue = parseInt(first_color.slice(3, 5),16);
var first_green = parseInt(first_color.slice(5, 7),16);

// Chose our starting traget color and cooresponding RBG values.
var second_color = '#'+Math.floor(Math.random()*16777215).toString(16);
var second_red = parseInt(second_color.slice(1, 3),16);
var second_blue = parseInt(second_color.slice(3, 5),16);
var second_green = parseInt(second_color.slice(5, 7),16);

//console.log(first_color, first_red, first_blue, first_green);

// Execute this code every 30miliseconds.
var num = 0
setInterval(function() {
      var first_red = parseInt(first_color.slice(1, 3),16);
      var first_blue = parseInt(first_color.slice(3, 5),16);
      var first_green = parseInt(first_color.slice(5, 7),16);

      var second_red = parseInt(second_color.slice(1, 3),16);
      var second_blue = parseInt(second_color.slice(3, 5),16);
      var second_green = parseInt(second_color.slice(5, 7),16);

 //     x.style.color = first_color
 //     debugger;
 //     console.log("our color is:",first_color);

      var color_change = '<span style="color:'.concat(first_color, '">M</span>')
      console.log("the concated thing:", color_change);
      x.innerHTML = x.innerHTML.replace('M', '<span style="color:' + first_color + '">M</span>');
      x.innerHTML = x.innerHTML.replace('L', '<span style="color:' + first_color + '">L</span>');
 //     x.innerHTML = x.innerHTML.replace('M', '<span style="color: first_color;">o</span>');
 //     console.log("first_red, second_red:", first_red, second_red);
 //     console.log("first_blue, second_blue:", first_blue, second_blue);
 //    console.log("first_green, second_green:", first_green, second_green);
      if (first_red == second_red && first_blue == second_blue && first_green == second_green){
            num = 5
 //           debugger;
            console.log("colors match");
            second_color = '#'+Math.floor(Math.random()*16777215).toString(16);
            second_red = parseInt(second_color.slice(1, 3),16);
            second_blue = parseInt(second_color.slice(3, 5),16);
            second_green = parseInt(second_color.slice(5, 7),16);
      }

      // check our starting and target colors
//      console.log("the first color is:", first_color, first_red, first_blue, first_green);
//      console.log("the second color is:",second_color, second_red, second_blue, second_green);

      // chose the color we want to manipulate
      var remaining_colors = []
      if (first_red != second_red){
            remaining_colors.push("red");
      }
      if (first_blue != second_blue){
            remaining_colors.push("blue");

      }
      if (first_green != second_green){
            remaining_colors.push("green");

      }
//      console.log("our remaining colrs are:",remaining_colors);
      num_mismatch_colors = remaining_colors.length;

      random_choice = Math.floor(Math.random() * num_mismatch_colors);
      console.log("the random choice was:", random_choice);

//      console.log("our random choice was:",random_choice);
      chosen_color = remaining_colors[random_choice];

//      console.log("our chosen color was:",chosen_color);

      // Incrament or decrament the selected color depending on its relation to the target value for that color.
      if (chosen_color == 'red'){
            if (first_red < second_red){
                  first_red ++;
 //                 console.log("incrementing red to ", first_red);
            }
            else{
                  first_red --;
//                  console.log("decrementing red to ", first_red);
            }     
      }
      else if (chosen_color == 'blue'){
            if (first_blue < second_blue){
                  first_blue ++;
//                  console.log("incrementing blue to ", first_blue);
            }
            else{
                  first_blue --;
//                  console.log("decrementing blue to ", first_blue);
            } 
      }
      else if (chosen_color == 'green'){
            if (first_green < second_green){
                  first_green ++;
//                  console.log("incrementing green to ", first_green);
            }
            else{
                  first_green --;
//                  console.log("decrementing green to ", first_green);
            }     
      }
  //    console.log('revised are:', first_red, first_blue, first_green);
      var hex_red = first_red.toString(16);
      console.log('the red hex is:', hex_red);
      console.log(typeof hex_red);
      console.log('the length is:', hex_red.length);
      if (hex_red.length < 2){
 //           debugger;
            hex_red = '0' + hex_red
            console.log('COURTNEY:');
      }
      var hex_blue = first_blue.toString(16);
      if (hex_blue.length < 2){
  //          debugger;
            hex_blue = '0' + hex_blue
            console.log('ABC:');
      }
      var hex_green = first_green.toString(16);
      if (hex_green.length < 2){
  //          debugger;
            hex_green = '0' + hex_green
            console.log('IS THIS IT:');
 //           debugger;

      }
      var new_first_color_num = hex_red + hex_blue + hex_green
      first_color = '#'.concat(new_first_color_num)
  //    console.log('our new first color is:', first_color);
}, 30) ;

