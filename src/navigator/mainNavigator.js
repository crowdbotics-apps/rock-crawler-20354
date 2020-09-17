import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList102677Navigator from '../features/ArticleList102677/navigator';
import ArticleList102676Navigator from '../features/ArticleList102676/navigator';
import ArticleList102675Navigator from '../features/ArticleList102675/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList102677: { screen: ArticleList102677Navigator },
ArticleList102676: { screen: ArticleList102676Navigator },
ArticleList102675: { screen: ArticleList102675Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
