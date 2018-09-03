/* This is a calculator app. It will have basic capabilities of a calculator
such as adding, subtracing, division, multiplication, percentage modifier. */

function add(a, b) {
  let x = a + b;
  return x;
}

function subtract(a, b) {
  let x = a - b;
  return x;
}

function multiply(a, b) {
  let x = a * b;
  return x;
}

function divide(a, b) {
  let x = a / b;
  return x;
}

function equalSign() {
  let result;
  let x = document.getElementById('upper').innerHTML;
  let a = parseFloat(x);
  let y = document.getElementById('lower').innerHTML;
  let b = parseFloat(y);
  let z = document.getElementById('middle').innerHTML;
  if (z == "+") {
    result = add(a, b);
  } else if (z == "-") {
    result = subtract(a, b);
  } else if (z == "x") {
    result = multiply(a, b);
  } else if (z == "/") {
    result = divide(a, b);
  } else {
    return; // equals will do nothing if operator is in entry field!
  }
  setTimeout(function(){
    document.getElementById('upper').innerHTML = "";
    document.getElementById('middle').innerHTML = "";
    document.getElementById('lower').innerHTML = result;
  }, 20);
}

  /*The "if else" statement in function below ensures that the operator
  symbol in the entry field is moved up when a number is pressed*/

function inputNumber(id) {
  let x = document.getElementById('lower').innerHTML;
  if (x == "+" || x == "-" || x == "x" || x == "/") {
    let middle = document.getElementById('middle').innerHTML;
    document.getElementById('upper').innerHTML = middle;
    document.getElementById('middle').innerHTML = x;
    document.getElementById('lower').innerHTML = "";
    let n = document.getElementById(id).innerHTML;
    document.getElementById('lower').innerHTML += n;
  } else {
    let n = document.getElementById(id).innerHTML;
    document.getElementById('lower').innerHTML += n;
  }
}

/* inputNumber() function above triggers, when one of the divs that
has it as "onClick" attribute. It then takes the id of the
clicked div (by inserting this.id there) to the scope of
function. This one function replaces multiple number
functions,that would otherwise have to be implemented
(and a tried that at first LOL). It also checks for operator symbols
in 'lower' input, and if it encounters one, it moves everything up
by one place in the input-output field.*/

function addPlus() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "+";
}

function addMinus() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "-";
}

function addMultiply() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "x";
}

function addDivide() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "/";
}

/*^^Above a set of functions to add analogous operator symbol^^*/

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
  let l = document.getElementById('lower').innerHTML;
  let u = document.getElementById('upper').innerHTML;
  if (l === "+") {
    return;
  } else if (l === "-" || l === "x" || l === "/") {
    document.getElementById('lower').innerHTML = "+";
  } else if (u !== "") {
    equalSign();
    setTimeout(addPlus, 20);
  } else {
    addPlus();
  }
}

function minusSign() {
  let l = document.getElementById('lower').innerHTML;
  let u = document.getElementById('upper').innerHTML;
  if (l === "-") {
    return;
  } else if (l === "+" || l === "x" || l === "/") {
    document.getElementById('lower').innerHTML = "-";
  } else if (u !== "") {
    equalSign();
    setTimeout(addMinus, 20);
  } else {
    addMinus();
  }
}

function multiplySign() {
  let l = document.getElementById('lower').innerHTML;
  let u = document.getElementById('upper').innerHTML;
  if (l === "x") {
    return;
  } else if (l === "-" || l === "+" || l === "/") {
    document.getElementById('lower').innerHTML = "x";
  } else if (u !== "") {
    equalSign();
    setTimeout(addMultiply, 20);
  } else {
    addMultiply();
  }
}

function divideSign() {
  let l = document.getElementById('lower').innerHTML;
  let u = document.getElementById('upper').innerHTML;
  if (l === "/") {
    return;
  } else if (l === "-" || l === "+" || l === "x") {
    document.getElementById('lower').innerHTML = "/";
  } else if (u !== "") {
    equalSign();
    setTimeout(addDivide, 20);
  } else {
    addDivide();
  }
}

function clearNumbers(id) {
  if (id == 'clear-entry') {
    document.getElementById('lower').innerHTML = "";
    return;
  } else if (id == 'clear-all') {
    document.getElementById('lower').innerHTML = "";
    document.getElementById('middle').innerHTML = "";
    document.getElementById('upper').innerHTML = "";
    return;
  } else console.log("Error");
}

/*Funciton aboe should be able to delete/clear all the
input in the case of C (clear-all) or just the current
entry CE (clear-entry).*/

window.addEventListener("load", function() {
document.getElementById('plus').onclick = plusSign;
});

window.addEventListener("load", function() {
document.getElementById('minus').onclick = minusSign;
});

window.addEventListener("load", function() {
document.getElementById('multiply').onclick = multiplySign;
});

window.addEventListener("load", function() {
document.getElementById('divide').onclick = divideSign;
});

window.addEventListener("load", function() {
document.getElementById('equal').onclick = equalSign;
});

