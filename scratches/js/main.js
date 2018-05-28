
/* var btn = document.getElementById("on-click");

function GoButton(){
    console.log("Button Clicked!!!");
    var customText = document.getElementsByClassName("lg-input");
    var textArea = document.getElementsByClassName("mytextarea");
    var results = document.getElementById("text");

    results.innerHTML = "Hello " + customText[0].value + "<br />" ;
    results.innerHTML += "Address: " + customText[1].value + "<br />";
    results.innerHTML += "Your Message is:" + textArea[0].value;
}

btn.addEventListener("click", GoButton); */

$(document).ready(function(){

$('.mytextarea').val('Aikhane Tomar Msg Likho!!!!');
$('#on-click').on('click',function(){
    alert('good job!!!');
})
})