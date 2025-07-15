function generatePoem(event) {
	event.preventDefault();

	new Typewriter("#poem", {
		strings: "Generating poem for you...",
		autoStart: true,
		delay: 20,
		cursor: "",
	});
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
