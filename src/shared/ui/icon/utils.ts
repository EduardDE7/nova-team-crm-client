/// <reference types="vite-plugin-svgr/client" />

/* eslint-disable import/no-internal-modules */
import Add from '@/shared/assets/icons/add.svg?react'
import Arrow from '@/shared/assets/icons/arrow.svg?react'
import Calendar from '@/shared/assets/icons/calendar.svg?react'
import CalendarGray from '@/shared/assets/icons/calendarGray.svg?react'
import Chevron from '@/shared/assets/icons/chevron.svg?react'
import Close from '@/shared/assets/icons/close.svg?react'
import Computer from '@/shared/assets/icons/computer.svg?react'
import Connected from '@/shared/assets/icons/connected-apps.svg?react'
import Course from '@/shared/assets/icons/course-icon.svg?react'
import Courses from '@/shared/assets/icons/courses.svg?react'
import DarkMode from '@/shared/assets/icons/dark-mode.svg?react'
import Dashboard from '@/shared/assets/icons/dashboard.svg?react'
import Done from '@/shared/assets/icons/done.svg?react'
import Edit from '@/shared/assets/icons/edit.svg?react'
import InfoPortal from '@/shared/assets/icons/infoPortal.svg?react'
import LightMode from '@/shared/assets/icons/light-mode.svg?react'
import Logout from '@/shared/assets/icons/logout.svg?react'
import Messenger from '@/shared/assets/icons/messenger.svg?react'
import More from '@/shared/assets/icons/more.svg?react'
import Notification from '@/shared/assets/icons/notifications.svg?react'
import Payments from '@/shared/assets/icons/payments.svg?react'
import Safety from '@/shared/assets/icons/safety.svg?react'
import Search from '@/shared/assets/icons/search.svg?react'
import Settings from '@/shared/assets/icons/settings.svg?react'
import Teachers from '@/shared/assets/icons/teachers.svg?react'

export const icons = {
	Settings,
	Notification,
	Add,
	Edit,
	Chevron,
	Search,
	Done,
	Safety,
	Course,
	Computer,
	Calendar,
	CalendarGray,
	Dashboard,
	Courses,
	Teachers,
	Messenger,
	InfoPortal,
	Logout,
	Arrow,
	Connected,
	Payments,
	More,
	Close,
	DarkMode,
	LightMode
}

export type IconName = keyof typeof icons
export const getIcon = (name: IconName) => icons[name]
