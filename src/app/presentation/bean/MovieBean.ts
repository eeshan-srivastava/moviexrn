import { MovieNowPlayingItemContent } from '../../../domain/model/movie/MovieNowPlayingContent';
import { MoviePopularItemContent } from '../../../domain/model/movie/MoviePopularContent';
import { MovieTopRatedItemContent } from '../../../domain/model/movie/MovieTopRatedContent';
import { MovieUpcomingItemContent } from '../../../domain/model/movie/MovieUpcomingContent';
import { parseProtection } from '../../../utils/AppUtils';

interface MovieItemBean {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


const toMovieItemBean = (data: MovieNowPlayingItemContent | MoviePopularItemContent | MovieTopRatedItemContent | MovieUpcomingItemContent): MovieItemBean => {
    return parseProtection(() => {
        return {
            adult: data.adult,
            backdrop_path: 'https://image.tmdb.org/t/p/w500'+data.backdrop_path,
            genre_ids: data.genre_ids,
            id: data.id,
            original_language: data.original_language,
            original_title: data.original_title,
            overview: data.overview,
            popularity: data.popularity,
            poster_path: 'https://image.tmdb.org/t/p/w500'+data.poster_path,
            release_date: data.release_date,
            title: data.title,
            video: data.video,
            vote_average: data.vote_average,
            vote_count: data.vote_count
        }
    });
};

export { type MovieItemBean, toMovieItemBean };
