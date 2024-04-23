import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type TThemeStore = {
	theme: string
}

const initialState: TThemeStore = {
	theme: 'light'
}

const themeSlice = createSlice({
	initialState,
	name: 'theme',
	reducers: {
		changeThemeAction: (state, action: PayloadAction<string>) => {
			state.theme = action.payload
		}
	}
})

export const theme = themeSlice.reducer
export const { changeThemeAction } = themeSlice.actions
