import { parseProtection } from '../../../utils/AppUtils';

interface MovieTopRatedItemContent {
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

interface MovieTopRatedContent {
   page:number,
   results: Array<MovieTopRatedItemContent>,
   total_pages: number,
   total_results: number
}

const toMovieTopRatedContent = (data: any): MovieTopRatedContent => {
    return parseProtection(() => {
        return data as MovieTopRatedContent;
    });
};

export { type MovieTopRatedContent, type MovieTopRatedItemContent, toMovieTopRatedContent };
