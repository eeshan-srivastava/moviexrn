import { AppReducer } from '../reducer/appReducer';
import { store } from '../store';
import { ReducerActionType } from '../utils/ReducerUtils';

const resetAppPreferences = () => {
    store.dispatch({
        type: ReducerActionType.RESET_APP_PREFERENCES,
    });
};

const getFavouriteMovies = (): Record<string, any> => {
    const app: AppReducer = store.getState()?.app as any;
    return app?.favouriteMovies;
};

const addMoviesToFavourites = (movies: Record<string, any>) => {
    const currentMovies = getFavouriteMovies();
    const favouriteMovies = { ...currentMovies, ...movies };
    store.dispatch({
        type: ReducerActionType.UPDATE_FAVOURITE_MOVIES,
        payload: {
            favouriteMovies: favouriteMovies,
        },
    });
};

const removeMoviesFromFavourites = (movies: Record<string, any>) => {
    const currentMovies = getFavouriteMovies();
    Object.entries(movies).forEach(([key, value]: [string, any]) => {
        delete currentMovies[key];
    });
    const favouriteMovies = { ...currentMovies };
    store.dispatch({
        type: ReducerActionType.UPDATE_FAVOURITE_MOVIES,
        payload: {
            favouriteMovies: favouriteMovies,
        },
    });
};

export default {
    resetAppPreferences,
    getFavouriteMovies,
    addMoviesToFavourites,
    removeMoviesFromFavourites,
};
