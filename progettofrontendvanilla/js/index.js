import "../css/index.css"
import "../img/sun.png"
import "../CHANGELOG.md"

function onClickAlert() {
    alert(`${new Date()}`);
}

window.onClickAlert = onClickAlert;

function backgroundChange(){
    var a="linear-gradient(90deg, #01585c, #146a60, #327b60, #548b5b, #7a9956, #a4a554, #d1af5a, #ffb56b);";
    var b="linear-gradient(90deg, #484c5c, #615872, #816382, #a56c8a, #c8778a, #e48682, #f89b76, #ffb56b);";
    var c="linear-gradient(90deg, #000b5c, #500863, #7f1265, #a72a63, #c74961, #e16b5f, #f38f62, #ffb56b);";
    var d=0;
   
    d=Math.floor(Math.random() * 2)+1;
    if (d==1){
        document.getElementById("body").style.background=a;
    }
    if (d==2){
        document.getElementById("body").style.background=b;
    }
    if (d==3){
        document.getElementById("body").style.background=c;
    }
}
window.onload = backgroundChange;
