'use strict';
let counter = 0;

// console.log("Let's get this party started!");

// Functionality is appending an img to the container with src=inputvalue

/**Function createImg() takes no parameters
 * Creates an image element with the src attribute = the text input value.
 * returns the created image.
 */
 async function createImg(){
  const $input = $('input').val();
  const axiosArray = ["https://api.giphy.com/v1/gifs/search?q=",$input,"&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"];
  const imgLink = await axios.get(axiosArray.join(''));

  console.log(imgLink.data.data[0]);
  const imgURL = imgLink.data.data[0].url;
  const url = imgLink.data.data[counter].images.original.url;
  // const fake = 'https://media0.giphy.com/media/iNZKRliHP4tI4mALtO/giphy.gif?cid=482277c26eteurkqwcrclzxt0716uxveqo13s0b5v71vwudz&rid=giphy.gif&ct=g'


  // console.log(imgURL);
  // console.log('The Input = ',$input);
  const $imgEle = $('<img>');
  $imgEle.attr('src',url);

if(counter === 10){
  counter = 0;
} else {
  counter++;
}

  return $imgEle;
}

/**Function appendImg() takes no parameters
 * Appends an img to the #container element
 * Sets the img element src attribute = input form value.
 * returns undefined.
 */
async function appendImg(evt){
  console.log(evt);
  evt.preventDefault();

  const $container = $('#container');
  const imgEle = await createImg();
  console.log('imgEle = ',imgEle);
  $container.append(imgEle);
}

/**Function deleteMemes() takes no input
 * Remvoes all children from the container.
 */
function deleteMemes(evt){
  evt.preventDefault();
  console.log(evt);

  $('#container').empty();

}

//Event listener takes a function and that function needs the event.stopDefault()
$('main').on('submit',appendImg);
$('div').on('click',deleteMemes);


