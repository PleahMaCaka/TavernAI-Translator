export function toggleTranslator() {
	const optionsContent = document.querySelector(".options-content");

	optionsContent?.setAttribute("style", "top: -50px")

	const toggleTranslator = document.createElement("a")
	toggleTranslator.id = "option_toggle_translator"
	toggleTranslator.text = "Toggle Translator"

	const translatorImg = document.createElement("img")
	translatorImg.src = "https://cdn.discordapp.com/attachments/1072301775606001744/1072301837304221716/translator.png"
	translatorImg.setAttribute("width", "20")
	translatorImg.setAttribute("height", "20")

	toggleTranslator.insertBefore(translatorImg, toggleTranslator.firstChild)
	optionsContent?.appendChild(toggleTranslator)
}