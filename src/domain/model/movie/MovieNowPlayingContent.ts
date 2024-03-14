import { parseProtection } from '../../../utils/AppUtils';

interface MovieNowPlayingItemContent {
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

interface MovieNowPlayingContent {
   dates: {
        maximun: string,
        minimum: string
   },
   page:number,
   results: Array<MovieNowPlayingItemContent>,
   total_pages: number,
   total_results: number
}

const toMovieNowPlayingContent = (data: any): MovieNowPlayingContent => {
    return parseProtection(() => {
        return data as MovieNowPlayingContent;
    });
};

export { type MovieNowPlayingContent, type MovieNowPlayingItemContent, toMovieNowPlayingContent };
