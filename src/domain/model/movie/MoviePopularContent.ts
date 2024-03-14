import { parseProtection } from '../../../utils/AppUtils';

interface MoviePopularItemContent {
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

interface MoviePopularContent {
   page:number,
   results: Array<MoviePopularItemContent>,
   total_pages: number,
   total_results: number
}

const toMoviePopularContent = (data: any): MoviePopularContent => {
    return parseProtection(() => {
        return data as MoviePopularContent;
    });
};

export { type MoviePopularContent, type MoviePopularItemContent, toMoviePopularContent };
