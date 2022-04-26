let imagesList = [ "1.png", "2.png",
    "3.png", "4.png",
    "5.png", "6.png",
    "7.png", "8.png","9.png" ,"10.png","11.png"];
let img = document.querySelector( ".img" );
let left = document.querySelector( ".left" );
let right = document.querySelector( ".right" );

let x = 0;
right.onclick =  function (){
    
    if ( x === imagesList.length - 1 )
    {
        x = 0;
    }
    x++;
    img.style.backgroundImage = `url("../images/${imagesList[x]}")` ;
};
left.onclick =  function (){
    
    if ( x === 0 )
    {
        x = imagesList.length-1;
    }
    x--; 

    img.style.backgroundImage = `url("../images/${imagesList[x]}")` ;
};