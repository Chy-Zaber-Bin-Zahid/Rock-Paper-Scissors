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
  } else {
    document.getElementById("computer-pic").src = "girl_normal.png";
  }

  checkPlayerProfile();
});

// player select part
let choose = function (item) {
  if (
    document.getElementById("computer-pic").src ===
    "http://127.0.0.1:5500/girl_shocked.png" || document.getElementById("computer-pic").src ===
    "http://127.0.0.1:5500/girl_happy.png" || document.getElementById("computer-pic").src ===
    "http://127.0.0.1:5500/girl_angry.png"
  ) {
    document.getElementById("computer-pic").src =
      "http://127.0.0.1:5500/girl_normal.png";
  } else if (
    document.getElementById("computer-pic").src ===
    "http://127.0.0.1:5500/boy_shocked.png" || document.getElementById("computer-pic").src ===
    "http://127.0.0.1:5500/boy_happy.png" || document.getElementById("computer-pic").src ===
    "http://127.0.0.1:5500/boy_angry.png"
  ) {
    document.getElementById("computer-pic").src =
      "http://127.0.0.1:5500/boy_normal.png";
  }

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
    if (rightImage.src === "http://127.0.0.1:5500/rock.png") {
      rightTitle.innerText = "Rock";
    } else if (rightImage.src === "http://127.0.0.1:5500/paper.png") {
      rightTitle.innerText = "Paper";
    } else {
      rightTitle.innerText = "Scissor";
    }
  } else if (item === "paper") {
    leftImage.src = "paper.png";
    leftTitle.innerText = "Paper";
    rightImage.src = images[random];
    if (rightImage.src === "http://127.0.0.1:5500/rock.png") {
      rightTitle.innerText = "Rock";
    } else if (rightImage.src === "http://127.0.0.1:5500/paper.png") {
      rightTitle.innerText = "Paper";
    } else {
      rightTitle.innerText = "Scissor";
    }
  } else {
    leftImage.src = "scissors.png";
    leftTitle.innerText = "Scissor";
    rightImage.src = images[random];
    if (rightImage.src === "http://127.0.0.1:5500/rock.png") {
      rightTitle.innerText = "Rock";
    } else if (rightImage.src === "http://127.0.0.1:5500/paper.png") {
      rightTitle.innerText = "Paper";
    } else {
      rightTitle.innerText = "Scissor";
    }
  }

  // score part
  let scorePlayer = document.getElementById("player-score");
  let scoreComp = document.getElementById("comp-score");
  let compFace = document.getElementById("computer-pic");
  let resultShow = document.getElementById("result");

  let res = function () {
    resultShow.innerText = "Choose A Move";
  };

  let happyFace = function () {
    if (compFace.src === "http://127.0.0.1:5500/boy_happy.png") {
      resultShow.innerText = "Hitoshi Got +1";
      setTimeout(res, 5000);
    } else if (compFace.src === "http://127.0.0.1:5500/girl_happy.png") {
      resultShow.innerText = "Mikasa Got +1";
      setTimeout(res, 5000);
    }
  };

  if (leftTitle.innerText === rightTitle.innerText) {
    if (
      document.getElementById("computer-pic").src ===
      "http://127.0.0.1:5500/girl_normal.png"
    ) {
      document.getElementById("computer-pic").src =
        "http://127.0.0.1:5500/girl_shocked.png";
    } else if (
      document.getElementById("computer-pic").src ===
      "http://127.0.0.1:5500/boy_normal.png"
    ) {
      document.getElementById("computer-pic").src =
        "http://127.0.0.1:5500/boy_shocked.png";
    }
    resultShow.innerText = "Draw No Point";
    setTimeout(res, 3000);
  } else if (
    leftTitle.innerText === "Rock" &&
    rightTitle.innerText === "Paper"
  ) {
    scoreComp.innerText = c + 1;
    c++;
    if (compFace.src === "http://127.0.0.1:5500/girl_normal.png") {
      compFace.src = "http://127.0.0.1:5500/girl_happy.png";
      happyFace();
    } else if (compFace.src === "http://127.0.0.1:5500/boy_normal.png") {
      compFace.src = "http://127.0.0.1:5500/boy_happy.png";
      happyFace();
    }
  } else if (
    leftTitle.innerText === "Paper" &&
    rightTitle.innerText === "Scissor"
  ) {
    scoreComp.innerText = c + 1;
    c++;
    if (compFace.src === "http://127.0.0.1:5500/girl_normal.png") {
      compFace.src = "http://127.0.0.1:5500/girl_happy.png";
      happyFace();
    } else if (compFace.src === "http://127.0.0.1:5500/boy_normal.png") {
      compFace.src = "http://127.0.0.1:5500/boy_happy.png";
      happyFace();
    }
  } else if (
    leftTitle.innerText === "Scissor" &&
    rightTitle.innerText === "Rock"
  ) {
    scoreComp.innerText = c + 1;
    c++;
    if (compFace.src === "http://127.0.0.1:5500/girl_normal.png") {
      compFace.src = "http://127.0.0.1:5500/girl_happy.png";
      happyFace();
    } else if (compFace.src === "http://127.0.0.1:5500/boy_normal.png") {
      compFace.src = "http://127.0.0.1:5500/boy_happy.png";
      happyFace();
    }
  } else if (
    leftTitle.innerText === "Scissor" &&
    rightTitle.innerText === "Paper"
  ) {
    scorePlayer.innerText = p + 1;
    p++;
  } else if (
    leftTitle.innerText === "Rock" &&
    rightTitle.innerText === "Scissor"
  ) {
    scorePlayer.innerText = p + 1;
    p++;
  } else if (
    leftTitle.innerText === "Paper" &&
    rightTitle.innerText === "Rock"
  ) {
    scorePlayer.innerText = p + 1;
    p++;
  }
};

let p = 0;
let c = 0;
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
