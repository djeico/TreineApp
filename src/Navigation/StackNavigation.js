import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Training, SignUp, Login, Settings, Diary, Start } from '../Screens';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

export function HomeNavigation() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}
export function TrainingNavigation() {
    return (
        <Stack.Navigator initialRouteName="Training" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Training" component={Training} />
        </Stack.Navigator>
    );
}
export function SignUpNavigation() {
    return (
        <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
export function LoginNavigation() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}
export function SettingsNavigation() {
    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}
export function DiaryNavigation() {
    return (
        <Stack.Navigator initialRouteName="Diary" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Diary" component={Diary} />
        </Stack.Navigator>
    );
}
export function StartNavigation() {
    return (
        <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Start" component={Start} />
        </Stack.Navigator>
    );
}

export default props => (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={BottomTabs} />
    </Stack.Navigator>
);