import { createSlice } from '@reduxjs/toolkit';
import { EAction, EAnimationType, IStripe } from '../iterfaces';
import { newId } from 'mz-math';

export interface IRootState{
    selectedAction: EAction;

    svgWidth: number;
    svgHeight: number;

    lineRotation: number;
    animationType: EAnimationType;
    animationDuration: number;
    stripes: IStripe[];
}

/**
 * initial state
 */
const initialState: IRootState = {
    selectedAction: EAction.ImageSize,

    svgWidth: 500,
    svgHeight: 270,

    /*out: './out/example.svg',  // the pass to the output file

    bgColor: '#fff', // SVG background color*/
    lineRotation: 45, // stripes rotation angle in degrees

    // optional animation -----------
    animationType: EAnimationType.Linear,
    animationDuration: 500, // seconds

    // the list of stripes ----------
    stripes: [
        {
            color: '#505050',
            size: 20,
            id: newId(),
        },
        {
            color: '#92CBFA',
            size: 10,
            id: newId(),
        },
        {
            color: '#AB3C83',
            size: 20,
            id: newId(),
        },
        {
            color: '#ffffff',
            size: 10,
            id: newId(),
        }
    ]
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