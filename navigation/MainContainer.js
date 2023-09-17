import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";

import GetScreen from "./screens/GetScreen";
import PostScreen from "./screens/PostScreen";
import PutScreen from "./screens/PutScreen";
import DeleteScreen from "./screens/DeleteScreen";
import About from "./screens/About";

const GetName = "Get";
const PostName = "Post";
const PutName = "Put";
const DeleteName = "Delete";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName={GetName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === GetName) {
            iconName = focused ? "arrow-down" : "arrow-down";
          } else if (rn === PostName) {
            iconName = focused ? "arrow-up" : "arrow-up";
          } else if (rn === PutName) {
            iconName = focused ? "create" : "create";
          } else {
            iconName = focused ? "trash" : "trash";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={GetName} options={{ headerShown: false }} component={GetScreen} />
      <Tab.Screen name={PostName} options={{ headerShown: false }} component={PostScreen} />
      <Tab.Screen name={PutName} options={{ headerShown: false }} component={PutScreen} />
      <Tab.Screen name={DeleteName} options={{ headerShown: false }} component={DeleteScreen} />
    </Tab.Navigator>
  );
};

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={Home}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
