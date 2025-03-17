var x = 5;
var y = 7;
var z = x + y;
console.log(z);
var A = "Hello "
var B = "world!"
var C = A + B;
console.log(C);

//function SumNPrint(x1,x2) {
   // var x3 = x1 + x2;
   // console.log(x3);
//}

//SumNPrint(x,y);
//SumNPrint(A,B);

/*if(C.length > z){
    console.log(C);
}
else if (C.length < z){
    console.log(z);
}
else(console.log("good job!"))/*

//const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
//const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

/*function findTheBanana(arr, label){
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
}*/

//findTheBanana(L1, "first");
//findTheBanana(L2, "second");

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

function addYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const footerText = document.getElementById("copyYear");
    footerText.innerHTML = `&#169; Designed and Coded by Matt Gershenzon ${currentYear}`;

}
function showList() {
    const list = document.getElementById("funList");
    const btn = document.getElementById("showListBtn");
    list.style.display = "block";
    btn.style.display = "none";
}

function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    nameInput.setCustomValidity("");
    emailInput.setCustomValidity("");
    messageInput.setCustomValidity("");
    let messages = [];

     
  if (!nameInput.checkValidity()) {
    nameInput.setCustomValidity("Please enter your name.");
    messages.push(nameInput.validationMessage);
  }

  if (!emailInput.checkValidity()) {
    emailInput.setCustomValidity("Please enter a valid email address.");
    messages.push(emailInput.validationMessage);
  }

  if (!messageInput.checkValidity()) {
    messageInput.setCustomValidity("Please enter a message.");
    messages.push(messageInput.validationMessage);
  }

  // If there are any messages, display them and prevent form submission
  if (messages.length > 0) {
    document.getElementById("validationMessage").innerHTML = messages.join("<br>");
    return false;
  }
  document.getElementById("validationMessage").innerHTML = "";
  return true;

}
$(document).ready(function() {
  console.log("jQuery is loaded!");
  $("#fullBio").hide();
  $('.read-more-button').on("click",function(e) {
    e.preventDefault();
    $("#shortBio").hide();
    $('#fullBio').show();
    $('.read-more-button').hide();
  });
    
  $('.read-less-button').on("click",function(e) {
    $('#fullBio').hide();
    $("#shortBio").show();
    $('.read-more-button').show();
  });
});