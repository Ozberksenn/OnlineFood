import LandingScreen from "./src/screens/LandingScreen/LandingScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CardScreen from "./src/screens/CardScreen/CardScreen";
import OfferScreen from "./src/screens/OfferScreen/OfferScreen";
import AccountScreen from "./src/screens/AccountScreen/AccountScreen";
import ViewOrder from "./src/screens/AccountScreen/ViewOrder/ViewOrder";
import FoodDetail from "./src/screens/HomeScreen/FoodDetailScreen/FoodDetail";
import RestaurantsDetail from "./src/screens/HomeScreen/RestaurantsDetailScreen/RestaurantsDetail";
import SignIn from "./src/screens/LandingScreen/SignIn/SignIn";
import SignUp from "./src/screens/LandingScreen/SignUp/SignUp";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import Toast from "react-native-toast-message";

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator(
      {
        SignInPage: SignIn,
        SignUpPage: SignUp,
        Landing: LandingScreen,
      },
      {
        defaultNavigationOptions: {
          headerShown: false,
        },
      }
    ),
  },
  homeStack: createBottomTabNavigator({
    home: {
      screen: createStackNavigator(
        {
          HomePage: HomeScreen,
          RestaurantsPage: RestaurantsDetail,
          FoodDetailPage: FoodDetail,
        },
        {
          defaultNavigationOptions: {
            headerShown: false,
          },
        }
      ),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true ? (
              <AntDesign name="home" size={26} color="#FF1E1E" />
            ) : (
              <AntDesign name="home" size={26} color="#7D6E83" />
            );
          return icon;
        },
      },
    },
    offer: {
      screen: createStackNavigator(
        {
          OfferPage: OfferScreen,
        },
        {
          defaultNavigationOptions: {
            headerShown: false,
          },
        }
      ),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true ? (
              <MaterialIcons name="local-offer" size={26} color="#FF1E1E" />
            ) : (
              <MaterialIcons name="local-offer" size={26} color="#7D6E83" />
            );
          return icon;
        },
      },
    },
    Card: {
      screen: createStackNavigator(
        {
          CardPage: CardScreen,
        },
        {
          defaultNavigationOptions: {
            headerShown: false,
          },
        }
      ),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true ? (
              <Entypo name="shopping-cart" size={24} color="#FF1E1E" />
            ) : (
              <Entypo name="shopping-cart" size={24} color="#7D6E83" />
            );
          return icon;
        },
      },
    },
    Account: {
      screen: createStackNavigator(
        {
          AccountPage: AccountScreen,
          ViewOrderPage: ViewOrder,
        },
        {
          defaultNavigationOptions: {
            headerShown: false,
          },
        }
      ),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let icon =
            focused == true ? (
              <MaterialIcons name="account-box" size={26} color="#FF1E1E" />
            ) : (
              <MaterialIcons name="account-box" size={26} color="#7D6E83" />
            );
          return icon;
        },
      },
    },
  }),
});

const AppNavigation = createAppContainer(switchNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
      <Toast />
    </Provider>
  );
}
