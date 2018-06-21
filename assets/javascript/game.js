var randomNumber = Math.floor((Math.random() * 101) + 19);
console.log(randomNumber);
var counter = 0;
var counterDoc = $('#scoreCounter').text(counter);
var winsCounter = 0;
var winsCounterDoc = $('#wins').text(winsCounter);
var lossCounter = 0;
var lossCounterDoc = $('#losses').text(lossCounter);
var randomNumberDoc = $("#randomNumber").text(randomNumber);
var button1Num = Math.floor(Math.random() * 11) + 1;
    $('#button1').attr('data-value',button1Num);
var button2Num = Math.floor(Math.random() * 11) + 1;
    $('#button2').attr('data-value',button2Num);
var button3Num = Math.floor(Math.random() * 11) + 1;
    $('#button3').attr('data-value',button3Num);
var button4Num = Math.floor(Math.random() * 11) + 1;
    $('#button4').attr('data-value',button4Num);

function play(){
    randomNumber = Math.floor((Math.random() * 101) + 19);
    console.log(randomNumber);
    randomNumberDoc = $("#randomNumber").text(randomNumber);
    button1Num = Math.floor(Math.random() * 11) + 1;
        $('#button1').attr('data-value',button1Num);
    button2Num = Math.floor(Math.random() * 11) + 1;
        $('#button2').attr('data-value',button2Num);
    button3Num = Math.floor(Math.random() * 11) + 1;
        $('#button3').attr('data-value',button3Num);
    button4Num = Math.floor(Math.random() * 11) + 1;
        $('#button4').attr('data-value',button4Num);
}

$(document).on('click','button', function(){
    var button = $(this);
    counter = counter + parseInt(button.attr('data-value'));
    counterDoc = $('#scoreCounter').text(counter);

    if (counter == randomNumber){
        play();
        counter = 0;
        counterDoc = $('#scoreCounter').text(counter);
        winsCounter = winsCounter + 1;
        winsCounterDoc = $('#wins').text(winsCounter);
        return;
    }
    if (counter > randomNumber){
        play();
        counter = 0;
        counterDoc = $('#scoreCounter').text(counter);
        lossCounter = lossCounter + 1;
        lossCounterDoc = $('#losses').text(lossCounter);
        return;
    }
    
    

});




