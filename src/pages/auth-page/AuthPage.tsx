import { useForm } from '@tanstack/react-form'
import { useState } from 'react'
import cl from './AuthPage.module.scss'
import Logo from '@/shared/assets/images/logo.svg'
import Figures from '@/shared/assets/images/figures.svg'
import { Button, Checkbox, Input } from '@/shared'
import Eye from '@/shared/assets/icons/eye.svg?react'
import Hide from '@/shared/assets/icons/hide.svg?react'
import { useSetIsAuthorizedHandler } from '@/shared/api/is-authorized'

export const AuthPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    const URL = `${import.meta.env.VITE_API_URL}/auth/register`
    const setIsAuthorized = useSetIsAuthorizedHandler()

    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        onSubmit: async ({ value }) => {
            try {
                const response = await fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: value.email,
                        password: value.password
                    })
                })
                const userData = await response.json()

                if (userData.message === 'This email already exist') {
                    throw new Error('This email already exist')
                    return
                }

                localStorage.setItem('accessToken', userData.accessToken)
                localStorage.setItem('refreshToken', userData.refreshToken)
                setIsAuthorized(true)
                form.reset()
            } catch (err) {
                // eslint-disable-next-line no-console
                console.log(err)
            }
        }
    })

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
                <h2>Sign Up to Nova Learn</h2>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        e.stopPropagation()
                        form.handleSubmit()
                    }}>
                    <form.Field
                        name="email"
                        children={field => (
                            <Input
                                placeholder="Email address"
                                name={field.name}
                                value={field.state.value}
                                onChange={e =>
                                    field.handleChange(e.target.value)
                                }
                            />
                        )}
                    />
                    <form.Field
                        name="password"
                        children={field => (
                            <Input
                                type={!isVisible ? 'password' : 'text'}
                                placeholder="Password"
                                name={field.name}
                                value={field.state.value}
                                onChange={e =>
                                    field.handleChange(e.target.value)
                                }
                                rightIcon={
                                    isVisible ? (
                                        <Hide
                                            className={cl.hide}
                                            onClick={() =>
                                                setIsVisible(!isVisible)
                                            }
                                        />
                                    ) : (
                                        <Eye
                                            className={cl.eye}
                                            onClick={() =>
                                                setIsVisible(!isVisible)
                                            }
                                        />
                                    )
                                }
                            />
                        )}
                    />
                    <div className={cl.subtitle}>
                        <Checkbox checked />
                        <span>Remember me</span>
                    </div>
                    <Button
                        className={cl.button}
                        text="Sign Up"
                        variant="secondary"
                    />
                    <h5>Already have an account? Sign In</h5>
                </form>
            </div>
        </div>
    )
}
