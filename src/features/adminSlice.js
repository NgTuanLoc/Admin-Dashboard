import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: '',
};

const adminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		test: {},
	},
});

export default adminSlice.reducer;
