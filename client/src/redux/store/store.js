import { configureStore } from '@reduxjs/toolkit'
import loginsIdSlice from '../features/loginsId/loginsIdSlice'
import cardsSlice from '../features/cards/cardsSlice'
import docsSlice from "../features/docs/docsSlice"
import activitiesSlice from '../features/activity/activitiesSlice'
import favoritesSlice from '../features/favorites/favoritesSlice'
import recentlyAddedSlice from "../features/recentlyAdded/recentlyAddedSlice"
import userSlice from '../features/user/userSlice'
import authSlice from '../features/auth/authSlice'
import searchSlice from '../features/search/searchSlice'
import uiSlice from '../features/ui/uiSlice'

const store = configureStore({
    reducer: {
        loginIds: loginsIdSlice,
        cards: cardsSlice,
        docs: docsSlice,
        activities: activitiesSlice,
        favorites: favoritesSlice,
        recentlyAdded: recentlyAddedSlice,
        auth: authSlice,
        user: userSlice,
        search: searchSlice,
        ui: uiSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store
