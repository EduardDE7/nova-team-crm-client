import { useForm } from '@tanstack/react-form'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { onSubmitForm } from '../form-logic/onSubmitForm'
import cl from './FormAuth.module.scss'
import { Button, Checkbox, Input } from '@/shared'

export const FormAuth = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isChecked, setIsChecked] = useState(true)
    const [inputError, setInputError] = useState<{
        email?: string
        password?: string
    }>({})
    const URL = `${import.meta.env.VITE_API_URL}/auth/register`

    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        onSubmit: async ({ value: { email, password } }) => {
            await onSubmitForm(
                URL,
                { email, password },
                setInputError,
                tokensObj => {
                    localStorage.setItem('accessToken', tokensObj.accessToken)
                    localStorage.setItem('refreshToken', tokensObj.refreshToken)
                    form.reset()
                }
            )
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
                            setInputError(prev => ({ ...prev, email: '' }))
                        }}
                        error={inputError.email}
                    />
                )}
            />

            <form.Field
                name="password"
                children={field => (
                    <Input
                        type={!isVisible ? 'password' : 'text'}
                        placeholder="Password"
                        value={field.state.value}
                        onChange={e => {
                            field.handleChange(e.target.value)
                            setInputError(prev => ({ ...prev, password: '' }))
                        }}
                        error={inputError.password}
                        rightIcon={
                            <span
                                onClick={() => setIsVisible(prev => !prev)}
                                className={
                                    isVisible ? cl.text : cl.password
                                }></span>
                        }
                    />
                )}
            />
            <label className={cl.subtitle}>
                <Checkbox
                    checked={isChecked}
                    onChange={() => {
                        setIsChecked(prev => !prev)
                        //'Remember me' logic
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
