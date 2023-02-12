// slide controling start

// manual move

let leftArrow = document.querySelector(".slides .fa-chevron-left");
let controledSlid = document.querySelector(".slides .control");

leftArrow.onclick = function () {
  let eleMargin = window.getComputedStyle(controledSlid).marginLeft;

  if (parseInt(eleMargin) == 0) {
    controledSlid.style.marginLeft = "-80%";
  } else {
    let slidesWidth = window.getComputedStyle(
      document.querySelector(".slides")
    ).width;
    controledSlid.style.marginLeft = `${
      parseFloat(slidesWidth) * 0.2 + parseFloat(eleMargin)
    }px`;
  }
};
let rightArrow = document.querySelector(".slides .fa-chevron-right");

rightArrow.onclick = function () {
  let eleMargin = window.getComputedStyle(controledSlid).marginLeft;
  let slidesWidth = window.getComputedStyle(
    document.querySelector(".slides")
  ).width;

  if (
    Math.abs(-parseInt(eleMargin) - parseInt(parseInt(slidesWidth) * 0.8)) <= 5
  ) {
    controledSlid.style.marginLeft = "0px";
  } else {
    controledSlid.style.marginLeft = `${
      parseFloat(eleMargin) - parseFloat(slidesWidth) * 0.2
    }px`;
  }
};

// slide controling end

// menu-bar
const menu_icon = document.querySelector(".fa-bars");
const menu_items = document.querySelector(".menu-items");

menu_icon.addEventListener("click", () => {
  menu_items.classList.toggle("change");
});
