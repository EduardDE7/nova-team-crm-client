import { z } from 'zod'
import { useTranslation } from 'react-i18next'

export const EmailSchema = () => {
    const { t } = useTranslation()
    return z.string().email(t('invalid email address'))
}

export const PasswordSchema = () => {
    const { t } = useTranslation()

    return z
        .string()
        .min(8, t('password must be at least 8 characters long'))
        .refine(value => /[a-z]/.test(value), {
            message: t('password must contain at least one lowercase letter')
        })
        .refine(value => /[A-Z]/.test(value), {
            message: t('password must contain at least one uppercase letter')
        })
        .refine(value => /[0-9]/.test(value), {
            message: t('password must contain at least one number')
        })
        .refine(value => /[^A-Za-z0-9]/.test(value), {
            message: t('password must contain at least one special character')
        })
}

export const AuthSchema = () => {
    return z.object({
        email: EmailSchema(),
        password: PasswordSchema()
    })
}
