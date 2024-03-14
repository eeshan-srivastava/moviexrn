import { MovieNowPlayingRC } from '../../../domain/model/movie/MovieNowPlayingRC';
import { MoviePopularRC } from '../../../domain/model/movie/MoviePopularRC';
import { MovieTopRatedRC } from '../../../domain/model/movie/MovieTopRatedRC';
import { MovieUpcomingRC } from '../../../domain/model/movie/MovieUpcomingRC';
import Api from '../Api';
import ApiRoutes from '../ApiRoutes';
import { getRequest, postRequest } from '../ApiUtils';

const getMovieNowPlayingApi = async (params: { requestContent: MovieNowPlayingRC }): Promise<any> => {
    const apiRoute = `${ApiRoutes.movie.nowPlaying}?language=${params.requestContent.langauge}&page=${params.requestContent.page}`
    return new Promise((resolve, reject) => {
        getRequest({
            route: apiRoute,
            axiosClient: Api.authorized_axios_client_v3,
        })
            .then((response) => {
                resolve(response);
            })
            .catch((errorMessage: string) => {
                reject(errorMessage);
            });
    });
};

const getMoviePopularApi = async (params: { requestContent: MoviePopularRC }): Promise<any> => {
    const apiRoute = `${ApiRoutes.movie.popular}/?language=${params.requestContent.langauge}&page=${params.requestContent.page}`
    return new Promise((resolve, reject) => {
        getRequest({
            route: apiRoute,
            axiosClient: Api.authorized_axios_client_v3,
        })
            .then((response) => {
                resolve(response);
            })
            .catch((errorMessage: string) => {
                reject(errorMessage);
            });
    });
};

const getMovieTopRatedApi = async (params: { requestContent: MovieTopRatedRC }): Promise<any> => {
    const apiRoute = `${ApiRoutes.movie.topRated}/?language=${params.requestContent.langauge}&page=${params.requestContent.page}`
    return new Promise((resolve, reject) => {
        getRequest({
            route: apiRoute,
            axiosClient: Api.authorized_axios_client_v3,
        })
            .then((response) => {
                resolve(response);
            })
            .catch((errorMessage: string) => {
                reject(errorMessage);
            });
    });
};

const getMovieUpcomingApi = async (params: { requestContent: MovieUpcomingRC }): Promise<any> => {
    const apiRoute = `${ApiRoutes.movie.upcoming}/?language=${params.requestContent.langauge}&page=${params.requestContent.page}`
    return new Promise((resolve, reject) => {
        getRequest({
            route: apiRoute,
            axiosClient: Api.authorized_axios_client_v3,
        })
            .then((response) => {
                resolve(response);
            })
            .catch((errorMessage: string) => {
                reject(errorMessage);
            });
    });
};

export default {
    getMovieNowPlayingApi,
    getMoviePopularApi,
    getMovieTopRatedApi,
    getMovieUpcomingApi
};
