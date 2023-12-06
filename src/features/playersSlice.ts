import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numberOfPlayers: 4,
    playersInfo: [
        { id: 1, name: "", score: 0 },
        { id: 2, name: "", score: 0 },
        { id: 3, name: "", score: 0 },
        { id: 4, name: "", score: 0 },
    ],
};

export const playersSlice = createSlice({
    name: "players",
    initialState,
    reducers: {
        setNumberOfPlayers: (state, action) => {
            state.numberOfPlayers = action.payload;
        },
        setPlayerName: (state, action) => {
            const { id, name } = action.payload;
            const player = state.playersInfo.find((p) => p.id === id);
            if (player) player.name = name;
        },

        incrementPlayerScore: (state, action) => {
            const id = action.payload;
            const player = state.playersInfo.find((p) => p.id === id);
            if (player) player.score++;
        },

        decrementPlayerScore: (state, action) => {
            const id = action.payload;
            const player = state.playersInfo.find((p) => p.id === id);
            if (player && player?.score > 0) player.score--;
        },
    },
});

export const { setNumberOfPlayers, setPlayerName, incrementPlayerScore, decrementPlayerScore } = playersSlice.actions;
export default playersSlice.reducer;
