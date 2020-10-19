$(document).ready(function(){

$(".saveBtn").on("click",function(){   //Share the same row
    var schedInput = $(this).siblings(".userInput").val()  //On click button find sibling with class "userInput"
    var selectedHour = $(this).parent().attr("id") //Find parent element of saveBtn, get value of id attribute
    localStorage.setItem(selectedHour, schedInput) //Local storage reads time and user input
    console.log("this function")
})

    

$("#currentDay").text(moment().format("MMMM Do YYYY")); //Displaying current day
})

