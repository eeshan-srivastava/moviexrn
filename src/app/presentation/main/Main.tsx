import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import SafeArea from '../widgets/SafeArea';

interface Props {}

interface Route {
    params: {
        source?: string;
    };
}


const Main = (props: Props) => {
    const navigation: any = useNavigation();
    const route = useRoute() as Route;
  

    useEffect(() => {}, []);


    return (
        <SafeArea>
            <></>
        </SafeArea>
    );
};

export default Main;

const styles = StyleSheet.create({
    container1: {},
});
