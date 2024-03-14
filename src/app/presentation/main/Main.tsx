import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import SafeArea from '../widgets/SafeArea';
import colorCode from '../../../resources/colors/colorCode';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavTabData, BottomTabActionType, MainTabs } from '../widgets/bottomNavigationBar/BottomNavUtils';
import imageFile from '../../../resources/images/imageFile';
import ReactBottomNavBar from '../widgets/bottomNavigationBar/reactNavigation/ReactBottomNavBar';
import normDimens from '../../../resources/dimens/normDimens';
import NavigationRoutes from '../../navigation/NavigationRoutes';
import NowPlaying from '../movies/NowPlaying';
import Popular from '../movies/Popular';
import TopRated from '../movies/TopRated';
import Upcoming from '../movies/Upcoming';

interface Props {}

interface Route {
    params: {
        source?: string;
    };
}

const ReactNavTab = createBottomTabNavigator();

const Main = (props: Props) => {
    const navigation: any = useNavigation();
    const route = useRoute() as Route;
    const defaultTab = MainTabs.NowPlaying;
    const [selectedTab, setSelectedTab] = useState<string>(defaultTab);
    const activeTabs: any = useRef({ [selectedTab]: true });

    const onTabChange = (tabId: string, action: BottomTabActionType) => {
        if (tabId !== selectedTab) {
            activeTabs.current[tabId] = true;
            setSelectedTab(tabId);
        }
    };

    useEffect(() => {}, []);

    const tabs: Array<BottomNavTabData> = [
        {
            id: MainTabs.NowPlaying,
            label: MainTabs.NowPlaying,
            icon: imageFile.IC_NOW_PLAYING,
            activeTint: colorCode.primary,
            inactiveTint: colorCode.black3,
        },
        {
            id: MainTabs.Popular,
            label: MainTabs.Popular,
            icon: imageFile.IC_POPULAR,
            activeTint: colorCode.primary,
            inactiveTint: colorCode.black3,
        },
        {
            id: MainTabs.TopRated,
            label: MainTabs.TopRated,
            icon: imageFile.IC_TOP_RATED,
            activeTint: colorCode.primary,
            inactiveTint: colorCode.black3,
        },
        {
            id: MainTabs.Upcoming,
            label: MainTabs.Upcoming,
            icon: imageFile.IC_UPCOMING,
            activeTint: colorCode.primary,
            inactiveTint: colorCode.black3,
        },
    ];

    const tabBar = (props: any) => {
        return (
            <ReactBottomNavBar
                onTabChange={onTabChange}
                selectedTab={selectedTab}
                tabs={tabs}
                height={normDimens.DIMEN_60}
                state={props.state}
                descriptors={props.descriptors}
                navigation={props.navigation}
            />
        );
    };

    return (
        <SafeArea>
             <ReactNavTab.Navigator tabBar={tabBar}>
                <ReactNavTab.Screen
                    name={NavigationRoutes.now_palying}
                    component={NowPlaying}
                    options={{ headerShown: false }}
                />
                <ReactNavTab.Screen
                    name={NavigationRoutes.popular}
                    component={Popular}
                    options={{ headerShown: false }}
                />
                <ReactNavTab.Screen
                    name={NavigationRoutes.top_rated}
                    component={TopRated}
                    options={{ headerShown: false }}
                />
                <ReactNavTab.Screen
                    name={NavigationRoutes.upcoming}
                    component={Upcoming}
                    options={{ headerShown: false }}
                />
            </ReactNavTab.Navigator>
        </SafeArea>
    );
};

export default Main;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.black,
        flex:1
    },
});
