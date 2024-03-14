import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import SafeArea from '../widgets/SafeArea';
import colorCode from '../../../resources/colors/colorCode';
import normDimens from '../../../resources/dimens/normDimens';
import { ArrowDownLeft, NavArrowLeft, NavArrowRight } from 'iconoir-react-native';
import TextView from '../widgets/textView/TextView';
import { MovieItemBean } from '../bean/MovieBean';
import normFonts, { FontWeight } from '../../../resources/dimens/normFonts';
import BackPressUtils from '../../../utils/BackPressUtils';
import NavigationRoutes from '../../navigation/NavigationRoutes';
import ImageView from '../widgets/imageView/ImageView';
import { ImageResizeMode } from '../widgets/imageView/ImageUtils';
import ColorUtils from '../../../resources/colors/ColorUtils';

interface Props {}

interface Route {
    params: {
        movie: MovieItemBean
    };
}

const MovieDetails = (props: Props) => {
    const navigation: any = useNavigation();
    const route = useRoute() as Route;
    const {movie} = route?.params
   

    useEffect(() => {}, []);

    const onBackPress = () =>{
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            navigation.reset({ routes: [{ name: NavigationRoutes.main }] });
        }
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener(BackPressUtils.HARDWARE_BACKPRESS, onBackPress);
        return () => BackHandler.removeEventListener(BackPressUtils.HARDWARE_BACKPRESS, onBackPress);
    }, []);

    const onBackPresssed = () => {
        onBackPress();
    };


    return (
        <SafeArea>
            <View style={styles.container1}>
                <View style={styles.container2}>
                    <NavArrowLeft
                        color={colorCode.actionTint}
                        width={normDimens.DIMEN_22}
                        height={normDimens.DIMEN_22}
                        strokeWidth={normDimens.DIMEN_2}
                        style={{ alignSelf: 'center', marginLeft: normDimens.DIMEN_16 }}
                        onPress={onBackPresssed}
                    />
                    <TextView style={styles.text1} fontWeight={FontWeight._600}>{movie.title}</TextView>
                </View>
                <View style={styles.container3}>
                    <ImageView source={{uri:movie.backdrop_path}} style={styles.container4} resizeMode={ImageResizeMode.contain}/>
                    <TextView style={styles.text2} fontWeight={FontWeight._400} extraLineHeight={normFonts.FONT_4}>{movie.overview}</TextView>
                    <View style={styles.container5}>
                    <TextView style={styles.text3} fontWeight={FontWeight._400} extraLineHeight={normFonts.FONT_4}>{'Release date: '+movie.release_date}</TextView>
                    </View>
                    <View style={styles.container6}>
                    <TextView style={styles.text4} fontWeight={FontWeight._400} extraLineHeight={normFonts.FONT_4}>{'Average rating: '+movie.vote_average}</TextView>
                    </View>
                </View>
            </View>
        </SafeArea>
    );
};

export default MovieDetails;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.black2,
        flex:1
    },
    container2:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:colorCode.black_232323,
        height: normDimens.DIMEN_56,
        width: normDimens.SCREEN_WIDTH
    },
    text1:{
        fontSize: normFonts.FONT_16,
        color: colorCode.white,
        alignSelf:'center',
        marginLeft: normDimens.DIMEN_16
    },
    container3:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:colorCode.black2,
        width: normDimens.SCREEN_WIDTH,
        flex:1
    },
    container4:{
        height: normDimens.DIMEN_200
    },
    text2:{
        fontSize: normFonts.FONT_16,
        color: colorCode.white_D9D9D9,
        marginLeft: normDimens.DIMEN_8,
        marginTop: normDimens.DIMEN_16
    },
    text3:{
        fontSize: normFonts.FONT_14,
        color: colorCode.actionTint,
        marginLeft: normDimens.DIMEN_8,
    },
    text4:{
        fontSize: normFonts.FONT_14,
        color: colorCode.primary,
        marginLeft: normDimens.DIMEN_8,
    },
    container5:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: ColorUtils.getAlphaColor({ colorCode: colorCode.black3, opacityPercent: 90 }),
        borderRadius: normDimens.DIMEN_8,
        paddingVertical: normDimens.DIMEN_8,
        paddingHorizontal: normDimens.DIMEN_16,
        marginTop: normDimens.DIMEN_16,
        maxWidth: normDimens.DIMEN_230,
        marginLeft: normDimens.DIMEN_8
    },
    container6:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: ColorUtils.getAlphaColor({ colorCode: colorCode.white, opacityPercent: 90 }),
        borderRadius: normDimens.DIMEN_8,
        paddingVertical: normDimens.DIMEN_8,
        paddingHorizontal: normDimens.DIMEN_16,
        marginTop: normDimens.DIMEN_16,
        maxWidth: normDimens.DIMEN_230,
        marginLeft: normDimens.DIMEN_8
    }
});
