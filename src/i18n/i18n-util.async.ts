// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters'
import type { Locales, Namespaces, Translations } from './i18n-types'
import { loadedFormatters, loadedLocales, locales } from './i18n-util'

const localeTranslationLoaders = {
	bg: () => import('./bg'),
	de: () => import('./de'),
	en: () => import('./en'),
	es: () => import('./es'),
	fr: () => import('./fr'),
	hu: () => import('./hu'),
	it: () => import('./it'),
	ja: () => import('./ja'),
	pl: () => import('./pl'),
	pt: () => import('./pt'),
	tr: () => import('./tr'),
}

const localeNamespaceLoaders = {
	bg: {
		commands: () => import('./bg/commands')
	},
	de: {
		commands: () => import('./de/commands')
	},
	en: {
		commands: () => import('./en/commands')
	},
	es: {
		commands: () => import('./es/commands')
	},
	fr: {
		commands: () => import('./fr/commands')
	},
	hu: {
		commands: () => import('./hu/commands')
	},
	it: {
		commands: () => import('./it/commands')
	},
	ja: {
		commands: () => import('./ja/commands')
	},
	pl: {
		commands: () => import('./pl/commands')
	},
	pt: {
		commands: () => import('./pt/commands')
	},
	tr: {
		commands: () => import('./tr/commands')
	}
}

const updateDictionary = (locale: Locales, dictionary: Partial<Translations>): Translations =>
	loadedLocales[locale] = { ...loadedLocales[locale], ...dictionary }

export const importLocaleAsync = async (locale: Locales): Promise<Translations> =>
	(await localeTranslationLoaders[locale]()).default as unknown as Translations

export const loadLocaleAsync = async (locale: Locales): Promise<void> => {
	updateDictionary(locale, await importLocaleAsync(locale))
	loadFormatters(locale)
}

export const loadAllLocalesAsync = (): Promise<void[]> => Promise.all(locales.map(loadLocaleAsync))

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))

export const importNamespaceAsync = async<Namespace extends Namespaces>(locale: Locales, namespace: Namespace) =>
	(await localeNamespaceLoaders[locale][namespace]()).default as unknown as Translations[Namespace]

export const loadNamespaceAsync = async <Namespace extends Namespaces>(locale: Locales, namespace: Namespace): Promise<void> =>
	void updateDictionary(locale, { [namespace]: await importNamespaceAsync(locale, namespace )})
