
function showData(name, amt){
    console.log("Hello" + name + "\n You are saving" + amt);

}

function getData(callback){
    const promt=require("prompt-sync")();
    var name=prompt("Welcome! \n What is your name?");
    var amt=prompt("Enter the amount you wish to save.");
    callback(name, amt);     // callback==show Data

}
getData(showData);
