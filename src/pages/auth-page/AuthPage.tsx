import { FormAuth } from '@/features/authorization/form-auth/FormAuth'
import { PageLayout } from '@/layout/page-layout/PageLayout'

export const AuthPage = () => {
    return (
        <PageLayout title="Sign Up to Nova Learn">
            <FormAuth />
        </PageLayout>
    )
}
