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


const toMovieItemBean = (data: any): MovieItemBean => {
    return parseProtection(() => {
        return data as MovieItemBean;
    });
};

export { type MovieItemBean, toMovieItemBean };
