function add(a, b) {return a + b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {return a / b;}
function subtract(a, b) {return a - b;}

var input = 0;
var temp_value = 0;
var operand;
    
$(".nums").on("click", function() {
  input = input*10 + Number($(this).text());
  update_result(input);
});

$(".operands").on("click", function() {
  //store and reset input
  temp_value = input;
  input = 0;
  
  operand = $(this).text();
  update_result(operand);
});

$(".eval").on("click", function() {
  console.log("input:" + input);
  console.log("temp:" + temp_value);
});
  
  
function update_result(num) {
  $("#result").text(num);
}


//function evaluate(number1, number2, operand) {}