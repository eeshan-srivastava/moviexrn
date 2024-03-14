import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import colorCode from '../../../resources/colors/colorCode';
import ColorUtils from '../../../resources/colors/ColorUtils';
import normDimens from '../../../resources/dimens/normDimens';
import normFonts, { FontWeight } from '../../../resources/dimens/normFonts';
import { ImageResizeMode } from '../widgets/imageView/ImageUtils';
import ImageView from '../widgets/imageView/ImageView';
import TextView from '../widgets/textView/TextView';
import { MovieItemBean } from '../bean/MovieBean';

interface Props {
    item: MovieItemBean;
    style?: ViewStyle;
    onClickItem?: (item: MovieItemBean) => void;
    isFavourite?: boolean
}

const MovieItemView = (props: Props) => {
    const { item, style, onClickItem = () => {}, isFavourite = false } = props;

    return (
        <TouchableOpacity
            style={[styles.container1, style]}
            onPress={() => {
                onClickItem(item);
            }}
            activeOpacity={0.7}>
            <View style={isFavourite ? styles.container4 : styles.container3} pointerEvents={'none'}>
                <ImageView
                    source={{ uri: item.poster_path }}
                    style={styles.container2}
                    resizeMode={ImageResizeMode.cover}
                />
                <TextView
                    style={styles.text1}
                    fontWeight={FontWeight._600}
                    extraLineHeight={normFonts.FONT_2}>{item.title}</TextView>
            </View>
        </TouchableOpacity>
    );
};

export default MovieItemView;

const styles = StyleSheet.create({
    container1: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'pink',
        width: normDimens.SCREEN_WIDTH / 3,
        height: normDimens.DIMEN_148,
        borderWidth: normDimens.DIMEN_0_5,
        borderColor: ColorUtils.getAlphaColor({ colorCode: colorCode.black, opacityPercent: 4 }),
    },
    container2: {
        width: normDimens.DIMEN_50,
        height: normDimens.DIMEN_50,
        borderRadius: normDimens.DIMEN_80,
        marginTop: normDimens.DIMEN_32,
    },
    text1: {
        fontSize: normFonts.FONT_11,
        color: ColorUtils.getAlphaColor({ colorCode: '#343434', opacityPercent: 100 }),
        // backgroundColor:'green',
        marginTop: normDimens.DIMEN_12,
        maxWidth: normDimens.SCREEN_WIDTH / 3 - normDimens.DIMEN_16,
        textAlign: 'center',
    },
    container3: {
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorCode.transparent,
        width: normDimens.SCREEN_WIDTH / 3,
        height: normDimens.DIMEN_148,
        borderRadius: normDimens.DIMEN_10,
        // borderWidth:normDimens.DIMEN_1,
        // borderColor: colorCode.black
    },
    container4: {
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorUtils.getAlphaColor({ colorCode: colorCode.actionTint, opacityPercent: 100 }),
        width: normDimens.SCREEN_WIDTH / 3,
        height: normDimens.DIMEN_148,
        borderRadius: normDimens.DIMEN_0,
        // borderWidth:normDimens.DIMEN_1,
        // borderColor: colorCode.black
    },
});
