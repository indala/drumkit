var a=document.querySelectorAll("button");
for (var i=0 ;i<a.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var word=this.innerHTML;
        makeSound(word);
        buttonAnimation(word);

    })
}
document.addEventListener("keypress",function(event){ 
    var key=event.key;
    makeSound(key);
    buttonAnimation(key);


});
 function makeSound(key){
    switch(key){
        case 'w':
            var t1=new Audio("sounds/crash.mp3");
            t1.play();
            break;
        case 'a':
            var t1=new Audio("sounds/kick-bass.mp3");
            t1.play();
            break;
        case 's':
            var t1=new Audio("sounds/snare.mp3");
            t1.play();
            break;
        case 'd':
            var t1=new Audio("sounds/tom-1.mp3");
            t1.play();
            break;
        case 'j':
            var t1=new Audio("sounds/tom-2.mp3");
            t1.play();
            break;
        case 'k':
            var t1=new Audio("sounds/tom-3.mp3");
            t1.play();
            break;
        case 'l':
            var t1=new Audio("sounds/tom-4.mp3");
            t1.play();
            break;  
    }

}
function buttonAnimation(key){
    var btn=document.querySelector("."+key);
    btn.classList.add("pressed");
    setTimeout(()=>{btn.classList.remove("pressed");},1000);
}
var head=document.querySelector("h1");
head.classList.add("game-over");