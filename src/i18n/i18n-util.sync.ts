// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters'
import type { Locales, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

import bg from './bg'
import de from './de'
import en from './en'
import es from './es'
import fr from './fr'
import hu from './hu'
import it from './it'
import ja from './ja'
import pl from './pl'
import pt from './pt'
import tr from './tr'

import bg_commands from './bg/commands'
import de_commands from './de/commands'
import en_commands from './en/commands'
import es_commands from './es/commands'
import fr_commands from './fr/commands'
import hu_commands from './hu/commands'
import it_commands from './it/commands'
import ja_commands from './ja/commands'
import pl_commands from './pl/commands'
import pt_commands from './pt/commands'
import tr_commands from './tr/commands'

const localeTranslations = {
	bg: {
		...bg,
		commands: bg_commands
	},
	de: {
		...de,
		commands: de_commands
	},
	en: {
		...en,
		commands: en_commands
	},
	es: {
		...es,
		commands: es_commands
	},
	fr: {
		...fr,
		commands: fr_commands
	},
	hu: {
		...hu,
		commands: hu_commands
	},
	it: {
		...it,
		commands: it_commands
	},
	ja: {
		...ja,
		commands: ja_commands
	},
	pl: {
		...pl,
		commands: pl_commands
	},
	pt: {
		...pt,
		commands: pt_commands
	},
	tr: {
		...tr,
		commands: tr_commands
	},
}

export const loadLocale = (locale: Locales): void => {
	if (loadedLocales[locale]) return

	loadedLocales[locale] = localeTranslations[locale] as unknown as Translations
	loadFormatters(locale)
}

export const loadAllLocales = (): void => locales.forEach(loadLocale)

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))
