const squares = document.querySelectorAll(".square")


squares.forEach(function(square){
    square.addEventListener("click",function(){
        if(square.classList == "square"){
            square.style.transform = 'rotate(360deg)';
            square.style.transition = '2s';
            square.classList.toggle("square")
            square.classList.toggle("squareBis")
        }else{
            square.style.transform = 'rotate(0deg)';
            square.style.transition = '2s';
            square.classList.toggle("squareBis")
            square.classList.toggle("square")
        }
        
    })
   
});
