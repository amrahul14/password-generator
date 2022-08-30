const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass-1")
let pass2El = document.getElementById("pass-2")
let t1 = ""
let t2 = ""
for(let i=0;i<9;i++){
    let rand1=Math.floor(Math.random()*91)
    t1 += characters[rand1]
}
for(let i=0;i<9;i++){
    let rand2=Math.floor(Math.random()*91)
    t2 += characters[rand2]
}
function generatePassword(){
document.getElementById("pass-1").textContent=t1
document.getElementById("pass-2").innerHTML=t2
}

function copytext1() {
        var range = document.createRange();
        range.selectNode(document.getElementById("pass-1"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
  }
function copytext2() {
        var range = document.createRange();
        range.selectNode(document.getElementById("pass-2"));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
  }
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }