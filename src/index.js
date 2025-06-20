const requestPoem = document.getElementById("submit-button");
const poemElement = document.getElementById("poem");
const instructionsInput = document.querySelector("#instructions");
const context =
  "You are an expert in poems and your mission is to generate a 4 lines poem in basic HTML. Make sure you follow User instructions";

const prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
const apiKey = "b21d503dafo2f9t8344f5f54960e518f";
const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

function generatePoem(event) {
  event.preventDefault();
  axios.get(apiUrl).then(displayPoem);
  console.log("Generating your poem...");
}

function displayPoem(response) {
  new Typewriter(poemElement),
    {
      strings: [response.data.answer],
      autoStart: true,
      cursor: "",
      delay: 75,
    };
}

requestPoem.addEventListener("click", generatePoem);
