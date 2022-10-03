console.log("connecté !");

const box = document.querySelector(".color-box");

box.addEventListener("click", () => {
  if (box.style.backgroundColor === "green") {
    box.style.backgroundColor = "red";
  } else {
    box.style.backgroundColor = "green";
  }
});
