import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from './reducers/ui.reducers';
import * as fromAuth from './reducers/auth.reducer';
//import * as reducers from './reducers';

export interface AppState {
    ui: fromUI.State;
    auth: fromAuth.AuthState; 
}

export const appReducers: ActionReducerMap<AppState> = {
    //@ts-ignore
    ui: fromUI.uiReducers,
    //@ts-ignore
    auth: fromAuth.authReducer, 
};
