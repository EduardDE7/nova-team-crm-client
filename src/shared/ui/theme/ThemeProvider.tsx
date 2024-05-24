import cookie from 'js-cookie'

import { type ReactNode, useEffect } from 'react'

import { changeThemeAction, useAppDispatch, useAppSelector } from '@/shared'

import { getThemeFromCookie } from './utils'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const { theme } = useAppSelector(store => store.theme)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(changeThemeAction(getThemeFromCookie()))
    }, []) // eslint-disable-line

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
        cookie.set('theme', theme)
    }, [theme])

    return <>{children}</>
}
