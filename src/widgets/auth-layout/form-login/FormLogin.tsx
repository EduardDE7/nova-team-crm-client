import { useForm } from '@tanstack/react-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import cl from '../form-auth/FormAuth.module.scss'
import { Button, Checkbox, Input } from '@/shared'
import Eye from '@/shared/assets/icons/eye.svg?react'
import Hide from '@/shared/assets/icons/hide.svg?react'
import { useSetIsAuthorizedHandler } from '@/shared/api/is-authorized'

export const FormLogin = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isChecked, setIsChecked] = useState(true)
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

                if (userData.message) {
                    throw new Error('This email already exist')
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
        <form
            onSubmit={e => {
                e.preventDefault()
                e.stopPropagation()
                void form.handleSubmit()
            }}>
            <form.Field
                name="email"
                children={field => (
                    <Input
                        placeholder="Email address"
                        name={field.name}
                        value={field.state.value}
                        onChange={e => field.handleChange(e.target.value)}
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
                        onChange={e => field.handleChange(e.target.value)}
                        rightIcon={
                            isVisible ? (
                                <Hide
                                    className={cl.hide}
                                    onClick={() => setIsVisible(!isVisible)}
                                />
                            ) : (
                                <Eye
                                    className={cl.eye}
                                    onClick={() => setIsVisible(!isVisible)}
                                />
                            )
                        }
                    />
                )}
            />
            <div className={cl.subtitle}>
                <Checkbox
                    checked={isChecked}
                    onChange={() => {
                        setIsChecked(!isChecked)
                        // логика работы с JWT
                    }}
                />
                <span>Remember me</span>
                <span className="ml-auto cursor-pointer">Forgot password?</span>
            </div>
            <Button
                className={cl.button}
                text="Sing In"
                variant="secondary"
            />
            <Link
                className={cl.link}
                to={'/auth'}>
                "I don’t have an account"
            </Link>
        </form>
    )
}
