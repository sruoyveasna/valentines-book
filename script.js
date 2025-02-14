let currentPage = 0;
const pages = document.querySelectorAll(".page");
const book = document.getElementById("book");
const flowersContainer = document.getElementById("flowers");

let startX = 0;
let endX = 0;

// Create bouquet of flowers
for (let i = 0; i < 10; i++) {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = `${Math.random() * 100}%`;
  flower.style.top = `${Math.random() * 100}%`;
  flower.style.animationDelay = `${Math.random() * 2}s`;
  flowersContainer.appendChild(flower);
}

book.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

book.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (startX - endX > 50) {
    // Swipe left (next page)
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  } else if (endX - startX > 50) {
    // Swipe right (previous page)
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  }
}

function showPage(pageIndex) {
  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.style.transform = "translateX(0)";
    } else if (index < pageIndex) {
      page.style.transform = "translateX(-100%)";
    } else {
      page.style.transform = "translateX(100%)";
    }
  });
}

// Initialize first page
showPage(currentPage);
