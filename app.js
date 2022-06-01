'use strict';

// console.log("Let's get this party started!");

// Functionality is appending an img to the container with src=inputvalue

/**Function createImg() takes no parameters
 * Creates an image element with the src attribute = the text input value.
 * returns the created image.
 */
 function createImg(){
  const $input = $('input').val();

  console.log('The Input = ',$input);
  const $imgEle = $('<img>');
  $imgEle.attr('src',$input);
  return $imgEle;
}

/**Function appendImg() takes no parameters
 * Appends an img to the #container element
 * Sets the img element src attribute = input form value.
 * returns undefined.
 */
function appendImg(){
  // evt.preventDefault();

  const $container = $('#container');
  const imgEle = createImg();

  $container.append(imgEle);
}

//Event listener takes a function and that function needs the event.stopDefault()


