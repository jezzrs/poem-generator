//Event listener when clicking
const requestPoem = document.getElementById("submit-button");
requestPoem.addEventListener("click", generatePoem);

//Generate poem = get instructions + defining prompt and context + set up API + call API
function generatePoem(event) {
  event.preventDefault();
  console.log("Generating your poem...");

  //Get user's instructions
  const instructionsInput = document
    .getElementById("instructions")
    .value.trim();

  if (!instructionsInput) {
    alert("Please enter a topic for your poem");
    return;
  }

  //Defining prompt and context
  const prompt = `Generate a poem about ${instructionsInput}`;
  const context =
    "You are an expert in poems and your mission is to generate a 4 lines poem in basic HTML. Make sure you follow User instructions. Do not add ``html before or after the poem, please.";

  //Set up API url
  const apiKey = "b21d503dafo2f9t8344f5f54960e518f";
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  const poemElement = document.getElementById("poem");

  poemElement.innerHTML = `${JSON.stringify([instructionsInput], null)}`;
  poemElement.classList.remove("poem-hidden");
  poemElement.classList.add("poem");
  poemElement.innerHTML = `<div class=loading> ⌛ </br> <em> Please wait... </br> We are generating your poem about <b>${instructionsInput}</b> </em> </div>`;

  //Call API
  axios.get(apiUrl).then(displayPoem);
}

//Handle API response
function displayPoem(response) {
  console.log("Poem generated");
  console.log("Poem is:", response.data);

  const userInput = document.getElementById("instructions");
  userInput.value = "";

  const answer = response?.data?.answer || "(No poem returned)";
  const poemWithCredit = `${answer}\n\n <div class=credits> — by SheCodes AI</div>`;

  //Typewrite animation
  new Typewriter("#poem", {
    strings: `${poemWithCredit}`,
    autoStart: true,
    cursor: "",
    delay: 100,
  });
}
