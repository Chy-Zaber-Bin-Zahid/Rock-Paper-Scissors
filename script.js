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

  if (namePlayer !== "") {
    document.getElementById("player").innerText = namePlayer;
  } else {
    document.getElementById("player").innerText = "Player";
  }

  if (gender === "Female") {
    document.getElementById("player-pic").src = "Female_profile.jpg";
  }

  document.getElementById("com-name").innerText = opponent;

  if (opponent === "Hitoshi") {
    document.getElementById("computer-pic").src = "boy_normal.png";
  }

  checkPlayerProfile();
});

// player select part
let choose = function (item) {
  let leftImage = document.getElementById("leftShow");
  let leftTitle = document.getElementById("leftTitle");
  let rightImage = document.getElementById("rightShow");
  let rightTitle = document.getElementById("rightTitle");

  let images = ["rock.png", "paper.png", "scissors.png"];
  let random = Math.floor(Math.random() * images.length);

  if (item === "rock") {
    leftImage.src = "rock.png";
    leftTitle.innerText = "Rock";
    rightImage.src = images[random];
    if (rightImage.src === "rock.png") {
      rightTitle.innerText = "Rock";
    } else if (rightImage.src === "paper.png") {
      rightTitle.innerText = "Paper";
    } else {
      rightTitle.innerText = "Scissor";
    }
  } else if (item === "paper") {
    leftImage.src = "paper.png";
    leftTitle.innerText = "Paper";
    rightImage.src = images[random];
    if (rightImage.src === "rock.png") {
      rightTitle.innerText = "Rock";
    } else if (rightImage.src === "paper.png") {
      rightTitle.innerText = "Paper";
    } else {
      rightTitle.innerText = "Scissor";
    }
  } else {
    leftImage.src = "scissors.png";
    leftTitle.innerText = "Scissor";
    rightImage.src = images[random];
    if (rightImage.src === "rock.png") {
      rightTitle.innerText = "Rock";
    } else if (rightImage.src === "paper.png") {
      rightTitle.innerText = "Paper";
    } else {
      rightTitle.innerText = "Scissor";
    }
  }
};

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");

rock.addEventListener("click", function () {
  choose("rock");
});
paper.addEventListener("click", function () {
  choose("paper");
});
scissor.addEventListener("click", function () {
  choose("scissor");
});
