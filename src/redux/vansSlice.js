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
		filters: [],
		favorites: [],
		searchTriggered: false,
		filteredVans: [],
		status: "idle",
		error: null,
	},
	reducers: {
		setFilter(state, action) {
			const feature = action.payload;
			if (state.filters.includes(feature)) {
				state.filters = state.filters.filter((f) => f !== feature);
			} else {
				state.filters.push(feature);
			}
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
		triggerSearch(state) {
			state.searchTriggered = true;
			state.filteredVans = state.all.filter((van) =>
				state.filters.every((filter) => van[filter])
			);
		},
		resetSearch(state) {
			state.searchTriggered = false;
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

export const { setFilter, toggleFavorite, triggerSearch, resetSearch } =
	vansSlice.actions;
export default vansSlice.reducer;
