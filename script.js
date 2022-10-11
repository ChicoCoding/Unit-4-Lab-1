const totalParagraph = document.querySelector(".total");
const colaBtn = document.querySelector(".cola");
const peanutBtn = document.querySelector(".peanuts");
const chocolateBtn = document.querySelector(".chocolate");
const gummyBtn = document.querySelector(".gummy");

let total = 0;

colaBtn.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total: $${total}.00`;
});

peanutBtn.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total: $${total}.00`;
});

chocolateBtn.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total: $${total}.00`;
});

const coins = document.querySelector(".coinContainer");
const coinCount = document.querySelector("#amount");
const moneyBtn = document.querySelector(".makeMoney");
const selectBox = document.querySelector("#coinType");

gummyBtn.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total: $${total}.00`;
});
// console.dir(selectBox);
moneyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i < coinCount.value; i++) {
    // console.log("test");

    const newCoin = document.createElement("div");
    coins.append(newCoin);
    newCoin.classList.add(selectBox.value, "coin");
    newCoin.textContent = selectBox.value;
  }
});

const bulb = document.querySelector(".light");
const onBtn = document.querySelector("#lightOn");
const offBtn = document.querySelector("#lightOff");
const toggleBtn = document.querySelector("#toggle");
const endBtn = document.querySelector("#disable");
let on = false;

onBtn.addEventListener("click", () => {
  on = true;
  bulb.classList.add("on");
  bulb.classList.remove("off");
});
offBtn.addEventListener("click", () => {
  on = false;
  bulb.classList.add("off");
  bulb.classList.remove("on");
});

toggleBtn.addEventListener("click", () => {
  if (on) {
    on = false;
    bulb.classList.add("off");
    bulb.classList.remove("on");
  } else {
    on = true;
    bulb.classList.add("on");
    bulb.classList.remove("off");
  }
});
endBtn.addEventListener("click", () => {
  bulb.remove();
  onBtn.setAttribute("disabled", "true");
  offBtn.setAttribute("disabled", "true");
  toggleBtn.setAttribute("disabled", "true");
  endBtn.setAttribute("disabled", "true");
});
