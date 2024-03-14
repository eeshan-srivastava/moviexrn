import { MovieNowPlayingContent, toMovieNowPlayingContent } from "../../domain/model/movie/MovieNowPlayingContent";
import { MovieNowPlayingRC } from "../../domain/model/movie/MovieNowPlayingRC";
import { MoviePopularContent, toMoviePopularContent } from "../../domain/model/movie/MoviePopularContent";
import { MoviePopularRC } from "../../domain/model/movie/MoviePopularRC";
import { MovieTopRatedContent, toMovieTopRatedContent } from "../../domain/model/movie/MovieTopRatedContent";
import { MovieTopRatedRC } from "../../domain/model/movie/MovieTopRatedRC";
import { MovieUpcomingContent, toMovieUpcomingContent } from "../../domain/model/movie/MovieUpcomingContent";
import { MovieUpcomingRC } from "../../domain/model/movie/MovieUpcomingRC";
import { movieApi } from "../network/apis";


const getMovieNowPlayingApiCall = async (params: { requestContent: MovieNowPlayingRC }): Promise<MovieNowPlayingContent> => {
    return new Promise((resolve, reject) => {
        movieApi
            .getMovieNowPlayingApi(params)
            .then((response) => {
                resolve(toMovieNowPlayingContent(response));
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const getMoviePopularApiCall = async (params: { requestContent: MoviePopularRC }): Promise<MoviePopularContent> => {
    return new Promise((resolve, reject) => {
        movieApi
            .getMoviePopularApi(params)
            .then((response) => {
                resolve(toMoviePopularContent(response));
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const getMovieTopRatedApiCall = async (params: { requestContent: MovieTopRatedRC }): Promise<MovieTopRatedContent> => {
    return new Promise((resolve, reject) => {
        movieApi
            .getMovieTopRatedApi(params)
            .then((response) => {
                resolve(toMovieTopRatedContent(response));
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const getMovieUpcomingApiCall = async (params: { requestContent: MovieUpcomingRC }): Promise<MovieUpcomingContent> => {
    return new Promise((resolve, reject) => {
        movieApi
            .getMovieUpcomingApi(params)
            .then((response) => {
                resolve(toMovieUpcomingContent(response));
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default {
    getMovieNowPlayingApiCall,
    getMoviePopularApiCall,
    getMovieTopRatedApiCall,
    getMovieUpcomingApiCall
};
