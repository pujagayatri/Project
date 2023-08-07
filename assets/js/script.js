let a = document.getElementById('first');
let b = document.getElementById('second');
let c = document.getElementById('third');

a.onmouseover=function abc(){
    document.getElementById('first').style.cssText="background-color:#90EE90; height:18vh;width:33vw;";
}
a.onmouseout=function abc(){
    document.getElementById('first').style.cssText="background-color:white;" ;
}

b.onmouseover=function abc(){
    document.getElementById('second').style.cssText="background-color:#90EE90; height:33vh; width:33vw;";
}
b.onmouseout=function abc(){
    document.getElementById('second').style.cssText="background-color:white;" ;
}

c.onmouseover=function abc(){
    document.getElementById('third').style.cssText="background-color:#90EE90; height:18vh; width:33vw;";
}
c.onmouseout=function abc(){
    document.getElementById('third').style.cssText="background-color:white;" ;
}
