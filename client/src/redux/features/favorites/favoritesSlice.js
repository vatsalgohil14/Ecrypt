import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { addActivityData } from "../activity/activitiesSlice"
import * as api from "../../api"

const initialState = {
    favoriteLoginIds: [],
    favoriteCards: [],
    favoriteDocs: [],
}

export const fetchFavoritesData = createAsyncThunk("favorites/fetch", async ({ user_id }, { getState, dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
        const res = await api.fetchFavorites(user_id);
        const { data } = res;
        const cardsDataFav = data[0].cardsFavArray.bankCards.concat(data[0].cardsFavArray.identityCards, data[0].cardsFavArray.licenseCards);
        const loginIdsDataFav = data[0].loginIdsFavArray.reverse()
        const docsDataFav = data[0].docsArrayFavArray.reverse()
        const dataToReturn = {
            cardsDataFav,
            loginIdsDataFav,
            docsDataFav
        }
        return fulfillWithValue(dataToReturn);
    } catch (error) {
        throw rejectWithValue(error);
    }
});

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addToFavLoginsData(state, action) {
            return {
                ...state,
                favoriteLoginIds: action.payload
            }
        },

        addToFavCardsData(state, action) {
            return {
                ...state,
                favoriteCards: [action.payload.card, ...state.favoriteCards]
            }
        },
        addToFavDocsData(state, action) {
            return {
                ...state,
                favoriteDocs: action.payload
                // favoriteDocs: []
            }
        },
        removeFromFavDocsData(state, action) {
            return {
                ...state,
                favoriteDocs: state.favoriteDocs.filter(item => item._id !== action.payload.doc_id)
            }
        },
        removeFromFavCardsData(state, action) {
            return {
                ...state,
                favoriteCards: state.favoriteCards.filter(item => item._id !== action.payload.card_id)
            }
        },

        removeFromFavLoginsData(state, action) {
            return {
                ...state,
                favoriteLoginIds: state.favoriteLoginIds.filter(item => item._id !== action.payload.login_id)
            }
        },
    },

    extraReducers: (builder) => {

        builder.addCase(fetchFavoritesData.fulfilled, (state, action) => {
            return {
                ...state,
                favoriteLoginIds: action.payload.loginIdsDataFav,
                favoriteCards: action.payload.cardsDataFav,
                favoriteDocs: action.payload.docsDataFav,
            }
        })
    }
})

export const { addToFavLoginsData, addToFavCardsData, removeFromFavCardsData, addToFavDocsData, removeFromFavLoginsData, removeFromFavDocsData } = favoritesSlice.actions;
export default favoritesSlice.reducer;
