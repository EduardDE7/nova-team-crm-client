import { useForm } from '@tanstack/react-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import cl from './FormAuth.module.scss'
import { Button, Checkbox, Input } from '@/shared'
import Eye from '@/shared/assets/icons/eye.svg?react'
import Hide from '@/shared/assets/icons/hide.svg?react'
import { useSetIsAuthorizedHandler } from '@/shared/api/is-authorized'

export const FormAuth = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isChecked, setIsChecked] = useState(true)
    const [inputError, setInputError] = useState<string[]>([])
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

                if (userData?.message?.length) {
                    setInputError(userData.message)
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
                        onChange={e => {
                            field.handleChange(e.target.value)
                            setInputError([])
                        }}
                        error={inputError.find(error =>
                            error.includes('email')
                        )}
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
                        onChange={e => {
                            field.handleChange(e.target.value)
                            setInputError([])
                        }}
                        error={inputError.find(error =>
                            error.includes('password')
                        )}
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
            <label className={cl.subtitle}>
                <Checkbox
                    checked={isChecked}
                    onChange={() => {
                        setIsChecked(!isChecked)
                        // логика работы с JWT
                    }}
                />
                <span>Remember me</span>
            </label>
            <Button
                className={cl.button}
                text="Sing Up"
                variant="secondary"
            />
            <Link
                className={cl.link}
                to={'/login'}>
                {'Already have an account ? Sign In'}
            </Link>
        </form>
    )
}
