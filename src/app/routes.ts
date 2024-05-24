import {
    managerRoutes,
    mentorRoutes,
    studentRoutes,
    unLoginRoutes
} from './router'
import type { TRouteItem } from './router/types'

type TRole = 'Mentor' | 'Student' | 'Manager' | null

const ROLE: TRole = 'Mentor'

const getRoutesByRole = (role: TRole): TRouteItem[] => {
    switch (role) {
        case 'Manager':
            return managerRoutes
        case 'Mentor':
            return mentorRoutes
        case 'Student':
            return studentRoutes
        default:
            return unLoginRoutes
    }
}

export const routes = getRoutesByRole(ROLE)
