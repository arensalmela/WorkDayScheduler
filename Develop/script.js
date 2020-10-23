$(document).ready(function(){

$(".saveBtn").on("click",function(){   
    //On click button find sibling with class "userInput"
    var schedInput = $(this).siblings(".userInput").val() 
    //Find parent element of saveBtn, get value of id attribute (the hour block 9am) 
    var selectedHour = $(this).parent().attr("id") 
    //Local storage reads time through id and user input
    localStorage.setItem(selectedHour, schedInput) 
    console.log("this function")
})

function timeBlockUpdate(){
    //currentHour is set to current hour number
    var currentHour = moment().hours(); 
    //Function runs for each <div> that has the time-block class
    $(".time-block").each(function(){
    //Variable is set to grab hour number. Index 1 of id is the hour number using split.
    var hourBlock = parseInt($(this).attr("id").split("-")[1])

    //Adding and removing css class with if statement
    if (hourBlock < currentHour){
        $(this).addClass("past") 
    }
    else if (hourBlock === currentHour){
        $(this).addClass("present") 
        $(this).removeClass("past")
    }
    else {
        $(this).addClass("future")
        $(this).removeClass("past")
        $(this).removeClass("present")
    }
    })
    }
    //Getting item through local storage. Hour-"" is the key. 
    timeBlockUpdate()
    $("#hour-8 .userInput").val(localStorage.getItem("hour-8")) 
    $("#hour-9 .userInput").val(localStorage.getItem("hour-9"))
    $("#hour-10 .userInput").val(localStorage.getItem("hour-10"))
    $("#hour-11 .userInput").val(localStorage.getItem("hour-11"))
    $("#hour-12 .userInput").val(localStorage.getItem("hour-12"))
    $("#hour-13 .userInput").val(localStorage.getItem("hour-13"))
    $("#hour-14 .userInput").val(localStorage.getItem("hour-14"))
    $("#hour-15 .userInput").val(localStorage.getItem("hour-15"))
    $("#hour-16 .userInput").val(localStorage.getItem("hour-16"))
    $("#hour-17 .userInput").val(localStorage.getItem("hour-17"))
    
    //Displaying current day
$("#currentDay").text(moment().format("MMMM Do YYYY")); 
})

