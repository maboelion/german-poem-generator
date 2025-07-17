function displayPoem(response) {
	new Typewriter("#poem", {
		strings: response.data.answer,
		autoStart: true,
		delay: 20,
		cursor: "",
	});
}

function generatePoem(event) {
	event.preventDefault();

	let instructionsInput = document.querySelector("#user-instructions");

	let apiKey = "832o1fb3b29d8ee52eaf04ef99ctcdea";
	let context =
		"You are a romantic poem expert who loves to write poems. Please write a 4 line poem in basic HTML. Make sure to follow the user instructions. Please only display the poem, don't include '```html' or anything else except for the poem and sign it with '<i>- SheCodes AI'</i>.";
	let prompt = `User instructions: Generate a German poem about ${instructionsInput.value}`;
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let poemElement = document.querySelector("#poem");
	poemElement.classList.remove("hidden");
	poemElement.innerHTML = `<i class="generating">Generating poem about ${instructionsInput.value}...</i>`;

	axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
