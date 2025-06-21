function generatePoem() {
  const instructionsInput = document
    .getElementById("instructions")
    .value.trim();
  if (!instructionsInput.trim()) {
    alert("Please type a topic for your poem!");
  }
  const prompt = `Generate a poem about ${instructionsInput}`;
  const context =
    "You are an expert in poems and your mission is to generate a 4 lines poem in basic HTML. Make sure you follow User instructions. Do not add ``html before or after the poem, please.";
  const apiKey = "b21d503dafo2f9t8344f5f54960e518f";
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating your poem...");
  console.log(prompt);

  axios.get(apiUrl).then(displayPoem);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  generatePoem();
}

function displayPoem(response) {
  console.log(response);
  const poemElement = document.getElementById("poem");

  new Typewriter(poemElement, {
    strings: [response.data.answer],
    cursor: "",
    delay: 50,
    loop: false,
  }).start();
}

const requestPoem = document.getElementById("submit-button");
requestPoem.addEventListener("click", handleSearchSubmit);
