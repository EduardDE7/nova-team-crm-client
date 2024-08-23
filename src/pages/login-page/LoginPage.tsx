import { PageLayout } from '@/widgets/auth-layout'
import { FormLogin } from '@/widgets/auth-layout/form-login'

export const LoginPage = () => {
    return (
        <PageLayout title="Sign In to Nova Learn">
            <FormLogin />
        </PageLayout>
    )
}
