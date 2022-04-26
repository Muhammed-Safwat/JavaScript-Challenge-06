let imagesList = [ "1", "2",
    "3", "4",
    "5", "6",
    "7", "8","9" ,"10","11"];
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

    img.style.backgroundImage =`url('../images/${imagesList[x]}.png')`
};
left.onclick =  function (){
    
    if ( x === 0 )
    {
        x = imagesList.length-1;
    }
    x--; 


    img.style.backgroundImage =`url('../images/${imagesList[x]}.png')`
};