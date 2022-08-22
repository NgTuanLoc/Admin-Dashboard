import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	screenSize: undefined,
	currentColor: '#03C9D7',
	currentMode: 'Light',
	themeSettings: false,
	activeMenu: true,
	isClicked: {
		chat: false,
		cart: false,
		userProfile: false,
		notification: false,
	},
};

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		setMode: (state, { payload }) => {
			state.currentMode = payload;
			localStorage.setItem('themeMode', payload);
		},
		setColor: (state, { payload }) => {
			state.currentColor(payload);
			localStorage.setItem('colorMode', payload);
		},
		handleClick: (state, { payload }) => {
			state.isClicked = {
				...state.isClicked,
				[payload]: true,
			};
		},
	},
});

export default adminSlice.reducer;
