import { TranslatorConfig } from "../content/translator/TranslatorConfig";

chrome.runtime.onInstalled.addListener(async () => {
	console.log("TavernAI Translator: " + TranslatorConfig.enabled ? "Enabled" : "Disabled")
	// await postData("Hello World")
	// 	.then(() => {
	// 		chrome.storage.local.get("translated", (result) => {
	// 			console.log(result["translated"])
	// 		})
	// 	})
})