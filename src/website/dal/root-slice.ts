import { createSlice } from '@reduxjs/toolkit';

export interface IRootState{

}

/**
 * initial state
 */
const initialState: IRootState = {

};

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {

        main(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    }
});

export default rootSlice;