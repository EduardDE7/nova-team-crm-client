import { FormLogin } from '@/features/authorization/form-login/FormLogin'
import { PageLayout } from '@/layout/page-layout/PageLayout'

export const LoginPage = () => {
    return (
        <PageLayout title="Sign In to Nova Learn">
            <FormLogin />
        </PageLayout>
    )
}
