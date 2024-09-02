import { PageLayout, FormAuth } from '@/widgets/auth-layout/index'

export const LoginPage = () => {
    return (
        <PageLayout title="Sign In to Nova Learn">
            <FormAuth
                span="Forgot password?"
                redirect="/auth"
            />
        </PageLayout>
    )
}
