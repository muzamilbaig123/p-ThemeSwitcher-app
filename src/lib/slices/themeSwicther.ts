import { createSlice } from "@reduxjs/toolkit";

type themeSwitHandType = {
    isDarkMode: boolean
}

const themeSwitHand:themeSwitHandType = {
    isDarkMode: false
}

const themeSwitcher = createSlice({
    name: "Theme Switcher Application",
    initialState: themeSwitHand,
    reducers: {
        switcher: (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
});


export const {switcher} = themeSwitcher.actions;
export default themeSwitcher.reducer