import { useForm } from '@tanstack/react-form'
import { useState } from 'react'
import cl from './LoginPage.module.scss'
// eslint-disable-next-line import/no-unresolved
import Logo from '@/shared/assets/images/logo.svg'
// eslint-disable-next-line import/no-unresolved
import Figures from '@/shared/assets/images/figures.svg'
// eslint-disable-next-line import/no-unresolved
import { Button, Checkbox, Input } from '@/shared'
// eslint-disable-next-line import/no-unresolved
import Eye from '@/shared/assets/icons/eye.svg?react'
// eslint-disable-next-line import/no-unresolved
import Hide from '@/shared/assets/icons/hide.svg?react'

export const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    // const URL = '${API_URL}/auth/register'

    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
        // onSubmit: async ({ value }) => {
        //     await fetch(URL, {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             email: value.email,
        //             password: value.password
        //         })
        //     })
        // }
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
                <h2>Sign In to Nova Learn</h2>
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
                        <span>Forgot password?</span>
                    </div>
                    <Button
                        className={cl.button}
                        text="Sign In"
                        variant="secondary"
                    />
                    <h5>I don’t have an account</h5>
                </form>
            </div>
        </div>
    )
}
