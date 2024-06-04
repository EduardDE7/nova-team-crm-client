import cookie from 'js-cookie'

import { themesArr } from '@/shared'

export const getThemeFromCookie = () => {
    try {
        const themeFromCookie = cookie.get('theme')

        if (themeFromCookie && themesArr.includes(themeFromCookie)) {
            return themeFromCookie
        }

        const matchMedia = window.matchMedia('(prefers-color-scheme: light)')

        if (!matchMedia.matches) {
            return 'dark'
        }

        return 'light'
    } catch (e) {
        return 'light'
    }
}
