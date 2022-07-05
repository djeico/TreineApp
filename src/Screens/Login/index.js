import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { HomeNavigation, SignUpNavigation } from "../../Navigation";
import Styles from './styles';

export default props => (
    <View style={Styles.container}>
        <Text style={Styles.text}>Login</Text>
        <Button
            title="Home"
            onPress={() => {
                props.navigation.navigate('Home');
            }}
        />
        <Button
            title="SignUp"
            onPress={() => {
                props.navigation.navigate('SignUp');
            }}
        />        
    </View>
);