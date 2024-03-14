import { movieRepository } from "../../data/repository";
import { MovieNowPlayingContent } from "../model/movie/MovieNowPlayingContent";
import { MovieNowPlayingRC } from "../model/movie/MovieNowPlayingRC";
import { MoviePopularContent } from "../model/movie/MoviePopularContent";
import { MoviePopularRC } from "../model/movie/MoviePopularRC";
import { MovieTopRatedContent } from "../model/movie/MovieTopRatedContent";
import { MovieTopRatedRC } from "../model/movie/MovieTopRatedRC";
import { MovieUpcomingContent } from "../model/movie/MovieUpcomingContent";
import { MovieUpcomingRC } from "../model/movie/MovieUpcomingRC";


const getMovieNowPlaying = async (params: { requestContent: MovieNowPlayingRC }): Promise<MovieNowPlayingContent> => {
    return new Promise((resolve, reject) => {
        movieRepository
            .getMovieNowPlayingApiCall(params)
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const getMoviePopular = async (params: { requestContent: MoviePopularRC }): Promise<MoviePopularContent> => {
    return new Promise((resolve, reject) => {
        movieRepository
            .getMoviePopularApiCall(params)
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const getMovieTopRated= async (params: { requestContent: MovieTopRatedRC }): Promise<MovieTopRatedContent> => {
    return new Promise((resolve, reject) => {
        movieRepository
            .getMovieTopRatedApiCall(params)
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const getMovieUpcoming= async (params: { requestContent: MovieUpcomingRC }): Promise<MovieUpcomingContent> => {
    return new Promise((resolve, reject) => {
        movieRepository
            .getMovieUpcomingApiCall(params)
            .then((response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default {
    getMovieNowPlaying,
    getMoviePopular,
    getMovieTopRated,
    getMovieUpcoming
};
