//vars for game items
var wins = 0;
var total = 0;
var vArray = [];
var cVArray = [];
var c1 = $("#c1");
var c2 = $("#c2");
var c3 = $("#c3");
var c4 = $("#c4");
var cArray = [c1, c2, c3, c4];
var clicks = 0;

//function for setting range of random target number
function tarNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

};
vArray.push(tarNum(300, 999));

$("#targetNumber").html(vArray[0]);

//function for setting range for random crystal values
function cValue(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;  
};
for(var i = 0; i < cArray.length; i++){
    cVArray.push(cValue(1, 100));
    for(var j = 0; j < cVArray.length; j++){
    cArray[i].attr("data-crystalvalue", cVArray[j]);
    }
};

function reset(){
    clicks = 0;
    $("#clicks").html(clicks);
    total = 0;
    $("#tScore").html(total);
    vArray = [];
    vArray.push(tarNum(300, 999));
    $("#targetNumber").html(vArray[0]);
    cVArray = [];
    for(var i = 0; i < cArray.length; i++){
        cVArray.push(cValue(1, 100));
        for(var j = 0; j < cVArray.length; j++){
            cArray[i].attr("data-crystalvalue", cVArray[j]);
        }
    }
};

$(".crystal").click(function(){
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    total += crystalValue;
    $("#tScore").html(total);
    clicks++;
    $("#clicks").html(clicks)

    if(total === vArray[0] && clicks < 20){
        alert("You are a Master! You used " + clicks + " clicks");
        wins++;
        $("#wins").html(wins);
        reset();
    }

    if(total === vArray[0] && clicks >= 20){
        alert("You win! You used " + clicks + " clicks");
        wins++;
        $("#wins").html(wins);
        reset();
    }

    if(total > vArray[0]){
        alert("You Lose! You used " + clicks + " clicks");
        reset();
    }
});