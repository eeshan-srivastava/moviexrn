import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import SafeArea from '../widgets/SafeArea';
import colorCode from '../../../resources/colors/colorCode';
import { FlashList } from '@shopify/flash-list';
import { MovieItemBean, toMovieItemBean } from '../bean/MovieBean';
import { PaginationStateType } from '../../utils/PaginationUtils';
import { PageStateType } from '../widgets/pageState/PageStateUtils';
import strings from '../../../resources/strings/strings';
import MovieItemView from '../movie/MovieItemView';
import normDimens from '../../../resources/dimens/normDimens';
import PageStateComponent from '../widgets/pageState/PageStateComponent';
import DefaultErrorView from '../widgets/view/DefaultErrorView';
import { movieUseCase } from '../../../domain/usecase';
import { getApiErrorMessageFromError } from '../../../utils/AppUtils';
import DefaultLoadingView from '../widgets/view/DefaultLoadingView';
import { MovieTopRatedRC } from '../../../domain/model/movie/MovieTopRatedRC';
import { MovieTopRatedItemContent } from '../../../domain/model/movie/MovieTopRatedContent';
import NavigationRoutes from '../../navigation/NavigationRoutes';

interface Props {}

interface Route {
    params: {
        source?: string;
    };
}

const TopRated = (props: Props) => {
    const navigation: any = useNavigation();
    const route = useRoute() as Route;

    const [fullPageState, setFullPageState] = useState<PageStateType>(PageStateType.LOADING);
    const [fullPageErrorText, setFullPageErrorText] = useState<string>(strings.something_went_wrong);

    const [movies, setMovies] = useState<Array<MovieItemBean>>([]);
    const [pageNo, setPageNo] = useState<number>(1);
    const [paginationState, setPaginationState] = useState<PaginationStateType>(
        PaginationStateType.LOADING,
    );

    const getListOfMoviesData = async (request: MovieTopRatedRC) => {
        movieUseCase
            .getMovieTopRated({requestContent: request})
            .then((response) => {
                const newData = response?.results.map((item: MovieTopRatedItemContent)=>{
                    return toMovieItemBean(item)
                }) || [];
                let data = [];
                if (request.page === 1) {
                    data = [...newData];
                } else {
                    data = [...movies, ...newData];
                }
                setMovies(data);
                if (response.total_pages === request.page) {
                    setPaginationState(PaginationStateType.FINISHED);
                } else {
                    setPaginationState(PaginationStateType.IDLE);
                }
                setPageNo(request.page + 1);
                setFullPageState(PageStateType.SUCCESS);
            })
            .catch((err) => {
                const message = getApiErrorMessageFromError({error: err})
                setFullPageErrorText(message);
                if (request.page === 1) {
                    setFullPageState(PageStateType.ERROR);
                }
                setPaginationState(PaginationStateType.FINISHED);
            });
    };
   
    const init = async () =>{
        getListOfMoviesData({
            page: 1,
            langauge:'en-US'
        });
    }

    useEffect(() => {
        init();
    }, []);

    const onClickItem = (item: MovieItemBean) => {
        navigation.navigate(NavigationRoutes.movie_details, {
            movie: item
        });
    };

    const renderItem = ({ item, index }: { item: MovieItemBean; index: number }) => {
        return (
            <MovieItemView
                item={item}
                onClickItem={onClickItem}
                isFavourite={false}
            />
        );
    };

    const footerComponent = () => {
        return (
            <View style={styles.container5}>
                {paginationState === PaginationStateType.LOADING ? (
                    <ActivityIndicator
                        size="large"
                        color={colorCode.primary}
                        style={styles.container2}
                    />
                ) : (
                    <View style={styles.container3} />
                )}
            </View>
        );
    };

    const keyExtractor = (item: MovieItemBean, index: any) => {
        return item.id.toString();
    };

    const onRetry = () => {
        setFullPageState(PageStateType.LOADING)
        setPaginationState(PaginationStateType.LOADING);
        getListOfMoviesData({
            page: 1,
            langauge:'en-US'
        });
    };

    const onEndReached = () => {
        if (paginationState !== PaginationStateType.FINISHED) {
            setPaginationState(PaginationStateType.LOADING);
            getListOfMoviesData({
                page: pageNo,
                langauge:'en-US'
            });
        }
    };

    return (
             <PageStateComponent
                pageState={fullPageState}
                errorComponent={
                    <DefaultErrorView
                        secondaryText={fullPageErrorText}
                        onRetry={onRetry}
                        backButtonVisible={false}
                    />
                }
                loadingComponent={
                    <DefaultLoadingView message={'Fetching top rated movies, please wait...'} /> 
                }>
            <View style={styles.container1}>
                <FlashList
                    data={movies}
                    renderItem={renderItem}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                    removeClippedSubviews={true}
                    estimatedItemSize={normDimens.DIMEN_260}
                    ListFooterComponent={footerComponent}
                    onEndReachedThreshold={0.5}
                    onEndReached={onEndReached}
                />
            </View>
            </PageStateComponent>
    );
};

export default TopRated;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.black,
        flex:1
    },
    container2: {
        marginVertical: normDimens.DIMEN_16,
        width: normDimens.DIMEN_32,
        height: normDimens.DIMEN_32,
    },
    container3: {
        width: normDimens.DIMEN_32,
        height: normDimens.DIMEN_32,
        marginVertical: normDimens.DIMEN_16,
    },
    container5: {
        width: normDimens.SCREEN_WIDTH,
        height: normDimens.DIMEN_80,
        alignItems: 'center',
    },
});
