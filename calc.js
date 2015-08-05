var input = 0;
var previous_input = 0;
var operand;
    
$(".nums").on("click", function() {
  input = input*10 + Number($(this).text());
  update_result(input);
});

$(".operands").on("click", function() {
  //store and reset input
  previous_input = input;
  input = 0;
  
  operand = $(this).text();
  update_result(operand);
});

$(".eval").on("click", function() {
  console.log("input:" + input);
  console.log("temp:" + previous_input + "\n");
  switch(operand) {
    case "+":
      input = previous_input + input;
      update_result(input);    
      break;
    case "-":
      input = previous_input - input;
      update_result(input);  
      break;
    case "x":
      input = previous_input * input;
      update_result(input);  
      break;
    case "/":
      input = previous_input / input;
      update_result(input);  
      break;  
    default:
      console.log("no operand found");
  }
});

$(".clear").on("click", function() {
  reset();
});
  
function reset() {
  previous_input = 0;
  input = 0;
  update_result(0);
}

function update_result(num) {
  $("#result").text(num);
}

function add(a, b) {return a + b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {return a / b;}
function subtract(a, b) {return a - b;}




