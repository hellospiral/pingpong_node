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
