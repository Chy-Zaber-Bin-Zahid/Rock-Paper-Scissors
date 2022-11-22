"use strict";
// ##############First Page Part##############
// name part
let namePlayer = document.getElementById("enter-name-inp").value;

let checkName = function () {
  if (namePlayer === "") {
    namePlayer = "No Name";
  }else{
    namePlayer = document.getElementById("enter-name-inp").value;
  }
};

setInterval(checkName, 100);

// gender store
let gender = "";

let findSelected = () => {
  gender = document.querySelector("input[name='gender']:checked");
  if (gender === null) {
    gender = "";
  } else {
    gender = document.querySelector("input[name='gender']:checked").value;
  }
};

setInterval(findSelected, 100);

console.log(gender);

// opponent part
let opponent = "";

let findSelectedOp = () => {
  opponent = document.querySelector("input[name='opponent']:checked");
  if (opponent === null) {
    opponent = "";
  } else {
    opponent = document.querySelector("input[name='opponent']:checked").value;
  }
};

setInterval(findSelectedOp, 100);

console.log(opponent);

// button part
let check = function () {
  if (gender === "" || opponent === "") {
    document.getElementById("start").disabled = true;
  } else {
    document.getElementById("start").disabled = false;
  }
};
setInterval(check, 100);

// ##############Last Page Part##############
