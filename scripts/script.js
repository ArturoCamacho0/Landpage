'use strict'

$(document).ready(function(){
    // CONTADOR DE DÍAS
    var end = new Date('06/04/2021 1:36 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            alert("TERMINO")

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        if(seconds < 10){
            seconds = "0" + seconds;
        }
        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(hours < 10){
            hours = "0" + hours;
        }
        if(days < 10){
            days = "0" + days;
        }

        document.getElementById('dias').innerHTML = days;
        document.getElementById('horas').innerHTML = hours;
        document.getElementById('minutos').innerHTML = minutes;
        document.getElementById('segundos').innerHTML = seconds;
    }
    timer = setInterval(showRemaining, 1);

    // Scroll
    $("#inicio").click(function(){
        window.scroll({
            top: 0,
            left: 100,
            behavior: 'smooth'
        });
    });

    $("#donde").click(function(){
        window.scroll({
            top: 600,
            left: 100,
            behavior: 'smooth'
        });
    });
});