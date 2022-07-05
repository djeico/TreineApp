import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    HomeNavigation,
    TrainingNavigation,
    SettingsNavigation,
    DiaryNavigation,
    StartNavigation,
} from "./StackNavigation";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="[Home]" component={HomeNavigation} />
            <Tab.Screen name="[Treinos]" component={TrainingNavigation} options={{ headerShown: true }} />
            <Tab.Screen name="[Começar]" component={StartNavigation} options={{ headerShown: true }} />
            <Tab.Screen name="[Diário]" component={DiaryNavigation} />
            <Tab.Screen name="[Ajustes]" component={SettingsNavigation} />
        </Tab.Navigator>
    );
}