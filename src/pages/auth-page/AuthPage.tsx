import cl from './AuthPage.module.scss'
import Logo from '@/shared/assets/images/logo.svg'
import Figures from '@/shared/assets/images/figures.svg'
import { Button, Checkbox, Input } from '@/shared'
import Eye from '@/shared/assets/icons/eye.svg?react'

export const AuthPage = () => {
    return (
        <div className={cl.root}>
            <div className={cl.root__logo}>
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
            <div className={cl.root__auth}>
                <h2>Sign Up to Nova Learn</h2>
                <Input placeholder="Email address" />
                <Input
                    placeholder="Password"
                    rightIcon={<Eye className={cl.root__auth__input__icon} />}
                />
                <div className={cl.root__auth__subtitle}>
                    <Checkbox checked />
                    <span>Remember me</span>
                </div>

                <Button
                    className={cl.root__auth__button}
                    text="Sign In"
                    variant="secondary"
                />
                <h5>Already have an account ? Sign In</h5>
            </div>
        </div>
    )
}
