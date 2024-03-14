import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SafeArea from '../widgets/SafeArea';
import colorCode from '../../../resources/colors/colorCode';

interface Props {}

interface Route {
    params: {
        source?: string;
    };
}

const TopRated = (props: Props) => {
    const navigation: any = useNavigation();
    const route = useRoute() as Route;
   

    useEffect(() => {}, []);


    return (
        <SafeArea>
            <View style={styles.container1}></View>
        </SafeArea>
    );
};

export default TopRated;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.actionTint,
        flex:1
    },
});
