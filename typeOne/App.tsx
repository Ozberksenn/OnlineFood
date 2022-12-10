import LandingScreen from "./src/screens/LandingScreen/LandingScreen";
import PostScreen from "./src/screens/PostScreen/PostScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import CardScreen from "./src/screens/CardScreen/CardScreen";
import OfferScreen from "./src/screens/OfferScreen/OfferScreen";
import AccountScreen from "./src/screens/AccountScreen/AccountScreen";
import EditProfile from "./src/screens/AccountScreen/EditProfile/EditProfile";
import DeleteUser from "./src/screens/AccountScreen/DeleteUser/DeleteUser";
import ViewOrder from "./src/screens/AccountScreen/ViewOrder/ViewOrder";
import FoodDetail from "./src/screens/HomeScreen/FoodDetailScreen/FoodDetail";
import CategoryDetailScreen from "./src/screens/HomeScreen/CategoryDetailScreen/CategoryDetailScreen";
import RestaurantsDetail from "./src/screens/HomeScreen/RestaurantsDetailScreen/RestaurantsDetail";
import SignIn from "./src/screens/LandingScreen/SignIn/SignIn";
import SignUp from "./src/screens/LandingScreen/SignUp/SignUp";
import { MaterialIcons, Zocial, Entypo, AntDesign } from "@expo/vector-icons";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator(
      {
        // SignInPage: SignIn,
        // SignUpPage: SignUp,
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
    post: {
      screen: createStackNavigator(
        {
          PostScreenPage: PostScreen,
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
              <Zocial name="posterous" size={24} color="#FF1E1E" />
            ) : (
              <Zocial name="posterous" size={24} color="#7D6E83" />
            );
          return icon;
        },
      },
    },
    home: {
      screen: createStackNavigator(
        {
          HomePage: HomeScreen,
          RestaurantsPage: RestaurantsDetail,
          FoodDetailPage: FoodDetail,
          CategoryDetailPage: CategoryDetailScreen,
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
          EditProfilePage: EditProfile,
          DeleteUserPage: DeleteUser,
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
