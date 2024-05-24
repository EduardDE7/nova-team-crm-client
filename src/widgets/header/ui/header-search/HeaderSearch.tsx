import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Icon } from '@/shared'

import cl from './HeaderSearch.module.scss'

export const HeaderSearch = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const { t } = useTranslation()

    return (
        <div className={cl.root}>
            <Icon
                name="Search"
                className={cl.root__icon}
            />
            <input
                type="text"
                className={cl.root__input}
                placeholder={t('search-course')}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
        </div>
    )
}
