import "../css/index.css"
import "../img/sun.png"
import "../CHANGELOG.md"

function onClickAlert() {
    alert(`${new Date()}`);
    var a="red";
    var b="blue";
    var c="blue";
    var d=0;
   
    d=Math.floor(Math.random() * 2)+1;
    if (d==1){
        document.getElementById("body1").style.background=a;
    }
    if (d==2){
        document.getElementById("body").style.background=b;
    }
    if (d==3){
        document.getElementById("body").style.background=c;
    }
}
