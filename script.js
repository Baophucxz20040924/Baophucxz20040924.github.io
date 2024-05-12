"use strict";

// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936
const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});
// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936
function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}
// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936
function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}
// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936
function generateMessage(noCount) {
  const messages = [
    "No",
    "Em chắc chưa",
    "Em không kiếm được ai như anh đâu",
    "Đừng mà công chúa của anh",
    "Em đang làm trái tim anh tan nát đó",
    "Anh nguyện dâng hiến trái tim này cho em",
    "Em nguyện làm người yêu anh nhé <3",
    "Em không có quyền lựa trọn nào khác đâu",
    "Gọi anh là vua về nhì vì anh cho em là nhất <3",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}
// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936
function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}
// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936
function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
// Tác giả: Nguyễn Bảo Phúc ------ Zalo: 0905406936
// Tác giả: Nguyễn Bảo Phúc ------- Zalo: 0905406936
// Tác giả: Nguyễn Bảo Phúc ----- Zalo: 0905406936
// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936
// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936
// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936
// Tác giả: Nguyễn Bảo Phúc ----= Zalo: 0905406936
// Tác giả: Nguyễn Bảo Phúc --- Zalo: 0905406936
// Tác giả: Nguyễn Bảo Phúc ----=-=- Zalo: 0905406936
// Tác giả: Nguyễn Bảo Phúc --890- Zalo: 0905406936