let imagesList = [ "1.webp", "2.webp",
    "3.webp", "4.webp",
    "5.webp", "6.webp",
    "7.webp", "8.webp","9.webp" ,"10.webp","11.webp"];
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