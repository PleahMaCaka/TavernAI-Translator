export function initCharacterMessageTranslator() {
    console.log("TavernAI Translator: Character Message Translator Enabled")
    const target = document.getElementById("chat") as Element
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type == "childList") {
                const addedNodes = mutation.addedNodes
                for (const node of addedNodes) {
                    if ((node as Element).classList.contains("mes")) {
                        console.log("New message added!")
                        const mesBlock = (node as Element).querySelector(".mes_block") as Element
                        mesBlock.appendChild(document.createElement("br"))
                        mesBlock.appendChild(document.createTextNode("Translated"))
                    }
                }
            }
        })
    })
    observer.observe(target!!, {childList: true})
}