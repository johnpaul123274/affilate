document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#color_change").onchange=function(){
        document.querySelector("body").style.background=this.value;
    };
  
});
document.addEventListener("DOMContentLoaded",function(){
    setInterval(time,1000)
});
let counter=0;
function time(){
    counter++;
    document.querySelector("#times").innerHTML=`reading time in sec: ${counter}`;

};
function glow(){
    var cool= document.querySelector("h1");
if(cool.style.visibility=="hidden"){
    cool.style.visibility="visible"
}
else{
    cool.style.visibility="hidden"
}
};
window.setInterval(glow,500);
