let play = document.querySelector("#check");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  play.setAttribute("style", "color:balck");
  document.body.style.backgroundColor = "#222";
});

let no = document.querySelector(".number");

let checkNum = document.querySelector("input");
let b = document.querySelector("#guess");
let para = document.querySelectorAll("p");
let randomNumber = Math.floor(Math.random() * 100);
let count = 100;
b.addEventListener("click", () => {
  console.log(randomNumber);
  if (randomNumber < parseInt(checkNum.value)) {
    para[1].innerText = "Your guess Number is High";
    count--;
    para[2].innerText = `💯 Chances: ${count}`;
  } else if (randomNumber > parseInt(checkNum.value)) {
    para[1].innerText = "Your guess Number is Low";
    count--;
    para[2].innerText = `💯 Chances: ${count}`;
  } else {
    para[1].innerText = randomNumber;
    count--;
    document.querySelector(".message").textContent = "🤩🤩 Hurray You Won 🤩🤩";
    document.body.style.backgroundColor = "green";
    para[2].innerText = `💯 Chances: ${count}`;
    para[3].innerText = ` 🥇 HighScore:${count}`;

    no.innerText = `${randomNumber}`;
  }
});
