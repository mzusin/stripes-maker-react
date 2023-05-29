import { EAction, EAnimationType, IStripe } from '../iterfaces';
export interface IRootState {
    selectedAction: EAction;
    svgWidth: number;
    svgHeight: number;
    svgBgColor: string;
    lineRotation: number;
    animationType: EAnimationType;
    animationDuration: number;
    stripes: IStripe[];
}
declare const rootSlice: import("@reduxjs/toolkit").Slice<IRootState, {
    main(state: import("immer/dist/internal").WritableDraft<IRootState>, action: {
        payload: any;
        type: string;
    }): any;
}, "root">;
export default rootSlice;
