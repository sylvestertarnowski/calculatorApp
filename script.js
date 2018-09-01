/* This is a calculator app. It will have basic capabilities of a calculator
such as adding, subtracing, division, multiplication, percentage modifier. */

function inputValue(n) {
  let x = document.getElementById('middle').innerHTML;
  let y = document.getElementById('lower').innerHTML;
  document.getElementById('upper').innerHTML = x;
  document.getElementById('middle').innerHTML = y;
  setTimeout(function() {
  document.getElementById('lower').innerHTML = n;
  }, 20);
}

function plusSign() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "+";
}

function minusSign() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "-";
}

function multiplySign() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "x";
}

function divideSign() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "/";
}

function inputNine() {
  document.getElementById('lower').innerHTML += "9";
}

function add(a, b) {
  let x = a + b;
  console.log(x);
  return x;
}

function subtract(a, b) {
  let x = a - b;
  console.log(x);
  return x;
}

function multiply(a, b) {
  let x = a * b;
  console.log(x);
  return x;
}

function divide(a, b) {
  let x = a / b;
  console.log(x);
  return x;
}

function equalSign() {
  let result;
  let x = document.getElementById('upper').innerHTML;
  let a = parseInt(x);
  let y = document.getElementById('lower').innerHTML;
  let b = parseInt(y);
  let z = document.getElementById('middle').innerHTML;
  if (z == "+") {
    result = add(a, b);
    // return result;
  } else if (z == "-") {
    result = subtract(a, b);
    // return result;
  } else if (z == "x") {
    result = multiply(a, b);
    // return result;
  } else if (z == "/") {
    result = divide(a, b);
    // return result;
  } else {
    result = "error";
    // return result;
  }
  setTimeout(function(){
    document.getElementById('upper').innerHTML = "";
    document.getElementById('middle').innerHTML = "";
    document.getElementById('lower').innerHTML = result;
  }, 20);
}

console.log("Hello world!");
