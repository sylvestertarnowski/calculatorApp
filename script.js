/* This is a calculator app. It will have basic capabilities of a calculator
such as adding, subtracing, division, multiplication, percentage modifier. */

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


// function inputNumber(id) {
//   let n = document.getElementById(id).innerHTML;
//   document.getElementById('lower').innerHTML += n;
// }

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
(and a tried that at first LOL). It also check for operation signs
in 'lower' input, and if it encounters one, it moves everything up
by one place in the input field.*/

function inputValue(n) {
  let x = document.getElementById('middle').innerHTML;
  let y = document.getElementById('lower').innerHTML;
  document.getElementById('upper').innerHTML = x;
  document.getElementById('middle').innerHTML = y;
  setTimeout(function() {
  document.getElementById('lower').innerHTML = n;
  }, 20);
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
document.getElementById('plus').onclick = function plusSign() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "+";
};
});

window.addEventListener("load", function() {
document.getElementById('minus').onclick = function minusSign() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "-";
};
});

window.addEventListener("load", function() {
document.getElementById('multiply').onclick = function multiplySign() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "x";
};
});

window.addEventListener("load", function() {
document.getElementById('divide').onclick = function divideSign() {
  let n = document.getElementById('lower').innerHTML;
  document.getElementById('middle').innerHTML = n;
  document.getElementById('lower').innerHTML = "/";
};
});


window.addEventListener("load", function() {
document.getElementById('equal').onclick = function equalSign() {
  let result;
  let x = document.getElementById('upper').innerHTML;
  let a = parseFloat(x);
  let y = document.getElementById('lower').innerHTML;
  let b = parseFloat(y);
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
};
});

console.log("Hello world!");
