import { createSlice } from '@reduxjs/toolkit';
import { EAction } from '../iterfaces';

export interface IRootState{
    selectedAction: EAction;
}

/**
 * initial state
 */
const initialState: IRootState = {
    selectedAction: EAction.ImageSize,
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