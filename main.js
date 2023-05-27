const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const iconVisibility = () => {
    let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
    let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;

    leftBtn.style.display = scrollLeftValue > 0 ? "block" : "none";
    rightBtn.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
}

rightBtn.addEventListener("click", () => {
    tabMenu.scrollLeft += 200;
    setTimeout(() => iconVisibility(), 50);
});
leftBtn.addEventListener("click", () => {
    tabMenu.scrollLeft -= 200;
    iconVisibility();
    setTimeout(() => iconVisibility(), 50);
});

let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
    if(!activeDrag) return;
    tabMenu.scrollLeft -= drag.movementX;
    iconVisibility();
    tabMenu.classList.add("dragging");
});

document.addEventListener("mouseup", () => {
    activeDrag = false;
    tabMenu.classList.remove("dragging");
});

tabMenu.addEventListener("mousedown", () => {
    activeDrag = true;
});

