import { ReducerAction, ReducerActionType } from '../utils/ReducerUtils';

export interface AppReducer {
    favouriteMovies: Record<string, any>
}

const INITIAL_STATE: AppReducer = {
    favouriteMovies : {}
};

const appReducer = (state: AppReducer = INITIAL_STATE, action: ReducerAction) => {
    switch (action?.type) {
        case ReducerActionType.UPDATE_FAVOURITE_MOVIES:
            return {
                ...state,
                favouriteMovies:  action?.payload?.favouriteMovies,
            };
        case ReducerActionType.RESET_APP_PREFERENCES:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default appReducer;
