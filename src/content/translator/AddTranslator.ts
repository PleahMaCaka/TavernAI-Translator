import { postData } from "../../background/Translator";
import { TranslatorConfig } from "./TranslatorConfig"

function addTranslator() {
    // opened options
    const optionsContent = document.querySelector(".options-content")
    optionsContent?.setAttribute("style", "top: -50px")

    // toggle button
    const toggleTranslator = document.createElement("a")
    toggleTranslator.id = "option_toggle_translator"
    toggleTranslator.text = "Toggle Translator"

    // button icon
    const translatorIcon =
        "https://cdn.discordapp.com/attachments/1072301775606001744/1072301837304221716/translator.png"
    toggleTranslator.innerHTML = `<img src="${translatorIcon}" width="20" height="20" alt="translator">Toggle Translator`

    // add toggle button in options
    optionsContent?.appendChild(toggleTranslator)

    // toggle to change config
    document
        .getElementById("option_toggle_translator")
        ?.addEventListener("click", () => {
            TranslatorConfig.enabled = !TranslatorConfig.enabled
            console.log("TavernAI Translator: " + TranslatorConfig.enabled)
            if (TranslatorConfig.enabled) enableTranslator()
            else disableTranslator()
        })
}

function enableTranslator() {
    // sendTextArea : original textarea (right)
    // translatorTextArea : translate textarea (left)
    const sendTextarea = document.querySelector("#send_textarea")
    const translatorTextarea = document.createElement("textarea")

    // sendForm : existing form
    const sendForm = document.getElementById("send_form")

    sendTextarea?.setAttribute("style", "width: 50%; height: 89px; margin-left: 0;")
    translatorTextarea.setAttribute("placeholder", "Message to translate...");
    translatorTextarea.id = "translator_textarea"
    translatorTextarea.setAttribute("style", "width: 50%; height: 89px; margin-left: 0;")
    sendTextarea?.parentNode?.insertBefore(translatorTextarea, sendTextarea)

    sendForm?.setAttribute("style", "display: flex; flex-direction: row;")

    // ^ keydown ^ //
    translatorTextarea.addEventListener("keydown", async (event) => {
        if (event.key !== "Enter") return
        event.preventDefault()

        if (translatorTextarea.value === "" || translatorTextarea.value === undefined) return

        await postData(translatorTextarea.value);

        (<HTMLInputElement>document.getElementById("send_textarea")).value
            = await chrome.storage.local.get("translated").then(res => res["translated"]);

        (<HTMLInputElement>sendTextarea)?.focus()

        translatorTextarea.value = ""
    })
}

/**
 * revert all css changes
 */
function disableTranslator() {
    document.querySelector("#send_textarea")?.removeAttribute("style")
    document.querySelector("#translator_textarea")?.remove()
    document.getElementById("send_form")?.removeAttribute("style")
}

export function initTranslator() {
    if (TranslatorConfig.enabled) enableTranslator()
    addTranslator()
}
