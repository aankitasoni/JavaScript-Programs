/* Building a Love Calculator by Random Number Generation */

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random()*100;
loveScore = Math.floor(loveScore) + 1; //1-100

if (loveScore > 70){
    alert("Your love score is " + loveScore + "%." + " You love each other very much.");
}

if (loveScore > 30 && loveScore <= 70){
    alert("Your love score is " + loveScore + "%.");
}    

if (loveScore <= 30){
    alert("Your love score is " + loveScore + "%." + " You go together like oil and water.");
}


