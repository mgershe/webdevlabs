var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var A = "Hello "
var B = "world!"
var C = A + B;
console.log(C);

function SumNPrint(x1,x2) {
    var x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x,y);
SumNPrint(A,B);

if(C.length > z){
    console.log(C);
}
else if (C.length < z){
    console.log(z);
}
else(console.log("good job!"))

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr, label){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
          alert("Found the banana in index " + i);
        }
    }
    arr.forEach(function(item,index) {
        if(item == "Banana"){
            alert("We found a banana in the " + label + " array");
        }
    });
}

findTheBanana(L1, "first");
findTheBanana(L2, "second");

function greetingFunc() {
    var d = new Date();
    var h = d.getHours();
    var E = document.getElementById("greeting");
    if(h>=5 && h < 12) {
       E.innerHTML = "Good morning, I am Matt Gershenzon";
    }
    else if(h >= 12 && h<18){
        E.innerHTML = "Good afternoon, I am Matt Gershenzon";
    }
    else if (h >= 18 && h < 20){
        E.innerHTML = "Good evening, I am Matt Gershenzon";
    }
    else{
        E.innerHTML = "Good night, I am Matt Gershenzon";
    }
}
greetingFunc();