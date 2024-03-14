import { parseProtection } from '../../../utils/AppUtils';

interface MovieUpcomingItemContent {
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

interface MovieUpcomingContent {
    dates: {
        maximun: string,
        minimum: string
    },
    page:number,
    results: Array<MovieUpcomingItemContent>,
    total_pages: number,
    total_results: number
}

const toMovieUpcomingContent = (data: any): MovieUpcomingContent => {
    return parseProtection(() => {
        return data as MovieUpcomingContent;
    });
};

export { type MovieUpcomingContent, type MovieUpcomingItemContent, toMovieUpcomingContent };
