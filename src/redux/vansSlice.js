import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch vans from API
export const fetchVans = createAsyncThunk("vans/fetchVans", async () => {
	const response = await axios.get(
		"https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
	);
	return response.data.items;
});

// Helper function to load favorites from local storage
const loadFavoritesFromLocalStorage = () => {
	const favorites = localStorage.getItem("favorites");
	return favorites ? JSON.parse(favorites) : [];
};

// Helper function to save favorites to local storage
const saveFavoritesToLocalStorage = (favorites) => {
	localStorage.setItem("favorites", JSON.stringify(favorites));
};

const vansSlice = createSlice({
	name: "vans",
	initialState: {
		all: [],
		filters: [],
		favorites: loadFavoritesFromLocalStorage(),
		searchTriggered: false,
		filteredVans: [],
		status: "idle",
		error: null,
	},
	reducers: {
		setFilter(state, action) {
			const feature = action.payload;
			const vehicleTypes = ["panelTruck", "fullyIntegrated", "alcove"];

			// Clear error when filters are updated
			state.error = null;

			if (vehicleTypes.includes(feature)) {
				if (state.filters.includes(feature)) {
					state.filters = state.filters.filter((f) => f !== feature);
				} else {
					state.filters = state.filters.filter(
						(f) => !vehicleTypes.includes(f)
					);
					state.filters.push(feature);
				}
			} else {
				if (state.filters.includes(feature)) {
					state.filters = state.filters.filter((f) => f !== feature);
				} else {
					state.filters.push(feature);
				}
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
			saveFavoritesToLocalStorage(state.favorites);
		},
		triggerSearch(state) {
			state.searchTriggered = true;
			state.filteredVans = state.all.filter((van) => {
				return state.filters.every((filter) => {
					return (
						van[filter] ||
						van.form === filter ||
						van.location === filter
					);
				});
			});

			// Set error if no vans match the filters
			if (state.filteredVans.length === 0 && state.filters.length > 0) {
				state.error = "No matching vans for your filter.";
			} else {
				state.error = null; // Clear error if items are found
			}
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
