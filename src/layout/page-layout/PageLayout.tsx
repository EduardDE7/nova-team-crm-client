import { ReactNode } from 'react'
import cl from './PageLayout.module.scss'
import Logo from '@/shared/assets/images/logo.svg'
import Figures from '@/shared/assets/images/figures.svg'

interface PageLayoutProps {
    title: string
    children: ReactNode
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
    return (
        <div className={cl.root}>
            <div className={cl.logo}>
                <img
                    src={Logo}
                    alt="logo"
                />
                <h1>From Zero to Hero with Us</h1>
                <img
                    src={Figures}
                    alt="figures"
                />
            </div>
            <div className={cl.auth}>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}
