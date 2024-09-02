import { FormAuth, PageLayout } from '@/widgets/auth-layout/index'

export const AuthPage = () => {
    return (
        <PageLayout title="Sign Up to Nova Learn">
            <FormAuth redirect="/login" />
        </PageLayout>
    )
}
