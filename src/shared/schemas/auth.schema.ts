import { z } from 'zod'
import { useTranslation } from 'react-i18next'

export const EmailSchema = () => {
    const { t } = useTranslation()
    return z.string().email(t('invalid email address'))
}

export const PasswordSchema = () => {
    const { t } = useTranslation()

    return z.string().superRefine((value, ctx) => {
        if (value.length < 8) {
            ctx.addIssue({
                code: z.ZodIssueCode.too_small,
                type: 'string',
                minimum: 8,
                inclusive: true,
                message: t('password must be at least 8 characters long')
            })
        }
        if (!/[a-z]/.test(value)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: t(
                    'password must contain at least one lowercase letter'
                )
            })
        }
        if (!/[A-Z]/.test(value)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: t(
                    'password must contain at least one uppercase letter'
                )
            })
        }
        if (!/[0-9]/.test(value)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: t('password must contain at least one number')
            })
        }
        if (!/[^A-Za-z0-9]/.test(value)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: t(
                    'password must contain at least one special character'
                )
            })
        }
    })
}

export const AuthSchema = () => {
    return z.object({
        email: EmailSchema(),
        password: PasswordSchema()
    })
}
