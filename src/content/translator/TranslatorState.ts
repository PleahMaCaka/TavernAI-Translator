import { Locale } from "./Locales";

export let TranslatorState = {
	enabled: true,
	firstState: true,
	nameTranslation: false,
	locale: "ko" as Locale,
	input: {
		value: "" as string,
		set(value: string) {
			this.value = value
			// TranslatorState.output = TODO
		}
	},
	output: "" as string
}