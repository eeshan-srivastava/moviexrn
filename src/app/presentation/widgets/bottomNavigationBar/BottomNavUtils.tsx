import { ImageSourcePropType } from 'react-native/types';

enum MainTabs {
    NowPlaying = 'Now Playing',
    Popular = 'Popular',
    TopRated = 'Top Rated',
    Upcoming = 'Upcoming',
}

enum BottomTabActionType {
    NONE = 'NONE',
    TAB_SELECTED = 'TAB_SELECTED',
}

interface BottomNavTabData {
    id: string;
    label: string;
    activeIcon?: ImageSourcePropType | { uri: string; priority?: string };
    inActiveIcon?: ImageSourcePropType | { uri: string; priority?: string };
    icon?: ImageSourcePropType | { uri: string };
    activeTint?: string;
    inactiveTint?: string;
    customImage?: boolean;
}

export { MainTabs, BottomTabActionType, type BottomNavTabData };
