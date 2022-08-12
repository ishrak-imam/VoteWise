import * as routeKeys from '@navigation/routeKeys';

export type HomeStackNavigation = {
  [routeKeys.homeScreen]: undefined;
  [routeKeys.mnemonicScreen]: undefined;
};

export type MenuStackNavigation = {
  [routeKeys.settingScreen]: undefined;
};

export type BottomTabNavigation = {
  [routeKeys.homeNavigator]: undefined;
  [routeKeys.menuNavigator]: undefined;
};
