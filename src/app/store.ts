import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "../features/playersSlice";

const store = configureStore({
    reducer: {
        players: playersSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
