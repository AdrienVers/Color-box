console.log("connecté !");

const box = document.querySelector(".color-box");
const resultat = document.querySelector(".color-resultat");

box.addEventListener("click", () => {
  if (box.style.backgroundColor === "green") {
    box.style.backgroundColor = "red";
    resultat.innerHTML = "Rouge";
  } else {
    box.style.backgroundColor = "green";
    resultat.innerHTML = "Vert";
  }
});
