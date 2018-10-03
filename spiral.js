console.clear()
var start = 10;
var end = 27;
// X,Y Co-ordinates
var xPos = 1;
var yPos = 1;

// Array to store values
var array = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

// Check if all the indexes in our array are full
function checkIsFull(){
  var full = true;
  // For each row
  array.forEach(function(row){
    // For each value in that row
    row.forEach(function(value){
      if(value == 0){
        full = false
      }
    });
  })
  // We need to add a row or column, but where in the array do we add
  if(full){
    // New row below (the y position is at the bottom, and the xPosition isn't at the far right)
    if(yPos == (array.length - 1) && xPos != (array[0].length - 1)){
      var newRow = [];
      // Fill the array with the the correct number of indexes, but looping over the length of an existing row
      for(var i=0; i < array[0].length; i++){
        newRow.push(0);
      }
      array.push(newRow)
    // New Column To The Right (Y position isn't at the top, and the x position is at the far right)
    } else if(yPos != 0 && xPos == (array[0].length - 1)) {
      array.forEach(function(row){
        row.push(0)
      })
    }
    // New Row Above (Y position is at the top, and x Position is at the far right)
    else if(yPos == 0 && xPos == (array[0].length - 1)){
      yPos++;
      var newRow = [];
      for(var i=0; i < array[0].length; i++){
        newRow.push(0);
      }
      array.unshift(newRow)
    
    // New Column To The Right ( if X and Y position is in the top left)
    } else if(yPos == 0 && xPos == 0) {
      xPos++;
      array.forEach(function(row){
        row.unshift(0)
      })
    }
  }
  return full;
}

// Loop from start to finish number
for(var i=start; i <= end; i++){
  // If not the first number (we already know the starting indexes)
  if(i != start){
    // Is our array full?, this will add a new row or column as needed
   	checkIsFull();
    
    // Test if we move the X and Y positions, whether there's an empty (0 value) index
    // The order of if statements follows the spiral patter, under, right, up, left
    
    // Check Under
  	if((yPos+1) < array.length && array[yPos + 1][xPos] == 0){
      yPos++;
    }
    // Check Right
    else if((xPos+1) < array[yPos].length && array[yPos][xPos + 1] == 0){
      xPos++;
    }
    // Check Up
    else if((yPos-1) >= 0 && array[yPos - 1][xPos] == 0){
      yPos--;
    }
    // Check Left
    else if((xPos-1) >= 0 && array[yPos][xPos-1] == 0){
      xPos--;
    }
    
  }
 
 	// Set the value of the index
 	array[yPos][xPos] = i 
  
  
}
console.table(array)
