import { z } from 'zod'

// eslint-disable-next-line
import { useTranslation } from 'react-i18next'

export const AuthSchema = () => {
	const { t } = useTranslation()

	return z.object({
		email: z.string().email(t('invalid_email_address')),
		password: z
			.string()
			.min(8, t('password_must_be_at_least_8_characters_long'))
	})
}
