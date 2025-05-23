import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVans = createAsyncThunk("vans/fetchVans", async () => {
	const response = await axios.get(
		"https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
	);
	return response.data.items;
});

const vansSlice = createSlice({
	name: "vans",
	initialState: {
		all: [],
		filters: {
			type: "all",
		},
		favorites: [],
		status: "idle",
		error: null,
	},
	reducers: {
		setFilter(state, action) {
			state.filters.type = action.payload;
		},
		toggleFavorite(state, action) {
			const id = action.payload;
			const index = state.favorites.indexOf(id);
			if (index === -1) {
				state.favorites.push(id);
			} else {
				state.favorites.splice(index, 1);
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchVans.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchVans.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.all = action.payload;
			})
			.addCase(fetchVans.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export const { setFilter, toggleFavorite } = vansSlice.actions;
export default vansSlice.reducer;
