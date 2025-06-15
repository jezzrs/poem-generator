const requestPoem = document.getElementById("submit-button");
const poemElement = document.getElementById("poem");

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The Naming of Cats",
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

requestPoem.addEventListener("click", generatePoem);

poemElement.inhher("The Naming of Cats");
