export const onSubmitForm = async (
    url: string,
    formValues: { email?: string; password?: string },
    errorCallback: (errorObj: { email?: string; password?: string }) => void,
    saveTokenCallback: (tokens: {
        accessToken: string
        refreshToken: string
    }) => void
): Promise<void> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })

        const userData = await response.json()

        if (userData?.message) {
            errorCallback(userData.message)
            return
        }

        if (userData?.accessToken && userData?.refreshToken) {
            saveTokenCallback({
                accessToken: userData.accessToken,
                refreshToken: userData.refreshToken
            })
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err)
    }
}
