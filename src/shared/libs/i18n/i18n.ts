import i18n from 'i18next'
import cookie from 'js-cookie'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json' // eslint-disable-line import/no-internal-modules
import ru from './locales/ru.json' // eslint-disable-line import/no-internal-modules

export const setupI18n = () => {
    const getLanguage = () => {
        const languages = ['en', 'ru']

        const languageFromCookie = cookie.get('language') || ''

        if (languages.includes(languageFromCookie)) {
            return languageFromCookie
        }

        cookie.set('language', 'en')

        return 'en'
    }

    i18n.use(initReactI18next).init({
        resources: { en, ru },
        lng: getLanguage()
    })
}
