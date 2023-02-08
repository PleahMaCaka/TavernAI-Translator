import { TranslatorState } from "./TranslatorState"

function addTranslatorOption() {
	const optionsContent = document.querySelector(".options-content")
	optionsContent?.setAttribute("style", "top: -50px")

	const toggleTranslator = document.createElement("a")
	toggleTranslator.id = "option_toggle_translator"
	toggleTranslator.text = "Toggle Translator"

	const translatorIcon =
		"https://cdn.discordapp.com/attachments/1072301775606001744/1072301837304221716/translator.png"
	toggleTranslator.innerHTML = `<img src="${translatorIcon}" width="20" height="20" alt="translator">Toggle Translator`

	optionsContent?.appendChild(toggleTranslator)

	document
		.getElementById("option_toggle_translator")
		?.addEventListener("click", () => {
			TranslatorState.enabled = !TranslatorState.enabled
			console.log("TavernAI Translator: " + TranslatorState.enabled)
			if (TranslatorState.enabled) enableTranslatorTextarea()
			else disableTranslatorTextarea()
		})
}

function enableTranslatorTextarea() {
	const sendTextarea = document.querySelector("#send_textarea")
	const translatorTextarea = document.createElement("textarea")
	const sendForm = document.getElementById("send_form")

	sendTextarea?.setAttribute("style", "width: 50%; height: 89px; margin-left: 0;")
	translatorTextarea.setAttribute("placeholder", "Message to translate");
	translatorTextarea.id = "translator_textarea"
	translatorTextarea.setAttribute("style", "width: 50%; height: 89px; margin-left: 0;")
	sendTextarea?.parentNode?.insertBefore(translatorTextarea, sendTextarea)

	sendForm?.setAttribute("style", "display: flex; flex-direction: row;")

	// ^ keydown ^ //
	translatorTextarea.addEventListener("keydown", async (event) => {
		if (event.key === "Enter") {
			event.preventDefault()

			// TODO logging translated value
			if (translatorTextarea.value === "" || translatorTextarea.value === undefined) return

			TranslatorState.input.set(translatorTextarea.value); // semi need idk why
			(<HTMLInputElement>document.getElementById("send_textarea")).value = TranslatorState.output

			translatorTextarea.value = ""
		}
	})
}

function disableTranslatorTextarea() {
	const sendTextarea = document.querySelector("#send_textarea")
	const translatorTextarea = document.querySelector("#translator_textarea")
	const sendForm = document.getElementById("send_form")

	sendTextarea?.removeAttribute("style")

	translatorTextarea?.remove()

	sendForm?.removeAttribute("style")
}

export function initTranslator() {
	if (TranslatorState.enabled) enableTranslatorTextarea()
	addTranslatorOption()
}
