"use strict";
// ##############First Page Part##############
// name part
let namePlayer = document.getElementById("enter-name-inp").value;

let checkName = function () {
  if (namePlayer === "") {
    namePlayer = "No Name";
  } else {
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
// player part
document.getElementById("start").addEventListener("click", function () {
  let checkPlayerProfile = function () {
    document.getElementById("form").style.display = "none";
    document.getElementById("art").style.display = "block";
    document.getElementById("foot").style.display = "block";
    document.getElementById("again").style.display = "block";
  };

  if (namePlayer !== ""){
    document.getElementById("player").innerText = namePlayer;
  } else{
    document.getElementById("player").innerText = "Player";
  }

  if (gender === "Female") {
    document.getElementById("player-pic").src = "Female_profile.jpg";
  }

  document.getElementById("com-name").innerText = opponent;

  if (opponent === "Hitoshi") {
    document.getElementById("computer-pic").src = "boy_normal.png";
  }

  // score part
  document.getElementById("player-score").value = 0;
  document.getElementById("comp-score").value = 0;

  // player select part
  for (let index = 0; index < document.querySelectorAll(".sec-btn").length; index++) {
    let element = document.querySelectorAll(".sec-btn")[index];
    
    
  }



  checkPlayerProfile();
});
