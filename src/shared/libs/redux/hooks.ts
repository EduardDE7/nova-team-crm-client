import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { TDispatch, TStore } from '@/app/store'

export const useAppDispatch: () => TDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector
