import { TypedUseSelectorHook } from 'react-redux';
declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
    root: import("./root-slice").IRootState;
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    root: import("./root-slice").IRootState;
}>, import("redux").AnyAction>]>;
export declare const rootActions: import("@reduxjs/toolkit").CaseReducerActions<{
    main(state: import("immer/dist/internal").WritableDraft<import("./root-slice").IRootState>, action: {
        payload: any;
        type: string;
    }): any;
}, "root">;
export default store;
/**
 * Infer the `RootState` and `AppDispatch` types from the store itself
 * https://redux.js.org/recipes/usage-with-typescript
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<import("redux").CombinedState<{
    root: import("./root-slice").IRootState;
}>, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
