import { initTranslator } from "./translator/AddTranslator";
import { initCharacterMessageTranslator } from "./CharacterMessageTranslate";

console.log("TavernAI Translator: content loaded")

if (document.getElementById("send_textarea"))
    console.log("TavernAI Translator: textarea found")
else
    console.log("TavernAI Translator: textarea not found")

window.addEventListener("load", () => {
    console.log("TavernAI Translator: init translator")
    initTranslator()
    initCharacterMessageTranslator()
})