import { translate } from "@vitalets/google-translate-api";
import { TranslatorConfig } from "../content/translator/TranslatorConfig";

export async function postData(value: string): Promise<void> {
    try {
        const {text} = await translate(value, {to: TranslatorConfig.locale})
        await chrome.storage.local.set({translated: text})
        console.log(text)
    } catch (err) {
        console.error(err)
    }
}

/**
 * @description Experimental, currently not working
 * @param value
 */
export async function noCorsPostData(value: string): Promise<void> {
    try {
        const text: string = await fetch(
            `https://translate.google.com/translate_a/single?client=at&dt=t&dt=rm&dj=1&sl=auto&tl=ko&q=${value}`,
            {mode: "no-cors"}
        ).then((res) => res.json()).then((res) => res.sentences[0].trans)

        await chrome.storage.local.set({translated: text})
        console.log(text)
    } catch (err) {
        console.error(err)
    }
}

