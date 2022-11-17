import { createSlice } from '@reduxjs/toolkit';

export const criptoSlice = createSlice({
    name: 'cripto',
    initialState: {
        criptos: []
    },
    reducers: {
        getListCriptos: (state,  action  ) => {
            state.criptos = action.payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { getListCriptos } = criptoSlice.actions;