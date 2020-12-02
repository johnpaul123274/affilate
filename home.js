document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#color_change").onchange=function(){
        document.querySelector("body").style.background=this.value;
    };
  
});
document.addEventListener("DOMContentLoaded",function(){
    setInterval(time,1000)
});

// timer code
if(!localStorage.getItem("counter")){
    alert("welcom to jssp college");
    localStorage.setItem("counter",0);
}

function time(){
    var counter=localStorage.getItem("counter")
    counter++;
    



        
    
    
    document.querySelector("#times").innerHTML=`reading time in sec: ${counter}`;
    localStorage.setItem("counter",counter);
    
};
function res(){
    localStorage.setItem("counter",0);
};
/*if(localStorage.getItem("counter",1)=1){
    alert("welcome to jssp student hub");
}

else{*/
alert(`this is your previous study time ${localStorage.getItem("counter")} seconds`);
window.setInterval(glow,500)
function glow() {
    var cool = document.querySelector("#times");
    if (cool.style.visibility == "hidden") {
        cool.style.visibility = "visible";
    }
    else {
        cool.style.visibility = "hidden";
    }
};



/*name=document.querySelector("#name").value;
lastname=document.querySelector("#lastname".value);
number=document.querySelector("#number").value;
email=document.querySelector("#email").value;
password=document.querySelector("#password").value;
verify=document.querySelector("#verify").value;
alert(name,lastname,number,email,password,verify);
*/