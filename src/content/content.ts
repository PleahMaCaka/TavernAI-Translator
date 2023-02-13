import { initTranslator } from "./translator/AddTranslator";

console.log("TavernAI Translator: content loaded")

const textarea = document.getElementById("send_textarea")

if (!textarea) console.log("TavernAI Translator: textarea not found")

window.addEventListener("load", () => {
	initTranslator()
})
