import * as React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';

import GetScreen from "./screens/GetScreen";
import PostScreen from "./screens/PostScreen";
import PutScreen from "./screens/PutScreen";
import DeleteScreen from "./screens/DeleteScreen";

const GetName = 'Get';
const PostName = 'Post';
const PutName = 'Put';
const DeleteName = 'Delete';

const Tab = createBottomTabNavigator()

export default function MainContainer() {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName={GetName}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;

                if(rn === GetName){
                    iconName = focused ? 'arrow-down' : 'arrow-down'
                }else if (rn === PostName){
                    iconName = focused ? 'arrow-up' : 'arrow-up'
                }else if (rn === PutName){
                    iconName = focused ? 'create' : 'create'
                }else{
                    iconName = focused ? 'trash' : 'trash'
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
        })}


        >
            <Tab.Screen name={GetName} component={GetScreen} />
            <Tab.Screen name={PostName} component={PostScreen} />
            <Tab.Screen name={PutName} component={PutScreen} />
            <Tab.Screen name={DeleteName} component={DeleteScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
