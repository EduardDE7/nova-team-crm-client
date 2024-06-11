import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IsAuthorizedStore {
    isAuthorized: boolean
    setIsAuthorized: (value: boolean) => void
}

const useIsAuthorizedStore = create<IsAuthorizedStore>()(
    devtools(
        persist(
            set => ({
                isAuthorized: false,
                setIsAuthorized: (value: boolean) =>
                    set(() => ({ isAuthorized: value }))
            }),
            {
                name: 'is-authorized'
            }
        )
    )
)

export const useIsAuthorizedValue = (): IsAuthorizedStore['isAuthorized'] => useIsAuthorizedStore(state => state.isAuthorized)

export const useSetIsAuthorizedHandler = () => {
    const { setIsAuthorized } = useIsAuthorizedStore()
    return (value: boolean) => setIsAuthorized(value)
}
