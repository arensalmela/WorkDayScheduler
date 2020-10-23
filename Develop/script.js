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

    timeBlockUpdate()
    var hourInterval = setInterval(timeBlockUpdate(), 10000) // Interval to check if current time needs updating
    $("#hour-8 .userInput").val(localStorage.getItem("hour-9")) //Repeat for every hour

    
    //Displaying current day
$("#currentDay").text(moment().format("MMMM Do YYYY")); 
})

