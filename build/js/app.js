(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "8bef59c8248608e4c4db2786f2c7b018";

},{}],2:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function(num1, num2) {
  var answer = num1 + num2;
  return answer;
};

exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
$(document).ready(function() {
  $('#addition').submit(function(event) {
    event.preventDefault();
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();
    var simpleCalculator = new Calculator("hot pink");
    var answer = simpleCalculator.add(num1, num2);
    $('#solution').prepend('<p>' + num1 + " + " + num2 + " = " + answer + '</p>');
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});

},{"./../.env":1,"./../js/pingpong.js":2}]},{},[3]);
